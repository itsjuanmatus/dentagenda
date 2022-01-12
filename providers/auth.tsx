import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from 'react';
import PropTypes from 'prop-types';
import { auth } from '../services/firebase';
import { CurrentUserTypes, AuthContextTypes } from '../types/auth';
import { useRouter } from 'next/router';
import LoginPage from '../pages/login';

export const AuthContext = createContext<AuthContextTypes>({
  currentUser: null,
});

const AuthProvider: React.FC<PropsWithChildren<any>> = (props) => {
  const [currentUser, setCurrentUser] = useState<CurrentUserTypes | null>();

  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setCurrentUser({
          uid: authUser.uid,
          email: authUser.email || '',
        });

        return;
      }

      setCurrentUser(null);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
