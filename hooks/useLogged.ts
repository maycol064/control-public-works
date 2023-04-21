import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Login } from '@/interfaces';

export const useLogged = () => {
  const router = useRouter();
  const [logged, setLogged] = useState<Login | null>(null);

  useEffect(() => {
    const getLogged = localStorage.getItem('isLogged');
    setLogged(getLogged ? JSON.parse(getLogged) : null);
  }, []);

  const verifExp = () => {
    if (logged === null) return;
    return (
      Math.abs(new Date().getTime() - logged.date) / (1000 * 60 * 60) >= 24
    );
  };

  const login = (data: Login): void => {
    if (logged !== null) return;
    localStorage.setItem('isLogged', JSON.stringify(data));
    setLogged(data);
  };

  const logout = (): void => {
    if (logged === null) return;
    localStorage.removeItem('isLogged');
    setLogged(null);
  };

  return {
    logged,
    login,
    logout,
    verifExp,
  };
};
