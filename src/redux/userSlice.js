import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [
    { name: "satish", email: "satish@gmail.com", password: "satish123" },
    { name: "mounika", email: "mounika@gmail.com", password: "mounika1526" },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
