// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import MessageNotificationProps from '@/types/messageNotification'
import type { NextApiRequest, NextApiResponse } from 'next'
import newMessagesList from '@/datas/newmessages'


type Data = {
  messages: MessageNotificationProps[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ messages: newMessagesList })
}
