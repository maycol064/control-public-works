import { Dependency } from '@/interfaces';
import axios from 'axios';

export const addDependency = async (token: string, values: Dependency) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log(values)
  try {
    const { data, status } = await axios.post<Dependency>(
      `${url}/api/dependencies`, 
      { ...values },
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