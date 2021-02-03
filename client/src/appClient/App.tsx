import React, {Component} from 'react';
import './App.scss';
import {Header} from '../components/layout/header/Header';
import { Content } from '../components/layout/content/Content';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default App;
