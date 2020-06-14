import React, {Component} from 'react';
import './App.css';
import Counter from "./components/Counter";
import { Button } from 'reactstrap';

class App extends Component{
   constructor(props) {
       super(props);
       this.state = {
           showCounter: true
       }
   }

    removeCounter() {
       this.setState({
           showCounter: false
       });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('App did update')
    }

    render() {
        console.log("App render");
        return (
          <div className="App">
              <Button color="success" onClick={() => this.removeCounter()}>Remove Counter</Button>
              { this.state.showCounter && <Counter /> }
          </div>
        );
    }
}

export default App;
