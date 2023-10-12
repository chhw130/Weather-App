import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const SERVICE_KEY = import.meta.env.VITE_APP_SERVICE_KEY;

interface WeatherType {
  avgTa: String;
  minTa: String;
  maxTaHrmt: String;
  maxTa: String;
  minTaHrmt: String;
  sumRn: String;
}

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getWeather = async (firstDate: Date, lastDate: Date) => {
  try {
    const res = await instance.get(
      `getWthrDataList?serviceKey=${SERVICE_KEY}&numOfRows=30&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=${firstDate}&endDt=${lastDate}&stnIds=104`
    );
    const data: WeatherType[] = await res.data.response.body.items.item;
    return data;
  } catch (err) {
    alert(err);
  }
};
