export interface IChartData {
  type: string
  label: string
  data: number[]
}

export interface IChart {
  labels: string[]
  data: IChartData[]
}
