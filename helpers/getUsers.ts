import { Users } from '@/interfaces/users';
import axios, { Axios, AxiosError } from 'axios';

export const getUsers = async (token: string) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  try {
    const { data, status } = await axios.get<Users>(
      `${url}/api/users`, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }  
    );
    
    console.log({ users: data, status });
    return { users: data.users, status };
  } catch (error) {
    return axios.isAxiosError(error)
     ? error.response
     : 'Hubo un error...'
  }
};
