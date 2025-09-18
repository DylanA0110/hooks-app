import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import { users, type User } from '../data/user-mock.data';

// interface userContextProps{
//     children: React.ReactNode;
// }

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
  //state
  authStatus: AuthStatus;
  user: User | null;
  isAunthenticated: boolean;
  //metodos
  login: (userId: number) => boolean;
  logOut: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');

  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number): boolean => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log('User not found');
      setAuthStatus('not-authenticated');
      setUser(null);
      return false;
    }
    setAuthStatus('authenticated');
    setUser(user);
    localStorage.setItem('userId', userId.toString());
    return true;
  };

  const handleLogout = () => {
    console.log('Logging out');
    setAuthStatus('not-authenticated');
    setUser(null);
    localStorage.removeItem('userId');
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      handleLogin(+storedUserId);
      return;
    }
    handleLogout();
  }, []);

  return (
    <UserContext
      value={{
        isAunthenticated: authStatus === 'authenticated',
        authStatus,
        user,
        login: handleLogin,
        logOut: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
