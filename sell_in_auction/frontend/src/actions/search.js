import { SEARCH } from "./types";

export const search = (value) => {
  return {
    type: SEARCH,
    payload: value,
  };
};



