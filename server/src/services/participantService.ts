import { postgres } from "../databases/postgres";

export const insertParticipant = async (userId: string, roomId: string) => {
  const data = [userId, roomId];
  const query = `
    INSERT INTO participants (user_id, room_id)
    VALUES ($1, $2);
  `;

  await postgres.query(query, data);
};
