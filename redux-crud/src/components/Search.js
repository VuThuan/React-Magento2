import React, {Component} from 'react';

class Search extends Component{

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] : value
        });
    }

    onHandleSearch = () => {
        this.props.onHandleSearch(this.state.keyword);
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Nhập từ khóa..."
                           name="keyword"
                           value={this.state.keyword}
                           onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                            <button onClick={this.onHandleSearch} className="btn btn-primary" type="button">
                                <span className="fa fa-search mr-5"></span>&nbsp;&nbsp;&nbsp;&nbsp;Tìm
                            </button>
                        </span>
                </div>
            </div>
        );
    }
}

export default Search;
