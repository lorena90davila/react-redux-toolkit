import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numCakes--;
    },
    restocked: (state, action) => {
      state.numCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
