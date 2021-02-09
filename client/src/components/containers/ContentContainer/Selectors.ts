import {AppRootStateType} from "../../../reducer";

interface IRootState extends AppRootStateType {}

export const selectAppStatus = (state: IRootState) => state.application.status
export const selectAppError = (state: IRootState) => state.application.errors