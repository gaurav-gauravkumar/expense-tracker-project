import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addUser, updateUser, deleteUser, setEditIndex } from "./userSlice";

export default function UserAdd() {
  // const dispatch = useDispatch();
  // const { list, editIndex } = useSelector((state) => state.users);

  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});

  // const createUser=async()=>{
  //   console.log(amount, name, date);
  //   const url="http://localhost:3000/users";
  //   let response = await fetch(url,{
  //     method: 'Post',
  //     body:JSON.stringify({amount, name, date})
  //   });
  //   response= await response.json();
  //   if(response) {
  //     alert("new user added")
  //   }
  // }

  const validate = () => {
    let errs = {};
    if (amount < 0 || !amount) errs.amount = "Amount is required";
    if (!name) errs.name = "Name is required";
    else if (!date) errs.date = "Date is required";
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "Post",
      body: JSON.stringify({ amount, name, date }),
    });
    response = await response.json();
    if (response) {
      alert("new user added");
    }

    //   const newUser = { amount, name, date };

    //   if (editIndex !== null) {
    //     dispatch(updateUser(newUser));
    //   } else {
    //     dispatch(addUser(newUser));
    //   }

    //   setAmount("");
    //   setName("");
    //   setDate("");
  };

  // const handleEdit = (index) => {
  //   const user = list[index];
  //   setAmount(user.amount);
  //   setName(user.name);
  //   setDate(user.date);
  //   dispatch(setEditIndex(index));
  // };

  return (
    <div className="contain">
      <h2>Expense - Tracker</h2>

      <input
        type="number"
        min="0"
        step="1"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      {errors.amount && <p style={{ color: "red" }}>{errors.amount}</p>}

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}

      <button onClick={handleSubmit}>
        Register
        {/* {editIndex !== null ? "Update" : "Register"} */}
      </button>

      {/* <h3>Users: </h3>
      <ul>
        {list.map((u, i) => (
          <li key={i}>
            {u.amount} - {u.name} - {u.date} -{" "}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => dispatch(deleteUser(i))}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
