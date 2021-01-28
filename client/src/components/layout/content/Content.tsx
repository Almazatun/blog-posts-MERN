import React from 'react'
import QuotesContainer from "../../containers/QuotesContainer/QuotesContainer";
import style from './Content.module.scss'

export class Content extends React.Component {
    render() {
        return (
            <div className={style.content}>
                <QuotesContainer/>
            </div>
        )
    }
}