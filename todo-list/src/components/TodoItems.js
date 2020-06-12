import React, { Component } from 'react';
import './TodoItems.css';
import classNames from 'classnames';

class TodoItems extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.onItemClick = this.onItemClick.bind(this);
    // }
    //
    // onItemClick() {
    //     console.log(this.props.item)
    //     // this.props.item.isComplete = !this.props.item.isComplete;
    // }

    render() {
        const { item, onClick } = this.props;
        return (
            <div onClick={onClick} className={classNames('TodoItem', {
                'TodoItem-complete' : item.isComplete
            })}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItems;