import { useState } from 'react';
import styles from './login.module.css';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login/')({
  component: () => {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.loginBox}>
            <div className={styles.signInOptions}>
              <h2>Sign in</h2>
              <button className={styles.imdbSignIn}>Sign in with IMDb</button>
              <button className={styles.amazonSignIn}>
                Sign in with Amazon
              </button>
              <button className={styles.googleSignIn}>
                Sign in with Google
              </button>
              <button className={styles.appleSignIn}>Sign in with Apple</button>
              <a href="#" className={styles.moreOptions}>
                Show more options
              </a>
              <div className={styles.divider}>or</div>
              <button className={styles.createAccount}>
                Create a New Account
              </button>
              <p className={styles.terms}>
                By signing in, you agree to IMDb's{' '}
                <a href="#">Conditions of Use</a> and{' '}
                <a href="#">Privacy Policy</a>.
              </p>
            </div>

            <div className={styles.benefits}>
              <h3>Benefits of your free IMDb account</h3>
              <ul>
                <li>Personalized Recommendations</li>
                <li>Your Watchlist</li>
                <li>Your Ratings</li>
                <li>Contribute to IMDb</li>
              </ul>
            </div>
          </div>

          <div className={styles.recentlyViewed}>
            <h3>Recently Viewed</h3>
            <div className={styles.thumbnails}>
              {/* Add thumbnail images here */}
            </div>
            <a href="#" className={styles.clearHistory}>
              Clear your history
            </a>
          </div>
        </main>
      </div>
    );
  },
});
