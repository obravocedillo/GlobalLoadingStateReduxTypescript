import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "../global";
import { setTeams } from ".";

/**
 * @desc gets all NBA teams and sets the loading state to true using matchers
 */
export const getAllTeamsMatcher = createAsyncThunk(
  "teams/getTeamsMatcher:load",
  async (payload, { rejectWithValue }) => {
    const teamsResult = await fetch(
      `https://www.balldontlie.io/api/v1/teams`,
    );
    if (teamsResult.status !== 200) {
      return rejectWithValue(await teamsResult.json());
    }
    return teamsResult.json();
  },
);


/**
 * @desc gets all NBA teams and sets the loading state to true dispatching action
 */
export const getAllTeamsDispatch = createAsyncThunk(
    "teams/getTeamsDispatch",
    async (payload, { dispatch, rejectWithValue }) => {
      dispatch(setLoading(true))
      const teamsResult = await fetch(
        `https://www.balldontlie.io/api/v1/teams`,
      );
      if (teamsResult.status !== 200) {
        dispatch(setLoading(false))
        return rejectWithValue(await teamsResult.json());
      }
      dispatch(setLoading(false))
      return teamsResult.json();
    },
);

/**
 * @desc gets all NBA teams and sets the loading state to true dispatching action
 */
export const getAllTeamsActionDispatch = () => (dispatch: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            dispatch(setLoading(true))
            const teamsResult = await fetch(
              `https://www.balldontlie.io/api/v1/teams`,
            );
            if (teamsResult.status !== 200) {
              dispatch(setLoading(false))
              return reject("Error fetching team");
            }
            const teamsDataResult = await teamsResult.json();
            dispatch(setLoading(false))
            dispatch(setTeams(teamsDataResult));
            return resolve(teamsDataResult);
          } catch (e) {
            dispatch(setLoading(false))
            reject("Error fetching team");
        }
    })
}