import React, { Component } from 'react';
import './TodoItems.css';
import classNames from 'classnames';
import checkImg from "../img/check.svg";
import checkCompleteImg from "../img/check-complete.svg";

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
        let url = checkImg;
        if(item.isComplete){
            url = checkCompleteImg;
        }

        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete' : item.isComplete
            })}>
                <img onClick={onClick} src={url} width={32} height={32} />
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItems;