import React, {Component} from "react"
import {Navbar} from "../../Navbar/Navbar";
import {AuthContext} from "../../../context/AuthContext";

export class NavbarContainer extends Component<{}, {}> {

    static contextType = AuthContext

    constructor(props: {}) {
        super(props)

        this.signOut = this.signOut.bind(this)
    }

    signOut() {
        this.context.signOut()
    }

    render() {
        return <Navbar
            isAuth={this.context.isAuth}
            sighOut={this.signOut}
        />
    }
}