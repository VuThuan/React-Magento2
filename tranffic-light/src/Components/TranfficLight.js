import React, {Component} from 'react';
import './TranfficLight.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TranfficLight extends Component{
    render() {
        const { currentColor } = this.props;
        return (
            <div className="TranfficLight">
                <div className={classNames('bulb', 'red', {
                    active: currentColor === RED
                })} />
                <div className={classNames('bulb', 'orange', {
                    active: currentColor === ORANGE
                })} />
                <div className={classNames('bulb', 'green', {
                    active: currentColor === GREEN
                })} />
            </div>
        );
    }
}

export default TranfficLight;