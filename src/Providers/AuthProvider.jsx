/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-useless-catch */
import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import API from "../api/api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (name, email, password) => {
    setLoading(true);
    try {
      const response = await API.post("/auth/register", {
        name,
        email,
        password,
      });
      localStorage.setItem("access-token", response.data.token);
    } catch (error) {
      throw error; // Propagate the error to be handled in the Register component
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const response = await API.post("/auth/login", { email, password });
      localStorage.setItem("access-token", response.data.token);

      // Decode the token to retrieve user info
      const decodedUser = JSON.parse(atob(response.data.token.split(".")[1]));
      console.log("Decoded user in frontend:", decodedUser); // Log to verify decoded data

      setUser({
        id: decodedUser.id,
        role: decodedUser.role,
        name: decodedUser.name,
        email: decodedUser.email,
      });
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("access-token");
    setUser(null);
    window.location.href = "/Login";
  };

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        console.log("Decoded user from token:", decodedUser);
        setUser(decodedUser);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
    setLoading(false);
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
