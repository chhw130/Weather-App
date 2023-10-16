import { message } from 'ant-design-vue';
import axios from 'axios';
import { SubmitDataType } from '../type/type';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const SERVICE_KEY = import.meta.env.VITE_APP_SERVICE_KEY;

export interface WeatherType {
  avgTa: string;
  minTa: string;
  maxTaHrmt: string;
  maxTa: string;
  minTaHrmt: string;
  sumRn: string;
  stnId: string;
  stnNm: string;
  tm: string;
  avgWs: string;
  maxInsWs: string;
  maxInsWsWd: string;
  maxWs: string;
  maxInsWsHrmt: string;
  maxWsHrmt: string;
  maxWd: string;
  sumRnDur: string;
  mi10MaxRn: string;
  hr1MaxRn: string;
  hr1MaxRnHrmt: string;
}

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getWeather = async (submitData: SubmitDataType) => {
  try {
    const res = await instance.get(
      `getWthrDataList?serviceKey=${SERVICE_KEY}&numOfRows=${submitData.dateDiff}&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=${submitData.firstDate}&endDt=${submitData.lastDate}&stnIds=${submitData.region}`
    );
    const { header, body } = await res.data.response;

    const data: WeatherType[] = body?.items.item;

    const err = header.resultMsg;

    if (!data) {
      message.error(err);
      return [];
    }

    return data;
  } catch {
    alert('다시 시도해주세요.');
  }
};
