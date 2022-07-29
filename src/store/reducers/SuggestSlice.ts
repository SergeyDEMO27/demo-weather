import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISuggest } from "../../models/ISuggest";
import { fetchSuggest } from "./ActionCreators";

interface SuggestState {
  suggestions: ISuggest[];
  isLoading: boolean;
  error: string;
}

const initialState: SuggestState = {
  suggestions: [],
  isLoading: false,
  error: "",
};

export const suggestSlice = createSlice({
  name: "suggest",
  initialState,
  reducers: {
    // suggestFetching(state) {
    //   state.isLoading = true;
    // },
    // suggestFetchingSuccess(state, action: PayloadAction<ISuggest[]>) {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.suggestions = action.payload;
    // },
    // suggestFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: {
    [fetchSuggest.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSuggest.fulfilled.type]: (
      state,
      action: PayloadAction<ISuggest[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.suggestions = action.payload;
    },
    [fetchSuggest.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default suggestSlice.reducer;
