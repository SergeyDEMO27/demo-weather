import axios from "axios";
import { ISuggest } from "../../models/ISuggest";
import { suggestParser } from "../../parsers/suggestParser";
import { AppDispatch } from "../store";
import { suggestSlice } from "./SuggestSlice";

export interface IResponse {
  suggestions: any[];
}

export const fetchSuggest = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(suggestSlice.actions.suggestFetching());
    const response = await axios.get<IResponse>(
      "https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?query=Ростов&apiKey=Yclju9FXL_oqwM7jvUbPyHpbNQnqSgdDWNR-qg-Rm_E"
    );
    const parsedResponse = suggestParser(response.data);
    dispatch(suggestSlice.actions.suggestFetchingSuccess(parsedResponse));
  } catch (e) {
    dispatch(
      suggestSlice.actions.suggestFetchingError(
        "Произошла ошибка при поиске городов"
      )
    );
  }
};
