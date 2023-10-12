import { SubmitData } from '@/components/form/WeatherForm.vue';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const SERVICE_KEY = import.meta.env.VITE_APP_SERVICE_KEY;

export interface WeatherType {
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

export const getWeather = async (submitData: SubmitData) => {
  try {
    const res = await instance.get(
      `getWthrDataList?serviceKey=${SERVICE_KEY}&numOfRows=${submitData.dateDiff}&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=${submitData.firstDate}&endDt=${submitData.lastDate}&stnIds=${submitData.region}`
    );
    const { header, body } = await res.data.response;

    const data: WeatherType[] = body?.items.item;

    const err = header.resultMsg;

    return data || alert(err);
  } catch {
    alert('다시 시도해주세요.');
  }
};
