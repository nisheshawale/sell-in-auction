import axios from "axios";

import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "./types";

export const getItems = () => (dispatch) => {
  axios
    .get("/api/auction/")
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(`/api/auction/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addItem = (form_data) => (dispatch) => {
  axios
    .post("/api/auction/", form_data)
    .then((res) => {
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
