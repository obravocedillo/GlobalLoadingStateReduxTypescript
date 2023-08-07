import { createSlice } from "@reduxjs/toolkit";
import { getAllTeamsDispatch, getAllTeamsMatcher } from "./actions";

// Team fields
interface Team {
    id: string;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

// Team slice initial state fields
interface TeamSliceInitialState {
    teams: Team[];
}

// Team slice initial state
export const initialState: TeamSliceInitialState = {
    teams: [],
};

// Team slice
const teamSlice = createSlice({
  name: "team",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
        getAllTeamsMatcher.fulfilled,
        (state, action) => {
          state.teams = action.payload.data;
        },
    );
    builder.addCase(
        getAllTeamsDispatch.fulfilled,
        (state, action) => {
          state.teams = action.payload.data;
        },
    )
  },
  reducers: {
    setTeams: (state, action) => {
        state.teams = action.payload.data;
      },
  },
});

export const { setTeams } = teamSlice.actions;

export default teamSlice.reducer;