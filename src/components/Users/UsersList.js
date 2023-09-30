import styles from './UsersList.module.css';

import Card from '../UI/Card';

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((el, i) => (
          <li key={i}>
            {el.username} ({el.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
