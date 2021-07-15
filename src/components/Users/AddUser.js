import React, { useState } from 'react';
import Card from '../UI/Card';

import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);

  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(username, age);
  };

  const usernameChangeHandler = ({ target }) => setUsername(target.value);

  const ageChangeHandler = ({ target }) => setAge(target.value);

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label form="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label form="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
