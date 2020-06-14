import React, {Component} from "react";

class Counter extends Component
{
    constructor(props) {
        console.log('Counter constructor');
        super(props);
        this.state = {
            count: 1
        }
    }

    decrease(){
        this.setState({
            count : this.state.count -  1
        });
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("Counter render");
        return (
            <div className="Counter">
                <button onClick={() => this.decrease()}>-</button>
                <span>{ this.state.count }</span>
                <button onClick={() => this.increase()}>+</button>
            </div>
        );
    }

    componentDidMount() { //Function này chạy sau khi render thành công. Mỗi component chỉ chạy 1 lần
        console.log('Counter Did mount');
    }

    componentDidUpdate() {
        console.log('Counter Did update'); //Function này chạy khi count được thay đổi , render chạy lại lần nữa
    }

    componentWillUnmount() {
        console.log('Counter did unmount'); //Function này chạy khi form của component biến mất
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.count === nextState.count) {
            return false;
        }
        return true;
    }
}

export default Counter;