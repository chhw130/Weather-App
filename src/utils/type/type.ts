export interface CalculateDateType {
  firstDate: string;
  lastDate: string;
  dateDiff: number;
}

export interface SubmitDataType extends CalculateDateType {
  region: number | string | string[];
}

export interface DayJSType {
  $L: string;
  $u: string;
  $H: number;
  $D: number;
  $M: number;
  $W: number;
  $d: Date;
  $isDayjsObject: boolean;
}
