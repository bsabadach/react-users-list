import { useState } from "react";

export const makeAuthStore = (
  isAuthenticated = false,
  setAuthenticated = (_: boolean) => {},
) => {
  const login = () => {
    setAuthenticated(true);
  };
  const logout = () => {
    setAuthenticated(false);
  };

  return {
    logout,
    login,
    isAuthenticated,
  };
};
export const useAuthStore = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return makeAuthStore(isAuthenticated, setIsAuthenticated);
};
