export const createFullName = (lastName = "", firstName = "") => {
  return lastName + firstName;
};

export type ChartData = {
  labels: string[];
  datasets: [];
  label: string;
  fill: boolean;
  lineTension: number;
  backgroundColor: string;
  borderColor: string;
  borderCapStyle: string;
  borderDash: [];
  borderDashOffset: number;
  borderJoinStyle: string;
  pointBorderColor: string;
  pointBackgroundColor: string;
  pointBorderWidth: number;
  pointHoverRadius: number;
  pointHoverBackgroundColor: string;
  pointHoverBorderColor: string;
  pointHoverBorderWidth: number;
  pointRadius: number;
  pointHitRadius: number;
  data: number[];
};
