export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  roomId: string;
  createdAt: Date;
}
