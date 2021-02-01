import {instance} from "../confirm/apiData";


//API
export const API = {
    getAllPosts() {
        return instance.get<Array<PostServe>>('').then(res => {
            return res.data
        })
    },
    createPost(data: PostServe) {
        return instance.post<PostServe>('new/', data).then(res => res.data)
    },
    deletePost(postId: string) {
        return instance.delete<PostServe>(`delete/${postId}`).then(res => res.data)
    },
    updatePost(postId: string, title: string,) {
        const data: { content: string } = {content: title}
        return instance.patch<PostServe>(`update/${postId}`, data)
    }
}

//Types
export interface PostServe {
    _id: string
    body: string,
    userName: string,
    createdAt: string,
    user: string,
    __v?: number
}