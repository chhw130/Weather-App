import axios from 'axios';

const BASE_URL = 'http://apis.data.go.kr/1360000/AsosDalyInfoService';

//   &startDt=20100101&endDt=20100102&stnIds=140';

// const TEST_URL =
//   'http://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?serviceKey=3RyDBW%2Brdv4Th6q2HWdo3QUcJXm8V%2BXVEgsYzCWot4Cpv8jOUuh8OjYwQGTtDB73RDwcd6J5bETneVH1Cc8Csw%3D%3D&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=20100101&endDt=20100102&stnIds=140';

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
      `getWthrDataList?serviceKey=3RyDBW%2Brdv4Th6q2HWdo3QUcJXm8V%2BXVEgsYzCWot4Cpv8jOUuh8OjYwQGTtDB73RDwcd6J5bETneVH1Cc8Csw%3D%3D&numOfRows=30&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=${firstDate}&endDt=${lastDate}&stnIds=104`
    );
    const data: WeatherType[] = await res.data.response.body.items.item;
    return data;
  } catch (err) {
    alert(err);
  }
};
