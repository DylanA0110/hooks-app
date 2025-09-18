import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button';
import { use } from 'react';

export const ProfilePage = () => {
  const { user, logOut } = use(UserContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Perfil del usuario</h1>
      <hr />

      <pre className="my-4 w-[80%]">{JSON.stringify(user, null, 2)}</pre>
      <Button variant="destructive" onClick={handleLogout}>
        Salir
      </Button>
    </div>
  );
};
