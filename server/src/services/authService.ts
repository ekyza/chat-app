import { QueryResult } from "pg";

import { postgres } from "../databases/postgres";

import { User } from "../models/User";

export const insertAuth = async (username: string, password: string) => {
  const data = [username, password];
  const query = `
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING id, username, created_at;
  `;
  const result: QueryResult<User> = await postgres.query(query, data);

  return result.rows[0];
};

export const selectAuth = async (username: string) => {
  const data = [username];
  const query = `
    SELECT *
    FROM users
    WHERE username = $1;
  `;
  const result: QueryResult<User> = await postgres.query(query, data);

  return result.rows[0];
};
