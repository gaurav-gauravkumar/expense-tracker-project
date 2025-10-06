import { NavLink, Route, Routes } from "react-router";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import UserEdit from "./UserEdit";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <ul className="card">
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>
      {/* <h1>Make Routes and Pages for Add User and User List UI</h1> */}

      <Routes className="card">
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>
    </div>
  );
}
