import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export const getWeather = async () => {
  const res = await instance.get('');

  return res.data;
};
