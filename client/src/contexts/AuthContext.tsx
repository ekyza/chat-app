import { createContext, useState, ReactNode } from "react";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken] = useState<string | null>(() => {
    const token = localStorage.getItem("token");

    return token ? token : null;
  });

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};
