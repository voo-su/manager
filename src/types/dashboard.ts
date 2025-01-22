export interface IDashboardResponse {
  users: number
  bots: number
  totalMessages: number
  groupChats: number
  groupMessages: number
  privateMessages: number
  charts: {
    labels: string[]
    data: any[]
  }
}

export interface IDashboardStatistic {
  users: number
  bots: number
  totalMessages: number
  groupChats: number
  groupMessages: number
  privateMessages: number
}
