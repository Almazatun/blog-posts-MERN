import React, {Component} from "react";
import style from './Background.module.scss'

interface BackgroundProps {
    show: boolean
    clicked: () => void
}

export class Background extends Component <BackgroundProps, {}>  {
    constructor(props: BackgroundProps) {
        super(props);
    }
    render() {
        return this.props.show ? (
            <div className={style.wrapper} onClick={this.props.clicked}> </div>
        ) : null;
    }
}