import { createContext } from "react";

const INITIAL_STATE = {
  //declared inital state
  likes: 0,
  handleLike: () => {},
};

export const LikesContext = createContext(INITIAL_STATE); //created a context and passed it initial state
