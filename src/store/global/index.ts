import { AnyAction, createSlice } from "@reduxjs/toolkit";

// Global slice initial state fields
interface GlobalSliceInitialState {
    loading: boolean;
}

// Global slice initial state
export const initialState: GlobalSliceInitialState = {
  loading: false,
};

// Global slice
const globalSlice = createSlice({
  name: "global",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action: AnyAction) =>
          action.type.includes("/pending") && action.type.includes(":load"),
        (state) => {
          state.loading = true;
        },
      )
      .addMatcher(
        (action: AnyAction) =>
          action.type.includes("/fulfilled") && action.type.includes(":load"),
        (state) => {
          state.loading = false;
        },
      )
      .addMatcher(
        (action: AnyAction) =>
          action.type.includes("/rejected") && action.type.includes(":load"),
        (state) => {
          state.loading = false;
        },
      );
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = globalSlice.actions;

export default globalSlice.reducer;