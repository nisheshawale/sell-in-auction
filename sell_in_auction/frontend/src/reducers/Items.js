import {
  GET_ITEMS,
  DELETE_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
} from "../actions/types";

const initialState = {
  Items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        Items: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        Items: state.Items.filter((item) => item.id !== action.payload),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        Items: [
          ...state.Items.filter((item) => item.id !== action.payload.id),
          action.payload,
        ],
      };
    case ADD_ITEM:
      return {
        ...state,
        Items: [...state.Items, action.payload],
      };
    default:
      return state;
  }
}
