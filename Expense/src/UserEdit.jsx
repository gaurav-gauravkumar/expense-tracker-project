// import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UserEdit() {
  //edit mai information pehle se kaise laye use params() se aayega
  const { id } = useParams();

  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const url = "http://localhost:3000/users/" + id;
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    // console.log(id);
    let response = await fetch(url);
    response = await response.json();

    console.log(response);
    setAmount(response.amount);
    setName(response.name);
    setDate(response.date);
  };

  const updateUserData = async () => {
    console.log(amount, name, date);
    let response = await fetch(url, {
      method: "Put",
      body: JSON.stringify({ amount, name, date }),
    });
    response = await response.json();
    console.log(response);
    if (response) {
      alert("User data updated");
      navigate("/");
    }
  };
  return (
    <div className="contain">
      <h2>Expense - Tracker Edit</h2>

      <input
        type="number"
        min="0"
        step="1"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      {/* {errors.amount && <p style={{ color: "red" }}>{errors.amount}</p>} */}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {/* {errors.name && <p style={{ color: "red" }}>{errors.name}</p>} */}

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      {/* {errors.date && <p style={{ color: "red" }}>{errors.date}</p>} */}

      <button onClick={updateUserData}>
        Update User
        {/* {editIndex !== null ? "Update" : "Register"} */}
      </button>
    </div>
  );
}

export default UserEdit;
