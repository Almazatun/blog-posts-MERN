import {instance} from "../confirm/apiData";
import {ErrorType} from "../features/Application/reducer";
import {ValidationErrors} from "../components/Posts/reducer";


//API
export const API = {
    getAllPosts() {
        return instance.get<Array<ServerPost>>('posts/').then(res => {
            return res.data
        })
    },
    createPost(newPost: NewPostBody) {
        return instance.post<ServerPost>('posts/new/', newPost).then(res => res.data)
    },
    deletePost(postId: string) {
        return instance.delete<ServerPost>(`posts/delete/${postId}`).then(res => res.data)
    },
    updatePost(postId: string, postBody: {
        postTitle?: string
        body?: string
    }) {
        return instance.patch<ServerPost>(`posts/update/${postId}`, postBody).then(res => res.data)
    }
}

//Auth API
export const API_AUTH = {
    logIn(data: LogInArguments) {
        return instance.post<IUserServe>(`users/signIn/`, data).then(res => {
            return res.data
        })
    }
}

//Types
export interface ServerPost {
    _id: string
    body: string,
    postTitle: string
    userName: string,
    createdAt: string,
    __v?: number
}

export interface LogInArguments {
    userName: string,
    password: string
}

export interface IUserServe {
    _id: string
    userName: string
    email: string
    password: string
    createdAt: string
    __v: number,
    token: string
}

export interface NewPostBody {
    postTitle: string
    body: string
}

type FieldsErrors = Pick<ValidationErrors, "field_errors">

export interface ResponseError {
    errors: ErrorType,
    message: string,
    fieldsErrors: FieldsErrors
}