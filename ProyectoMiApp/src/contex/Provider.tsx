import { JSX, useState } from "react";
import { MyContext, UserLog } from "./Contex";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const Provider = ({ children }: props) => {
  const [userLogged, setUserLogged] = useState<UserLog>({} as UserLog);
  const [isActive, setIsActive] = useState(false)

  return (
    <MyContext.Provider
      value={{
        userLogged,
        setUserLogged,
        isActive,
        setIsActive
      }}
    >
      {children}
    </MyContext.Provider>
  );
};