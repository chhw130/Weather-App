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
    title: '평균 기온',
    key: 'avgTa',
    dataIndex: 'avgTa',
  },
  {
    title: '최고 기온',
    key: 'maxTa',
    dataIndex: 'maxTa',
  },
  {
    title: '최고 기온 시간',
    key: 'maxTaHrmt',
    dataIndex: 'maxTaHrmt',
  },
  {
    title: '최저 기온',
    key: 'minTa',
    dataIndex: 'minTa',
  },
  {
    title: '최저 기온 시간',
    key: 'minTaHrmt',
    dataIndex: 'minTaHrmt',
  },
  {
    title: '일강수량',
    key: 'sumRn',
    dataIndex: 'sumRn',
  },
];
