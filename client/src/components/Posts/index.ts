import {slice as postsSlice, asyncActions as postsAsyncActions} from "./reducer";

export const postsActions = {
    ...postsAsyncActions,
    ...postsSlice.actions
}

export const postsReducer = postsSlice.reducer
