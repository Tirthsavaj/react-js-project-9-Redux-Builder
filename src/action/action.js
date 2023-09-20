// actions.js
export const ADD_RECORD = (data) => ({
    type: "ADD_RECORD",
    payload: data,
  });
  
  export const DELETE_RECORD = (id) => ({
    type: "DELETE_RECORD",
    payload: id,
  });
  
  export const EDIT_RECORD = (updatedData) => ({
    type: "EDIT_RECORD",
    payload: updatedData,
  });
  