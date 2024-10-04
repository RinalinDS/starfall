import { ShowMoreOptions } from './ShowMoreOptions.tsx/ShowMoreOptions';
import { Typography } from '../../components/ui/Typography/Typography';
import styles from './login.module.css';

export const Login = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.loginBox}>
          <div className={styles.signInOptions}>
            <h2>Sign in</h2>
            <button className={styles.imdbSignIn}>Sign in with IMDb</button>
            <button className={styles.googleSignIn}>Sign in with Google</button>
            <ShowMoreOptions>
              <div className={styles.moreOptions}>
                <button className={styles.appleSignIn}>
                  Sign in with Apple
                </button>
                <button className={styles.amazonSignIn}>
                  Sign in with Amazon
                </button>
              </div>
            </ShowMoreOptions>
            <div className={styles.divider}>or</div>
            <button className={styles.createAccount}>
              Create a New Account
            </button>
            <Typography variant="body2" className={styles.terms}>
              By signing in, you agree to IMDb's{' '}
              <a href="#">Conditions of Use</a> and{' '}
              <a href="#">Privacy Policy</a>.
            </Typography>
          </div>

          <div className={styles.benefits}>
            <Typography as="h3" className={styles.benefitsTitle}>
              Benefits of your free IMDb account
            </Typography>
            <ul className={styles.list}>
              <li>
                <Typography as="p" variant="h6">
                  Personalized Recommendations
                </Typography>
                <Typography variant="body2">
                  Discover shows you'll love.
                </Typography>
              </li>
              <li>
                <Typography as="p" variant="h6">
                  Your Watchlist{' '}
                </Typography>
                <Typography variant="body2">
                  Track everything you want to watch and receive e-mail when
                  movies open in theaters.
                </Typography>
              </li>
              <li>
                <Typography as="p" variant="h6">
                  Your Ratings{' '}
                </Typography>
                <Typography variant="body2">
                  Rate and remember everything you've seen.
                </Typography>
              </li>
              <li>
                <Typography as="p" variant="h6">
                  Contribute to IMDb
                </Typography>
                <Typography variant="body2">
                  Add data that will be seen by millions of people and get cool
                  badges.
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <div className={styles.recentlyViewed}>
        <h3>Recently Viewed</h3>
        <div className={styles.thumbnails}></div>
        <a href="#" className={styles.clearHistory}>
          Clear your history
        </a>
      </div>
    </div>
  );
};
