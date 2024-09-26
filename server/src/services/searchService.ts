import { postgres } from "../databases/postgres";

export const selectUserByUsername = async (username: string) => {
  const data = [username];
  const query = `
        SELECT *
        FROM users
        WHERE username LIKE $1;
    `;
  const result = await postgres.query(query, data);

  return result.rows;
};
