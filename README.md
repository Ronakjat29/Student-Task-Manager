# The "Student Task Manager" Website – Web Development(Full Stack)
## 1. Project Title & Goal
The goal of this project is to build a simple Full Stack Single Page Application (SPA) that allows users to add and view homework tasks dynamically using a Node.js backend and a clean, interactive frontend using HTML and JS.
### Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Storage: JSON File
Architecture: REST API + SPA

## 2. Setup Instructions
Follow these exact steps to run the project locally:

Step 1: Clone the repository
git clone https://github.com/Ronakjat29/Student-Task-Manager

Step 2: Navigate to the project folder
cd Task-Manager

Step 3: Install Dependencies
``bash
npm install

Step 4: Start the Server
node server.js

Step 5: Open your Browser and visit
http://localhost:3000

## 3.The Logic (How I Thought)
Why did I choose this approach?
The goal of this project was to demonstrate clear full-stack fundamentals rather than rely on heavy frameworks. I chose Node.js with Express for the backend because it enables quick API development while remaining easy to understand and debug.
Instead of using a full database, I used a local JSON file for storage to keep the project lightweight and focused on:

API request handling
Persistent data storage
Frontend-backend interaction
On the frontend, I deliberately used vanilla HTML, CSS, and JavaScript to showcase how a Single Page Application works internally, including asynchronous API calls, DOM manipulation, and UI updates without page reloads.

What were the hardest bugs you faced, and how did you fix them?

Backend – Cannot GET / Issue The server initially failed to load the frontend. This was resolved by properly serving static files using express.static(). This helped me understand how backend servers deliver frontend assets.

Backend – Data Not Persisting Tasks were lost after server restarts because the JSON file was not handled safely. I fixed this by ensuring the file exists and is correctly read and written after each update.

Frontend – addTask is not defined Error This error occurred due to incorrect JavaScript scoping when using inline event handlers. I resolved it by separating JavaScript into its own file and attaching event listeners properly.

Frontend – UI Not Updating Dynamically New tasks were not appearing instantly. This was fixed by re-fetching task data after each successful API call, reinforcing SPA principles.

These issues improved my understanding of debugging, asynchronous logic, and frontend-backend coordination.

Solving these bugs helped me understand the importance of proper project structure, middleware usage, asynchronous programming, and frontend-backend coordination, which are essential skills in full stack development.

## 4.Output Screenshot
Below are screenshots proving the application works as required:
Yaha par 3 task add karna vo screen ka screenshot lagana
Aur .json file ka bhi laga dena jisme task ka data aa rha hai
(The screenshots show three tasks added successfully without refreshing the page).
 <img width="1431" height="712" alt="Screenshot 2026-01-28 at 10 23 08 AM" src="https://github.com/user-attachments/assets/c519c370-dbe1-46fd-84e5-563df1873dc0" />
<img width="1430" height="716" alt="Screenshot 2026-01-28 at 10 25 13 AM" src="https://github.com/user-attachments/assets/dddad7c4-c280-4949-9fcb-15dfc92c9512" />
<img width="1213" height="696" alt="Screenshot 2026-01-28 at 10 25 44 AM" src="https://github.com/user-attachments/assets/3ea193d2-e14d-4327-bb83-1afe85271eb6" />



## 5. Future Improvements
If given additional development time, this project can be extended in several meaningful ways to improve functionality, scalability, and user experience:

Task Management Enhancements:
Introduce the ability to edit and delete tasks, allowing users to manage their homework list more flexibly and correct mistakes without re-adding tasks.

Task Completion Tracking:
Implement a task completion feature using checkboxes along with visual indicators (such as color changes or strikethrough text) to clearly distinguish completed and pending tasks.

Database Integration:
Replace the JSON file storage with a relational database (SQLite) or a NoSQL database (MongoDB) to improve data reliability, scalability, and support more complex queries.

Responsive Design Improvements:
Optimize the user interface for mobile and tablet devices to ensure a consistent and accessible experience across different screen sizes.

User Authentication and Personalization:
Add user authentication so that multiple users can securely log in and maintain their own individual task lists, making the application suitable for real-world usage.

These enhancements would transform the project from a simple academic prototype into a more complete and production-ready full stack application.
