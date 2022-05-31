import React, { useState } from "react";
import "./UserInput.css";
import Button from "../UI/Button";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const NameInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredName(event.target.value);
  };

  const AgeInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const UserData = {
      name: enteredName,
      age: enteredAge,
    };
    props.onSaveUserData(UserData);
    setEnteredName("");
    setEnteredAge("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="user-data__controls">
        <div className="user-data__control">
          <label>Name</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={NameInputChangeHandler}
          />
        </div>
        <div className="user-data__control">
          <label>Age</label>
          <input
            id="age"
            type="number"
            min="1"
            value={enteredAge}
            onChange={AgeInputChangeHandler}
          />
        </div>
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};
export default UserInput;
