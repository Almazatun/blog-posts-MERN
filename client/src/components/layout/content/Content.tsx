import React, {Fragment, Component} from 'react'
import style from './Content.module.scss'
import {Route, Switch} from "react-router-dom";
import {PAGES} from "../../Navbar/Navbar";
import LogInContainer from "../../containers/LogInContainer/LogInContainer";
import WrappedPostsContainer from "../../containers/PostsContainer/PostsContainer";
import WrappedWritePostContainer from "../../containers/WritePostContainer/WritePostContainer";
import WrappedPostBlogContainer from "../../containers/PostBlogContainer/PostBlogContainer";
import {ErrorSnackbar} from "../../shared/ErrorSnackBar/ErrorSnackbar";
import {ErrorType} from "../../../features/Application/reducer";


interface ContentProps {
    errors: ErrorType
}

export class Content extends Component <ContentProps, {}> {
    constructor(props:ContentProps) {
        super(props);

    }

    render() {
        return (
            <Fragment>
                <div className={style.content}>
                    <Switch>
                        <Route exact path={PAGES.POSTS} component={WrappedPostsContainer}/>
                        <Route exact path={PAGES.LOG_IN} component={LogInContainer}/>
                        <Route exact path={PAGES.WRITE_NEW_POST} component={WrappedWritePostContainer}/>
                        <Route exact path={`${PAGES.POST}/:postId?`} component={WrappedPostBlogContainer}/>
                    </Switch>
                </div>
                <ErrorSnackbar errors={this.props.errors} />
            </Fragment>
        )
    }
}