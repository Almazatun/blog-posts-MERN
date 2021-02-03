import {slice as authSLice, asyncActions as authAsyncActions} from "./reducer"

export const authActions = {
    ...authSLice.actions,
    ...authAsyncActions
}

export const authReducer = authSLice.reducer