import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button';
import { use } from 'react';
import { Link } from 'react-router';

export const AboutPage = () => {
  const { isAunthenticated, logOut } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Sobre mi</h1>
      <hr />
      <div className="flex flex-col gap-2 mt-5">
        {/* Perfil de usuario */}
        {isAunthenticated && (
          <Link to="/profile" className="hover:text-blue-500 underline text-xl">
            Perfil
          </Link>
        )}

        {/* Lagin logout */}
        {isAunthenticated ? (
          <Button variant="destructive" className='mt-4' onClick={logOut}>Salir</Button>
        ) : (
          <Link to="/login" className="hover:text-blue-500 underline text-xl">
            Iniciar sesión
          </Link>
        )}
      </div>
    </div>
  );
};
