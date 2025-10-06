import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function UserList() {
  useEffect(() => {
    getUserData();
  }, []);

  //ab response wale data ko store krenge

  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const url = "http://localhost:3000/users";

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
  };

  const deleteUser = async (id) => {
    let response = await fetch(url + "/" + id, {
      method: "delete",
    });
    response = await response.json();
    getUserData();
  };

  const editUser = (id) => {
    navigate("/edit/" + id);
  };
  return (
    <div>
      <ul className="card">
        <li>Amount</li>
        <li>Name</li>
        <li>Date</li>
        <li>Action</li>
      </ul>
      {userData.map((user) => (
        <ul className="card">
          <li>{user.amount}</li>
          <li>{user.name}</li>
          <li>{user.date}</li>
          <li>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => editUser(user.id)}>Edit</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
