import { useState, useEffect } from "react";
import { getUserProfile, logout } from "../services/authService";

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      const profile = await getUserProfile();
      setUser(profile);
      setLoading(false);
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return { user, loading, handleLogout };
};
