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
      // Decode the token
      const decodedUser = jwtDecode(response.data.token); // This will now include id, role, name, and email
      setUser({
        id: decodedUser.id,
        role: decodedUser.role,
        name: decodedUser.name, // Now you can access name from the token
        email: decodedUser.email, // Now you can access email from the token
      });
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const response = await API.post("/auth/login", { email, password });
      localStorage.setItem("access-token", response.data.token);
      const decodedUser = jwtDecode(response.data.token); // This will now include id, role, name, and email
      setUser({
        id: decodedUser.id,
        role: decodedUser.role,
        name: decodedUser.name, // Accessing name from the token
        email: decodedUser.email, // Accessing email from the token
      });
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await API.post("/auth/logout");
      localStorage.removeItem("access-token");
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
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
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
