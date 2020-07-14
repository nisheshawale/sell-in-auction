import axios from "axios";
import { createMessage, getErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, UPDATE_ITEM } from "./types";

export const getItems = (all) => (dispatch, getState) => {
  let url = "/api/auction/";
  if (all) {
    url = "/api/auction/all/";
  }

  axios
    .get(url, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/auction/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteItem: "Item Deleted" }));
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const updateItem = (data, id) => (dispatch, getState) => {
  axios
    .patch(`/api/auction/all/${id}/`, data, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ makebid: "Bid made" }));
      dispatch({
        type: UPDATE_ITEM,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const addItem = (form_data) => (dispatch, getState) => {
  axios
    .post("/api/auction/", form_data, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addItem: "Item Added" }));
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};
