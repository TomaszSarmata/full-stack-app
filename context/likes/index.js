import { createContext, useContext } from "react";
import { useState } from "react";

const INITIAL_STATE = {
  //declared inital state to save on maintanance (in case you had to use likes in many places => write INITIAL_STATE.likes)
  likes: 0,
  handleLike: () => {},
};

export const LikesContext = createContext(INITIAL_STATE); //created a context and passed it initial state

export default function LikesProvider({ children }) {
  //provider provides context to our components
  //here we are going to implement our logic for maintaining the value of likes

  const [likes, setLikes] = useState(INITIAL_STATE.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  //here we are going to return the values of likes and handleLike and bundle it up in an object for convenience

  const value = {
    likes: likes,
    handleLike: handleLike,
  };

  return (
    <LikesContext.Provider value={value}>{children}</LikesContext.Provider> //every function in react has to return valid jsx, inside we are passing the property that we can call however we want and assigning it the value of our object.
  );

  // const pluralDislikes = () => {
  //   if (dislikes === 1) {
  //     return "dislike";
  //   } else {
  //     return "dislikes";
  //   }
  // };
}

//here we are going to create our custome hook that will return the value of our context in order to replace useState hook
export function useLikes() {
  const context = useContext(LikesContext);
  return context;
}
