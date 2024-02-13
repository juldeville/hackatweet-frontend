import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  value: {
    username: string;
    firstname: string;
    token: string;
  };
};

type AddUserPayload = {
  username: string;
  firstname: string;
  token: string;
};

const initialState: UserState = {
  value: {
    username: "",
    firstname: "",
    token: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserToStore: (
      state: UserState,
      action: PayloadAction<AddUserPayload>
    ) => {
      console.log("action payload is:", action.payload);
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
      state.value.token = action.payload.token;
    },
    removeUserFromStore: (state: UserState) => {
      console.log("user removed from store");
      state.value.username = initialState.value.username;
      state.value.firstname = initialState.value.firstname;
      state.value.token = initialState.value.token;
    },
  },
});

export const { addUserToStore, removeUserFromStore } = userSlice.actions;
export default userSlice.reducer;
