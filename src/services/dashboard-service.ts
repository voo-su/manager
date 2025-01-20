import axios from './axios'
import type { IDashboardResponse } from '@/types/dashboard'

export const DashboardService = {

  async dashboard(): Promise<IDashboardResponse> {
    const { data } = await axios.get('/dashboard')

    const { users, bots, group_chats, group_messages, private_messages, total_messages, charts } = data.data

    return {
      users: users,
      bots: bots,
      totalMessages: total_messages,
      groupChats: group_chats,
      groupMessages: group_messages,
      privateMessages: private_messages,
      charts: charts
    }
  }
}
