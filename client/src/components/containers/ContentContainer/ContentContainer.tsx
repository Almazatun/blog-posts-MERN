import {Component} from  'react'
import {Content} from "../../layout/content/Content";
import {AppRootStateType} from "../../../reducer";
import {connect, ConnectedProps} from "react-redux";
import {ApplicationState} from "../../../features/Application/reducer";
import {selectAppError, selectAppStatus} from "./Selectors";

class ContentContainer extends Component<TProps, {}> {
    constructor(props: TProps) {
        super(props);
    }
    render() {
        return <Content errors={this.props.errors}/>;
    }
}

//Connect
const mapStateToProps = (state: AppRootStateType): ApplicationState => {
    return {
        status: selectAppStatus(state),
        errors: selectAppError(state),
    };
};

const connector = connect(mapStateToProps, {});

type TProps = ConnectedProps<typeof connector>;

export default connector(ContentContainer);

