import React from 'react';

const AddUser = () => {

  const addUserHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={addUserHandler}>
      <label form="username">Username</label>
      <input id="username" type="text" />
      <label form="age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  )
};

export default AddUser;
