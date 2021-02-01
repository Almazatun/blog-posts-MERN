import React, {Component, Fragment} from 'react'
import {Card} from '../shared/Card/Card';
import {Post} from './reducer';
import {ModalCard} from "../shared/ModalCard/ModalCard";
import {EditForm} from "../shared/EditForm/EditForm";

interface PostsProps {
    posts: Array<Post>
}

interface PostsState {
    title: string,
    showModal: boolean
}

export class Posts extends Component<PostsProps, PostsState> {
    constructor(props: PostsProps) {
        super(props);

        this.state = {
            showModal: false,
            title: ''
        }

        //Events
        this.setNewTitle = this.setNewTitle.bind(this)
        this.handleModal = this.handleModal.bind(this)
    }

    setNewTitle(title: string) {
        this.setState({
            ...this.state,
            title: title
        })
    }

    handleModal(){
        this.setState({
            ...this.state,
            showModal: !this.state.showModal
        })
    }

    render() {
        const quotesTSX = this.props.posts.map(post => {
            return (
                <Fragment key={post._id}>
                    <Card userName={post.userName}
                          body={post.body}
                          requestStatus={post.reqStatus}
                          openModal={this.handleModal}/>
                </Fragment>
            )
        })
        return (
            <Fragment>
                {quotesTSX}
                <ModalCard closeModal={this.handleModal} onChangeTitle={this.setNewTitle} show={this.state.showModal}>
                    <EditForm cancelHandler={this.handleModal} editContent={this.setNewTitle} title={this.state.title}/>
                </ModalCard>
            </Fragment>
        )
    }
}
