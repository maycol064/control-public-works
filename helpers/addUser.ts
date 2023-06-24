import axios from 'axios';

export const addUser = async (values: any, token: string): Promise<any> => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  try {
    const { data, status } = await axios(`${url}//api/users`, {
      method: 'POST',
      data: values,
      headers: {
        Authorization: `Bearer ${token}`
      }
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
