import { getUsers } from '@/helpers/getUsers';
import { useState, useEffect } from 'react';
import { useAppSelector } from './useAppSelector';
import { selectAuth } from '@/store/auth/slice';
import { User } from '@/interfaces';

export const useAxiosUsers = () => {
  const { token } = useAppSelector(selectAuth);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    const getData = async (token: string) => {
      const response = await getUsers(token);
      console.log(response);
    };
    getData(token);
  }, [token]);

  return { loading, data };
};
