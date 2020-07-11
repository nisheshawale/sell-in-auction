import { SEARCH } from "../actions/types";

const initialState = {
    value: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
          ...state,
          value: action.payload
      }
    default:
      return state;
  }
}
