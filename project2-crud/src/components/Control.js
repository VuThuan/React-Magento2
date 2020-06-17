import React, {Component} from 'react';
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component{
    render() {
        return (
            <div className="row mt-15"><br/>
                {/*Search*/}
                <Search onHandleSearch={this.props.onHandleSearch} />
                {/*Sort*/}
                <Sort onHandleSort={this.props.onHandleSort}
                      sortBy={this.props.sortBy}
                      sortValue={this.props.sortValue} />
            </div>
        );
    }
}

export default Control;
