import {slice as quotesSlice, asyncActions as quotesAsyncActions} from "./reducer";

export const quotesActions = {
    ...quotesAsyncActions,
    ...quotesSlice.actions
}

export const quotesReducer = quotesSlice.reducer
