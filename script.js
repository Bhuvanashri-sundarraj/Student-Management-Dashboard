// script.js

// Global student array (holds API + custom students)
let students = [];

// Load custom students from local storage
const localStudents = JSON.parse(localStorage.getItem('students') || '[]');

// Fetch students from API and merge with local storage
fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => {
        const apiStudents = data.users.map(user => ({
            id: user.id, // IDs from API are 1–30
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            course: ['Engineering', 'Business', 'Science', 'Arts'][Math.floor(Math.random() * 4)],
            status: Math.random() > 0.5 ? 'Active' : 'Inactive',
            isCustom: false // flag to differentiate
        }));

        // Merge both lists
        students = [...apiStudents, ...localStudents];
        renderStudents(students);
    })
    .catch(() => {
        // If API fails, fall back to local students only
        students = [...localStudents];
        renderStudents(students);
    });

/**
 * Render the student list in the table
 * @param {Array} studentList - Array of student objects
 */
function renderStudents(studentList) {
    const tbody = document.getElementById('studentTableBody');
    const countEl = document.getElementById('studentCount');

    if (tbody && countEl) {
        tbody.innerHTML = '';

        studentList.forEach((s) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${s.email}</td>
                <td>${s.course}</td>
                <td>
                    <span class="badge ${s.status === 'Active' ? 'bg-success' : 'bg-secondary'}">
                        ${s.status}
                    </span>
                </td>
                <td>
                    <button class="btn btn-sm btn-outline-danger" onclick="deleteStudent(${s.id})">🗑</button>
                </td>
            `;
            tbody.appendChild(row);
        });

        // Update student count
        countEl.textContent = studentList.length;
    }
}

/**
 * Delete a student by ID
 * @param {number} id - Student's ID
 */
function deleteStudent(id) {
    // Remove from memory
    students = students.filter(s => s.id !== id);

    // Save only custom students back to localStorage
    const customOnly = students.filter(s => s.isCustom);
    localStorage.setItem('students', JSON.stringify(customOnly));

    // Refresh the display
    renderStudents(students);
}

// Search filter for table
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = students.filter(s =>
                s.name.toLowerCase().includes(query) ||
                s.course.toLowerCase().includes(query)
            );
            renderStudents(filtered);
        });
    }
});
