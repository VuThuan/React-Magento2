import React, {Component} from 'react';
import './App.css';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            txtUserName: '',
            txtPassword: '',
            txtDes: '',
            stlGender : 0
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(event) {
        const target = event.target;
        const name = target.type === 'checked' ? target.checked : target.name;
        const value = target.value;
        this.setState({
            [name] : value
        });
    }

    onHandleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container mt-30">
                <div className="col-xs-8 col-md-8 col-sm-8 col-lg-8">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Form</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.onHandleSubmit}>
                                <div className="form-group">
                                    <label> UserName </label>
                                    <input type="text"
                                           className="form-control"
                                           name="txtUserName"
                                           onChange={this.onHandleChange}
                                           value={this.state.txtUserName}
                                    />
                                </div>

                                <div className="form-group">
                                    <label> Password </label>
                                    <input type="password"
                                           className="form-control"
                                           name="txtPassword"
                                           onChange={this.onHandleChange}
                                           value={this.state.txtPassword}
                                    />
                                </div>

                                <div className="form-group">
                                    <label> Description </label>
                                    <textarea
                                           className="form-control"
                                           rows="3"
                                           name="txtDes"
                                           onChange={this.onHandleChange}
                                           value={this.state.txtDes}
                                    />
                                </div>

                                <div className="form-group">
                                    <label> Gender </label>
                                    <select name="stlGender"
                                            className="form-control"
                                            onChange={this.onHandleChange}
                                            value={this.state.stlGender}
                                    >
                                        <option value={1}>Male</option>
                                        <option value={0}>Female</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                                <button type="reset" className="btn btn-default">Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
