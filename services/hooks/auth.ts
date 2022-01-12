import { useContext } from 'react';
import { AuthContext } from '../../providers/auth';
import { AuthContextTypes } from '../../types/auth';

export const useAuth = (): AuthContextTypes => {
  const context = useContext(AuthContext);
  return context;
};
