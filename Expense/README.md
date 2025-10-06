# Expense Tracker (React + JSON Server)

Ye project **React (frontend)** aur **JSON Server (backend)** ka combination hai.  
Isme aap expenses **add, list, edit, delete** kar sakte hain.

---

## 🧩 Step 1: Repository Clone karo

Terminal / Command Prompt me likhe:

```bash
git clone https://github.com/gaurav-gauravkumar/expense-tracker-project.git
```

📂 Step 2 — Open Project Folder

cd expense-tracker-project

Step 3 — Go inside the frontend folder

cd Expense

Step 4 — Install all dependencies

npm install

Step 5 — Run the React app

npm run dev

This will start your frontend on:
👉 http://localhost:5173/

aur ab ek aur terminal khole backend Setup (json Server api) k liye lekin dhyan rhe iss doraan frontend ko close na kre usse chalne de

Step 6 — Open a new terminal (don’t close the frontend one)

cd ../api

Step 7 — Run JSON Server

npx json-server db.json

This will start your backend (API) on:
👉 http://localhost:3000/users

Important Notes

Make sure both terminals are running (frontend + backend).

Don’t close the terminal until testing is done.

The React app will automatically fetch data from the JSON Server API.

You can open db.json to see or manually add sample users.

Features

✅ Add new expenses
✅ Edit existing expense
✅ Delete an expense
✅ Responsive UI
✅ Real API connection using JSON Server

simple language mai bole toh

Pehle npm run dev se frontend chalao (5173 port pe chalega)
Dusre terminal me npx json-server db.json chalao (3000 port pe chalega)
Dono sath run hone par data frontend me dikhega aur CRUD operation chalega.
