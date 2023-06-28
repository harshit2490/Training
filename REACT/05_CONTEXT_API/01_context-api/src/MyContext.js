import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("Default message from myContext");
  const [count, setCount] = useState(5);

  const incrementCount = () => {
    setCount((preCount) => preCount + 1);
  };

  const decrementCount = () => {
    setCount((preCount) => preCount - 1);
  };

  const sharedState = {
    message,
    count,
    setMessage,
    incrementCount,
    decrementCount,
  };

  return (
    <MyContext.Provider value={sharedState}>{children}</MyContext.Provider>
  );
};
