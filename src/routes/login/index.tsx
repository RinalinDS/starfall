import { createFileRoute } from '@tanstack/react-router';
import { Login } from '../../pages/Login/login';

export const Route = createFileRoute('/login/')({
  component: Login,
});
