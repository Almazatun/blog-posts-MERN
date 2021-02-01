import {AppRootStateType} from "../../../reducer";

interface IRootState extends AppRootStateType {}

export const selectPosts = (state: IRootState) => state.posts.posts
export const selectPostsError = (state: IRootState) => state.posts.errors