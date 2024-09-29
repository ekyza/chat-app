export const signUpFn = async ({ username, password }: { username: string; password: string }) => {
  const response = await fetch(`http://localhost:8080/api/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();

    return data;
  }

  const error = await response.json();

  throw new Error(error.message);
};

export const signInFn = async ({ username, password }: { username: string; password: string }) => {
  const response = await fetch(`http://localhost:8080/api/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();

    return data;
  }

  const error = await response.json();

  throw new Error(error.message);
};
