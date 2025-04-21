import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

// Static user data
const DEMO_USER = {
  id: 1,
  email: "demo@example.com",
  fullName: "Demo User",
  createdAt: "2024-02-20T10:00:00.000Z"
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(DEMO_USER);

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, loading: false }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
