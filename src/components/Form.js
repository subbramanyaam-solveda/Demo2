import React, { useState } from "react";

import Card from "./Card";
import classes from "./Form.module.css";
import Button from "./Button";

import ErrorModal from "./ErrorModal";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error,setError]= useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title:'Invalid input',
        message:'please enter a valid name and age (non-empty-values).'
      });
      
      return;

    }
    if (+age < 1) {
      setError({
        title:'Invalid age',
        message:'please enter a valid age(> 0)'
      })
      return;
    }
    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const UsernamechangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const agechangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler =() =>{
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={UsernamechangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="text" value={age} onChange={agechangeHandler} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
    </div>
  );
};

export default Form;
