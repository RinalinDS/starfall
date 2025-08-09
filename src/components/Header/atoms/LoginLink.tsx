import { Link } from '@tanstack/react-router';
import { Typography } from '../../ui/Typography/Typography.tsx';
import { HeaderButton } from './HeaderButton.tsx';

export const LoginLink = () => (
  <Link to="/login">
    <HeaderButton>
      <Typography className="text-[1.6rem] group-hover:text-white">
        Sign In
      </Typography>
    </HeaderButton>
  </Link>
);
