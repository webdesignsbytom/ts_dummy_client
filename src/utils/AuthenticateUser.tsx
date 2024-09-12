import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
// Constants
import { HOME_PAGE_URL } from './Constants';
// Context
import { useUser } from '../context/UserContext';
// Utils
import LoggedInUser from './LoggedInUser';

// Define the types for component props
interface AuthenticateProps {
  children: ReactNode;
  redirectPath?: string;
}

// Authenticate User component
export function AuthenticateUser({ children, redirectPath = HOME_PAGE_URL }: AuthenticateProps) {
  if (!LoggedInUser()) {
    return <Navigate to={redirectPath} replace />;
  } else {
    return <>{children}</>;
  }
}

// Authenticate Admin component
export function AuthenticateAdmin({ children, redirectPath = HOME_PAGE_URL }: AuthenticateProps) {
  const { user } = useUser();

  // Check if user exists and if the role is either ADMIN or DEVELOPER
  if (!user || (user.role !== 'ADMIN' && user.role !== 'DEVELOPER')) {
    return <Navigate to={redirectPath} replace />;
  } else {
    return <>{children}</>;
  }
}

// Authenticate Developer component
export function AuthenticateDeveloper({ children, redirectPath = HOME_PAGE_URL }: AuthenticateProps) {
  const { user } = useUser();

  // Check if user exists and if the role is DEVELOPER
  if (!user || user.role !== 'DEVELOPER') {
    return <Navigate to={redirectPath} replace />;
  } else {
    return <>{children}</>;
  }
}
