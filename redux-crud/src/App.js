import React, {Component} from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import _ from 'lodash';

import { connect } from 'react-redux';
import isDisplayForm from "./reducers/isDisplayForm";
import * as actions from "./actions/index";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            taskEditing: null,
            filter : {
                name : '',
                status: -1
            },
            keyword: '',
            sortBy : 'name',
            sortValue: 1
        }
    }

    onToggleForm () {
        this.props.onToggleForm();
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    }

    onOpenForm = () => {
        this.setState({
            isDisplayForm: true
        });
    }

    onSubmit = (data) => {
        const { tasks } = this.state;
        if(data.id === '') {
            data.id = this.generatedID();
            tasks.push(data);
        } else {
            var key = this.findByID(data.id);
            tasks[key] = data;
        }
        this.setState({
            tasks : tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (id) => {
        const { tasks } = this.state;
        // const key = this.findByID(id);
        const key = _.findIndex(tasks, (task) => {
            return task.id === id;
        })

        if(key !== -1) {
            tasks[key].status = !tasks[key].status;
            this.setState({
                tasks : tasks
            });

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    findByID = (id) => {
        const { tasks } = this.state;
        let key = -1;
        tasks.forEach((task, index) => {
            if(task.id === id) {
                key = index;
            }
        });
        return key;
    }

    onHandleDelete = (id) => {
        const { tasks } = this.state;
        const key = this.findByID(id);
        if(key !== -1) {
            tasks.splice(key, 1);
            this.setState({
                tasks : tasks
            });

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }

    onHandleUpdate = (id) => {
        const { tasks } = this.state;
        const key = this.findByID(id);
        const taskEditing = tasks[key];
        this.setState({
            taskEditing : taskEditing
        });
        this.onOpenForm();
    }

    onFilter = (name, status) => {
        status = parseInt(status, 10);
        this.setState({
            filter : {
                name : name.toLowerCase(),
                status: status
            }
        });
    }

    onHandleSearch = (keyword) => {
        this.setState({
            keyword: keyword.toLowerCase()
        });
    }

    onHandleSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        });
    }

    render() {
        let {
            taskEditing,
            filter,
            keyword ,
            sortBy,
            sortValue
        } = this.state;

        const { isDisplayForm } = this.props;

        const elementTaskForm = isDisplayForm ? <TaskForm
            onSubmit={this.onSubmit}
            taskEditing={taskEditing}
        /> : '';

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : '' }>
                        { elementTaskForm }
                    </div>
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary" onClick={() => this.onToggleForm()}>
                            <span className="fa fa-plus mr-5">Thêm Công Việc</span>
                        </button>
                        {/*Search and Sort*/}
                        <Control onHandleSearch={this.onHandleSearch}
                                 onHandleSort={this.onHandleSort}
                                 sortBy={sortBy}
                                 sortValue={sortValue}
                        /><br/>
                        {/*End*/}
                        {/* Task List*/}
                        <TaskList
                                  onUpdateStatus={this.onUpdateStatus}
                                  onHandleDelete={this.onHandleDelete}
                                  onHandleUpdate={this.onHandleUpdate}
                                  onFilter={this.onFilter}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm : state.isDisplayForm
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
