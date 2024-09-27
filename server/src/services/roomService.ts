import { QueryResult } from "pg";

import { postgres } from "../databases/postgres";

import { Room } from "../models/Room";

export const insertNewRoom = async () => {
  const query = `
    INSERT INTO rooms DEFAULT VALUES
    RETURNING *;
  `;
  const result: QueryResult<Room> = await postgres.query(query);

  return result.rows[0];
};

export const deleteRoom = async (roomId: string) => {
  const data = [roomId];
  const query = `
    DELETE FROM rooms
    WHERE id = $1;
  `;

  await postgres.query(query, data);
};
