import React from 'react'
import {PAGES} from "../../components/Navbar/Navbar";
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from "../../reducer";
import {selectIsAuth} from "../../components/containers/LogInContainer/Selectors";
import {connect} from "react-redux";


const mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        isAuth: selectIsAuth(state),
    }
};
export const WithAuthRedirect = <P extends object> (Component: React.ComponentType<P>) => {
    class RedirectComponents extends React.Component<MapStateToProps> {
        render() {
            if (!this.props.isAuth) return <Redirect to={PAGES.LOG_IN} />
            return <Component {...this.props as P} />
        }
    }
    return connect<MapStateToProps, {}, {}, AppRootStateType>(mapStateToProps)(RedirectComponents)

}

//Types
interface MapStateToProps {
    isAuth: boolean
}
