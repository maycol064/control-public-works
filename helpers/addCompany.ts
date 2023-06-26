import { AddCompany, Company } from '@/interfaces';
import axios from 'axios';

export const addCompany = async (token: string, values: AddCompany) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log(values)
  try {
    const { data, status } = await axios.post<Company>(
      `${url}/api/companies`, 
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