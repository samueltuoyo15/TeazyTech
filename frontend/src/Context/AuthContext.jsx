import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from "axios"
const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAuthAdmin = async () => {
     try {
      const response = await axios.get("http://localhost:5000/api/admin/me", { withCredentials: true })
      setUser(response.data)
    } catch(error) {
        setUser(null)
        console.error('Error fetching admin credentials:', error)
      }
    }
    getAuthAdmin()
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/admin/login",{ email, password})
      setUser(response.data)
      return true
    } catch(error) {
      console.log("failed to login:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  };

const logout = async () => {
  try {
    await axios.post("http://localhost:5000/api/admin/logout", {}, { withCredentials: true });
    setUser(null);
  } catch(error) {
    console.error('Error during logout:', error);
  }
};

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};