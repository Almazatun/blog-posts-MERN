import React, {Component, Fragment} from 'react'
import {Card} from '../shared/Card/Card';
import {Quote} from './reducer';
import {ModalCard} from "../shared/ModalCard/ModalCard";
import {EditForm} from "../shared/EditForm/EditForm";

interface QuotesProps {
    quotes: Array<Quote>
}

interface QuotesState {
    title: string,
    showModal: boolean
}

export class Quotes extends Component<QuotesProps, QuotesState> {
    constructor(props: QuotesProps) {
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
        const quotesTSX = this.props.quotes.map(quote => {
            return (
                <Fragment key={quote._id}>
                    <Card author={quote.author}
                          content={quote.content}
                          requestStatus={quote.reqStatus}
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
