import React, { useState } from 'react';
import Card from '../UI/Card';

import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(1);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.toString().trim().length === 0)
      return;
    if (+age < 1)
      return;

    console.log(username, age);
    setUsername('');
    setAge(1);
  };

  const usernameChangeHandler = ({ target }) => setUsername(target.value);

  const ageChangeHandler = ({ target }) => setAge(target.value);

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label form="username">Username</label>
        <input id="username" type="text" value={username} onChange={usernameChangeHandler} />
        <label form="age">Age (Years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
