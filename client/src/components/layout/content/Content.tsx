import React from 'react'
import style from './Content.module.scss'
import PostsContainer from "../../containers/PostsContainer/PostsContainer";

export class Content extends React.Component {
    render() {
        return (
            <div className={style.content}>
                <PostsContainer/>
            </div>
        )
    }
}