import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TranfficLight from "./Components/TranfficLight";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class App extends Component{

    constructor() {
        super();
        this.state = {
            'currentColor': GREEN
        }; //Vì ở đây currentColor thay đổi liên tục nên sẽ sử dụng state

        setInterval( () => {
            this.setState({
                'currentColor' : this.getNextColor(this.state.currentColor)
            });
        }, 1000);
    }

    getNextColor(color) {
        switch (color) {
            case RED :
                return ORANGE;
            case ORANGE :
                return GREEN;
            case GREEN :
                return RED;
        }
    }

    render() {
        const { currentColor } = this.state;
        return (
            <div className="App">
              <TranfficLight currentColor={currentColor} />
            </div>
        );
    }
}

export default App;
