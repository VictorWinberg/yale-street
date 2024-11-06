import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext({
  username: "",
  updateUsername: (newUsername: string) => {},
});

export function UserProvider({ children }: any) {
  // Read the username from localStorage when the component initializes
  const initialUsername = localStorage.getItem("username") || "";
  const [username, setUsername] = useState(initialUsername);

  // Function to update the username
  const updateUsername = (newUsername: string) => {
    setUsername(newUsername);
    // Save the new username to localStorage
    localStorage.setItem("username", newUsername);
  };

  useEffect(() => {
    // Effect to sync the username with localStorage whenever it changes
    if (username) {
      localStorage.setItem("username", username);
    }
  }, [username]);

  return (
    <UserContext.Provider value={{ username, updateUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
