import React from 'react'
import style from './Card.module.scss'
import {getDate} from "../../../utils/getDate";

interface CardProps {
    body: string,
    userName: string,
    postTitle?: string
    createAt: string
}

const initialState = {show: true}
type CardState = Readonly<typeof initialState>

export class Card extends React.Component<CardProps, CardState> {
    readonly state: CardState = initialState

    constructor(props: CardProps) {
        super(props);
    }

    render() {
        //Date
        const date = getDate(this.props.createAt)

        const readPost = this.state.show ? "" : (
            <button className={style.btn_read} onClick={() => {}}>Read Post 💡</button>
        );

        return (
            <div className={style.card_box}>
                <div className={style.card_top}>
                    <div className={style.card_top_post_title}>
                         <span>adasdasdadasasdasd</span>
                    </div>
                    <div>
                        <span>{date}</span>
                    </div>
                </div>
                <div className={style.card_bottom_btns}>
                    <button className={style.btn} onClick={this.toggleComponent}>
                        { this.state.show ? "More ✔" : "Cancel"}
                    </button>
                    {readPost}
                </div>
            </div>
        )
    }

    private toggleComponent = () => this.setState(toggleClick)
}

const toggleClick = (prevState: CardState) => {
    return {
        ...prevState,
        show: !prevState.show
    }
}