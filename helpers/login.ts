import axios from 'axios';
import { LoginResponse, Login } from '@/interfaces';

export const loginApi = async (values: Login): Promise<LoginResponse> => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  try {
    const { data, status } = await axios(`${url}/login`, {
      method: 'POST',
      data: values,
    });
    data.message = null;
    return { data, status, };
  } catch (error: any) {
    const {
      response: { data, status },
    } = error;
    data.token = null;
    data.user = null;
    return { data, status };
  }
};
