import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './ErrorModal.module.css';

import Button from './Button';
import Card from './Card';

const Backdrop = (props) => {
  return (
    <div
      className={styles.backdrop}
      onClick={() => {
        props.onCloseModal();
      }}
    />
  );
};

const Overlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button
          onClick={() => {
            props.onCloseModal();
          }}
        >
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {/*portal ini cek video 138, intinya dia inject html ke public/index.html*/}
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById('backdrop-root')
      )}

      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default ErrorModal;
