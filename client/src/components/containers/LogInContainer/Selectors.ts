import {AppRootStateType} from "../../../reducer";

interface IRootState extends AppRootStateType {}

export const selectUser = (state: IRootState) => state.auth.user
export const selectIsAuth = (state: IRootState) => state.auth.isAuth