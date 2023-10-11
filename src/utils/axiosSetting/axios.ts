import axios from 'axios';

const BASE_URL =
  'http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?serviceKey=3RyDBW%2Brdv4Th6q2HWdo3QUcJXm8V%2BXVEgsYzCWot4Cpv8jOUuh8OjYwQGTtDB73RDwcd6J5bETneVH1Cc8Csw%3D%3D&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=20100101&endDt=20100102&stnIds=140';

const instance = axios.create({
  baseURL: BASE_URL,
  //   import.meta.env.VUE_APP_EX_URL,
});

export const getWeather = async () => {
  const res = await instance.get('');
  return res.data;
};
