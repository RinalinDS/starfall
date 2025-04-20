import { ShowMoreOptions } from './ShowMoreOptions.tsx/ShowMoreOptions';
import { Typography } from '../../components/ui/Typography/Typography';

export const Login = () => {
  return (
    <div className="mx-auto flex h-full w-full max-w-[120rem] flex-col">
      <main className="flex-1 bg-gray-200 p-4 md:p-12 dark:bg-gray-700">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="mx-auto flex w-3/5 flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">Sign in</h2>
            <LoginWithProviderButton>Sign in with IMDb</LoginWithProviderButton>
            <LoginWithProviderButton>
              Sign in with Google
            </LoginWithProviderButton>
            <ShowMoreOptions>
              <div className="mx-auto flex w-full flex-col items-center justify-center gap-4">
                <LoginWithProviderButton>
                  Sign in with Apple
                </LoginWithProviderButton>
                <LoginWithProviderButton>
                  Sign in with Amazon
                </LoginWithProviderButton>
              </div>
            </ShowMoreOptions>
            <div className="my-4 text-center">or</div>
            <LoginWithProviderButton>
              Create a New Account
            </LoginWithProviderButton>
            <Typography variant="body2" className="mt-4 text-center">
              By signing in, you agree to IMDb's Conditions of Use and Privacy
              Policy .
            </Typography>
          </div>

          <div className="border-l border-gray-300 p-6">
            <Typography as="h3" className="mb-4 text-2xl font-bold">
              Benefits of your free IMDb account
            </Typography>
            <ul className="list-none space-y-4">
              <li>
                <Typography as="p" variant="h6" className="font-semibold">
                  Personalized Recommendations
                </Typography>
                <Typography variant="body2">
                  Discover shows you'll love.
                </Typography>
              </li>
              <li>
                <Typography as="p" variant="h6" className="font-semibold">
                  Your Watchlist
                </Typography>
                <Typography variant="body2">
                  Track everything you want to watch and receive e-mail when
                  movies open in theaters.
                </Typography>
              </li>
              <li>
                <Typography as="p" variant="h6" className="font-semibold">
                  Your Ratings
                </Typography>
                <Typography variant="body2">
                  Rate and remember everything you've seen.
                </Typography>
              </li>
              <li>
                <Typography as="p" variant="h6" className="font-semibold">
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

      <div className="flex justify-between p-6">
        <h3 className="text-lg font-semibold">Recently Viewed</h3>
        <div className="flex-1"></div>
        <a href="#" className="">
          Clear your history
        </a>
      </div>
    </div>
  );
};

const LoginWithProviderButton = ({
  className,
  ...props
}: JSX.IntrinsicElements['button']) => {
  return (
    <button
      {...props}
      className={`w-full cursor-pointer rounded border p-3 hover:bg-emerald-700 dark:hover:bg-emerald-600 ${className}`}
    ></button>
  );
};
