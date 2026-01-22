import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData:null
}

const authSlice = createSlice({
  name: "auth",
    initialState,
    reducers: {
      login: (state, action) => {
        console.log("updating store to true and : ",action.payload);
        
            state.status = true;
        state.userData = action.payload;
        console.log("updated state : ",state.status,state.userData);
        


         },
      logout: (state, action) => {
        console.log("updating store to false and : ", action.payload);
        state.status = false; state.userData = null;
        console.log("updated state : ", state);
      }
  }
});


export const { login,logout } = authSlice.actions;
export default authSlice.reducer;