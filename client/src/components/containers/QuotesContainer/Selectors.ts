import {AppRootStateType} from "../../../reducer";

interface IRootState extends AppRootStateType {}

export const selectQuotes = (state: IRootState) => state.quotes.quotes
export const selectQuotesError = (state: IRootState) => state.quotes.errors