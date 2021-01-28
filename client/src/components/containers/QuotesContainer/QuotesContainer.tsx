import React, {Component, Fragment} from 'react'
import {Quotes} from "../../Quotes/Quotes";
import {QuotesState} from "../../Quotes/reducer";
import {AppRootStateType} from "../../../reducer";
import {selectQuotes, selectQuotesError} from "./Selectors";
import {connect, ConnectedProps} from 'react-redux';
import {quotesActions} from "../../Quotes";

class QuotesContainer extends Component<TProps, {}> {
    constructor(props: TProps) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuotesTC()
    }

    render() {
        return (
            <Fragment>
                <Quotes quotes={this.props.quotes}/>
            </Fragment>
        );
    }
}

//Connect
const mapStateToProps = (state: AppRootStateType): QuotesState => {
    return {
        quotes: selectQuotes(state),
        errors: selectQuotesError(state),
    };
};

const {fetchQuotesTC, createQuoteTC, deleteQuoteTC, changeQuoteRegStatus} = quotesActions

const connector = connect(mapStateToProps, {fetchQuotesTC, createQuoteTC, deleteQuoteTC, changeQuoteRegStatus});

type TProps = ConnectedProps<typeof connector>;

export default connector(QuotesContainer);