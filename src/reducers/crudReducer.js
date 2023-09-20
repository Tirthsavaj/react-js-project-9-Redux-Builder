const initialState = {
    users: localStorage.getItem("crud") ? JSON.parse(localStorage.getItem("crud")) : [],
  };
  
  const Crud = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_RECORD":
        const insertData = action.payload;
        const updatedUsersAfterAdd = [...state.users, insertData];
        localStorage.setItem("crud", JSON.stringify(updatedUsersAfterAdd));
        return {
          ...state,
          users: updatedUsersAfterAdd,
        };
  
      case "DELETE_RECORD":
        const idToDelete = action.payload;
        const updatedUsersAfterDelete = state.users.filter((val) => val.id !== idToDelete);
        localStorage.setItem("crud", JSON.stringify(updatedUsersAfterDelete));
        return {
          ...state,
          users: updatedUsersAfterDelete,
        };
  
      case "EDIT_RECORD":
        const updatedData = action.payload;
        const updatedUsersAfterEdit = state.users.map((user) =>
          user.id === updatedData.id ? updatedData : user
        );
        localStorage.setItem("crud", JSON.stringify(updatedUsersAfterEdit));
        return {
          ...state,
          users: updatedUsersAfterEdit,
        };
  
      default:
        return state;
    }
  };
  
  export default Crud;
  