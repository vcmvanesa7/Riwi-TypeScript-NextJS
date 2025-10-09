import { JSX, useEffect, useState } from "react";
import { MyContext, UserLog } from "./Context";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const Provider = ({ children }: props) => {
  const [userLogged, setUserLogged] = useState<UserLog>({} as UserLog);
  const [isActive, setIsActive] = useState<boolean>(()=> {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('isActive');
      return saved === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("isActive", isActive.toString());
  }, [isActive]);


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