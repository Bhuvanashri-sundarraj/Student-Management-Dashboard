# Quorium Consulting - Student Management System (SMS)

## Overview
This is a simple **Student Management System** developed for **Quorium Consulting**.  
It allows administrators to:
- View total students on a dashboard.
- See a searchable list of students.
- Add new student records with name, email, course, and status.

The system uses **Vanilla JavaScript**, **Bootstrap 5**, and **localStorage** for data persistence.  
Student data is also fetched from a public API (`https://dummyjson.com/users`) and combined with manually added records.

---

## Features

1. **Dashboard**
   - Displays a welcome message.
   - Shows total number of students.
   
2. **Students List**
   - Displays all students in a table.
   - Table is searchable by **name** or **course**.
   - Status is displayed as **Active** or **Inactive** badges.
   - Students can be removed from the list.

3. **Add Student**
   - Form to add a new student with:
     - Full Name
     - Email
     - Course
     - Status (Active / Inactive)
   - Automatically assigns a unique ID starting from 1000 for manually added students.
   - Redirects back to the dashboard after submission.

---

## Technologies Used

- **HTML5 & CSS3**
- **JavaScript (Vanilla)**
- **Bootstrap 5**
- **localStorage** for saving custom student records
- **Fetch API** to get initial student data

---

## Setup & Run

1. Clone or download this repository.
2. Open the project folder in your preferred editor (e.g., VS Code).
3. Open `index.html` in a web browser.
4. Login using the following credentials:
   - **Username:** `admin`
   - **Password:** `Password@123`
5. Explore the dashboard, search students, and add new student records.

---

## Notes

- The system **does not use a backend** — all data is stored in the browser.
- Students fetched from the API are read-only; only manually added students can be removed.
- Data persists in **localStorage**, so refreshing the page keeps your custom students intact.

---

## Author
- **Bhuvanashri SK**
- Developed as an internship project for **Quorium Consulting**
