import { Dependencies, Dependency } from '@/interfaces';
import axios, { Axios, AxiosError } from 'axios';

export const getDependencies = async (token: string) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  try {
    const { data, status } = await axios.get<Dependency[]>(
      `${url}/api/dependencies`, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }  
    );
    return { data, status };
  } catch (error) {
    return axios.isAxiosError(error)
     ? error.response
     : 'Hubo un error...'
  }
};
