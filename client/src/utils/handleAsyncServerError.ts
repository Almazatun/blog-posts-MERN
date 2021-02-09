import {applicationActions} from "../features/Application";
import {ThunkAPIType} from "../reducer";
import {ResponseError} from "../api/api";

export const handleAsyncServerError = (
    data: ResponseError,
    thunkAPI: ThunkAPIType,
) => {
    thunkAPI.dispatch(applicationActions.setAppError({errors: data.errors}))
    setTimeout(() => {
        thunkAPI.dispatch(applicationActions.setAppError({errors: ''}))
    }, 10000)
    thunkAPI.dispatch(applicationActions.setAppStatus({status: "failed"}))
    return thunkAPI.rejectWithValue({errorMessage: data.fieldsErrors})
}