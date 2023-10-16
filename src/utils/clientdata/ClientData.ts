interface MenuListType {
  title: string;
  link: string;
}

interface RegionDataType {
  region: string;
  stnlds: number;
}

interface ColumnDataType {
  title: string;
  dataIndex: string;
  key: string;
}

interface DetailDataArrType {
  label: string;
  content: string;
}

export const menuData: MenuListType[] = [
  { title: '목록', link: '/list' },
  { title: '차트', link: '/chart' },
];

export const regionData: RegionDataType[] = [
  {
    region: '속초',
    stnlds: 90,
  },
  {
    region: '파주',
    stnlds: 99,
  },
  {
    region: '서울',
    stnlds: 108,
  },
  {
    region: '인천',
    stnlds: 112,
  },
  {
    region: '원주',
    stnlds: 114,
  },
  {
    region: '울릉도',
    stnlds: 115,
  },
  {
    region: '수원',
    stnlds: 119,
  },
  {
    region: '대구',
    stnlds: 143,
  },
  {
    region: '울산',
    stnlds: 152,
  },
  {
    region: '광주',
    stnlds: 156,
  },
  {
    region: '부산',
    stnlds: 159,
  },
  {
    region: '제주',
    stnlds: 184,
  },
];

export const columnData: ColumnDataType[] = [
  {
    title: '날짜',
    dataIndex: 'tm',
    key: 'tm',
  },
  {
    title: '평균 기온 (°C)',
    key: 'avgTa',
    dataIndex: 'avgTa',
  },
  {
    title: '최고 기온 (°C)',
    key: 'maxTa',
    dataIndex: 'maxTa',
  },
  {
    title: '최고 기온 시간 (hhmi)',
    key: 'maxTaHrmt',
    dataIndex: 'maxTaHrmt',
  },
  {
    title: '최저 기온 (°C) ',
    key: 'minTa',
    dataIndex: 'minTa',
  },
  {
    title: '최저 기온 시간 (hhmi)',
    key: 'minTaHrmt',
    dataIndex: 'minTaHrmt',
  },
  {
    title: '일강수량 (mm)',
    key: 'sumRn',
    dataIndex: 'sumRn',
  },
];

export const tempDataArr: DetailDataArrType[] = [
  {
    label: '평균기온 (°C)',
    content: 'avgTa',
  },
  { label: '최고 기온 (°C)', content: 'maxTa' },
  { label: '최고 기온 시간 (hhmi)', content: 'maxTaHrmt' },
  { label: '최저 기온 (°C)', content: 'minTa' },
  { label: '최저 기온 시간 (hhmi)', content: 'minTaHrmt' },
];

export const wsDataArr: DetailDataArrType[] = [
  {
    label: '평균 풍속 (m/s)',
    content: 'avgWs',
  },
  {
    label: '최대 순간 풍속 (m/s)',
    content: 'maxInsWs',
  },
  {
    label: '최대 순간 풍속 풍향 (16방위)',
    content: 'maxInsWsWd',
  },
  {
    label: '최대 순간 풍속 시간 (hhmi)',
    content: 'maxInsWsHrmt',
  },
  {
    label: '최대 풍속 (m/s)',
    content: 'maxWs',
  },
  {
    label: '최대 풍속 방향 (hhmi)',
    content: 'maxInsWsHrmt',
  },
  {
    label: '최대 풍속 시간 (hhmi)',
    content: 'maxWsHrmt',
  },
  {
    label: '최다 풍향 (16방위)',
    content: 'maxWd',
  },
];

export const rnDataArr: DetailDataArrType[] = [
  {
    label: '일 강수량 (mm)',
    content: 'sumRn',
  },
  {
    label: '강수 계속시간 (hr)',
    content: 'sumRnDur',
  },
  {
    label: '10분 최다 강수량 (mm)',
    content: 'mi10MaxRn',
  },
  {
    label: '1시간 최다 강수량 (mm)',
    content: 'hr1MaxRn',
  },
  {
    label: '1시간 최다 강수량 시간 (hr)',
    content: 'hr1MaxRnHrmt',
  },
];

/**Form validation rule */
export const rules = {
  date: [
    {
      required: true,
      message: '날짜를 선택해주세요.',
      trigger: 'change',
    },
  ],
  region: [
    {
      required: true,
      message: '지역을 선택해주세요.',
      trigger: 'change',
    },
  ],
};
