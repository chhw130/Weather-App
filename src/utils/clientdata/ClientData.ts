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
    region: '북춘천',
    stnlds: 93,
  },
  {
    region: '철원',
    stnlds: 95,
  },
  {
    region: '동두천',
    stnlds: 98,
  },
  {
    region: '파주',
    stnlds: 99,
  },
  {
    region: '대관령',
    stnlds: 100,
  },
  {
    region: '춘천',
    stnlds: 101,
  },
  {
    region: '백령도',
    stnlds: 102,
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
