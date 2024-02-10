import { useState } from 'react';
import styles from './login.module.css';

export const Login = () => {
  const [toggle, setToggle] = useState(true);

  const onClickHandler = () => setToggle(!toggle);

  return (
    <div className={styles.container}>
      {toggle ? (
        <div className={`${styles.container__form} ${styles.containerSignup}`}>
          <form action="#" className={styles.form} id="form1">
            <h2 className={styles.form__title}>Sign Up</h2>
            <input type="text" placeholder="User" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
            <button className={styles.btn}>Sign Up</button>
          </form>
        </div>
      ) : (
        <div className={`${styles.container__form} ${styles.containerSignin}`}>
          <form action="#" className={styles.form} id="form2">
            <h2 className={styles.form__title}>Sign In</h2>
            <input type="email" placeholder="Email" className={styles.input} />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
            <a href="#" className={styles.link}>
              Forgot your password?
            </a>
            <button className={styles.btn}>Sign In</button>
          </form>
        </div>
      )}

      <div className={styles.overlay}>
        {toggle ? (
          <div className={`${styles.overlay__panel} ${styles.overlayLeft}`}>
            <button className={styles.btn} id="signIn" onClick={onClickHandler}>
              Sign In
            </button>
          </div>
        ) : (
          <div className={`${styles.overlay__panel} ${styles.overlayRight}`}>
            <button className={styles.btn} id="signUp" onClick={onClickHandler}>
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
