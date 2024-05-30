import { FaTelegram } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

export type ContactType = {
  href: string;
  text: string;
  icon: React.ReactNode;
  id: number;
};

export const contactItems: ContactType[] = [
  {
    id: 1,
    href: 'https://t.me/RinalinDS',
    text: 'Write to me in',
    icon: <FaTelegram />,
  },
  {
    id: 2,

    href: 'https://www.linkedin.com/in/denis-pilyutin-647514197/',
    text: `Connect with me via`,
    icon: <FaLinkedin />,
  },
  {
    id: 3,

    href: 'https://github.com/RinalinDS',
    text: `Watch source code on`,
    icon: <FaGithub />,
  },
];

export const ResourcesList = [
  { href: '#', text: 'About' },
  { href: '#', text: 'Careers' },
  { href: '#', text: 'For Business' },
];
