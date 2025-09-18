import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IdCard } from 'lucide-react';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState('');
  const navigation = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = login(+userId);
    if (!result) {
      toast.error('User not found');
      return;
    }
    navigation('/profile');
  };
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
      <hr />
      <form className="flex flex-col gap-2 my-10" onSubmit={handleSubmit}>
        <div className="relative">
          <IdCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="number"
            placeholder="Ingrese su ID"
            className="pl-10"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <Button className="mt-4 rounded-2xl" type="submit">
          Iniciar Sesión
        </Button>
      </form>
      <Link to="/about">
        <Button variant="ghost" type="button">
          Volver a la pagina principal
        </Button>
      </Link>
    </div>
  );
};
