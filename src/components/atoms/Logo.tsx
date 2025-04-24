import { Link } from '@tanstack/react-router';
import logo from '../../assets/logo.webp';

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="w-[7.2rem]" src={logo} alt="imdb logo" />
      </Link>
    </div>
  );
};
