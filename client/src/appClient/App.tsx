import React, {Component} from 'react';
import './App.scss';
import {Content} from "../components/layout/content/Content";

class App extends Component {
    render() {
        return (
            <div className="App">
                    <Content />
            </div>
        );
    }
}

export default App;
