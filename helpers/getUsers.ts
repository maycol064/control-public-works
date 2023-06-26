import { User } from '@/interfaces/users';
import axios, { AxiosError } from 'axios';

export const getUsers = async (token: string) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await axios.get<User[]>(`${url}/api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data, status } = response;
    return { data, status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return axiosError.response?.data || 'Hubo un error...';
    } else {
      return 'Hubo un error...';
    }
  }
};
