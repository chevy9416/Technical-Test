import React, { createContext, useState } from "react";
import { DetailUserInfo, LogInResponse, UserInfo } from "../Types/Types";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [key, setKey] = useState<LogInResponse>();
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [userById, setUserById] = useState<DetailUserInfo>();
  const [userId, setUserId] = useState<number>();
  const [showModal, setShowModal] = useState(false);

  return (
    <UserContext.Provider
      value={{
        key,
        setKey,
        users,
        setUsers,
        userById,
        setUserById,
        userId,
        setUserId,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
