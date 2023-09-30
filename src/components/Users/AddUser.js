import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({ username: '', age: '' });
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non - empty values)',
      });
      return;
    }

    if (userInput.age * 1 < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0)',
      });
      return;
    }

    setUserInput({ username: '', age: '' });
    props.onAddUser(userInput);
  };

  const changeHandler = (input, value) => {
    setUserInput((prev) => {
      return { ...prev, [input]: value };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userInput.username}
            onChange={(e) => changeHandler('username', e.target.value)}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={userInput.age}
            onChange={(e) => changeHandler('age', e.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
