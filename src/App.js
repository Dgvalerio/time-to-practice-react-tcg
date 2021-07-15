import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModal from './components/UI/ErrorModal';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) =>
    setUsersList((prev) => [...prev, { id: Math.random().toString(), name, age }]);

  return (
    <div>
      <ErrorModal title="An error occurred!" message="Something went wrong!" />
      <div>
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={usersList} />
      </div>
    </div>
  );
};

export default App;
