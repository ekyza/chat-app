import { postgres } from "../databases/postgres";

export const insertFriendRequest = async (userId: string, friendId: string) => {
  const data = [userId, friendId];
  const query = `
    INSERT INTO friend_requests (user_id, friend_id)
    VALUES ($1, $2);
  `;

  await postgres.query(query, data);
};

export const deleteFriendRequest = async (userId: string, friendId: string) => {
  const data = [userId, friendId];
  const query = `
    DELETE FROM friend_requests
    WHERE user_id = $2 AND friend_id = $1;
  `;

  await postgres.query(query, data);
};

export const insertFriend = async (userId: string, friendId: string) => {
  const data = [userId, friendId];
  const query = `
    INSERT INTO friends (user_id, friend_id)
    VALUES ($1, $2);
  `;

  await postgres.query(query, data);
};

export const deleteFriend = async (friendId: string, userId: string) => {
  const data = [userId, friendId];
  const query = `
    DELETE FROM friends
    WHERE user_id = $1 AND friend_id = $2;
  `;

  await postgres.query(query, data);
};
