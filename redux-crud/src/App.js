import React, {Component} from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import _ from 'lodash';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isDisplayForm : false,
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

    addHandleJobs (event) {
        if(this.state.isDisplayForm && this.state.taskEditing) {
            this.setState({
                isDisplayForm: true,
                taskEditing : null
            });
        } else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                taskEditing : null
            });
        }
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
            isDisplayForm,
            taskEditing,
            filter,
            keyword ,
            sortBy,
            sortValue
        } = this.state;
        const elementTaskForm = isDisplayForm ? <TaskForm
            onCloseForm={this.onCloseForm}
            onSubmit={this.onSubmit}
            taskEditing={taskEditing}
        /> : '';

        // if(filter) {
        //     if(filter.name) {
        //         tasks = tasks.filter((task) => {
        //             return task.name.toLowerCase().indexOf(filter.name) !== -1;
        //         });
        //     }
        //     tasks = tasks.filter((task) => {
        //         if(filter.status === -1) {
        //             return task;
        //         } else {
        //             return task.status === (filter.status === 1 ? true : false)
        //         }
        //     });
        // }
        //
        // if(keyword) {
        //     // tasks = tasks.filter((task) => {
        //     //     return task.name.toLowerCase().indexOf(keyword) !== -1;
        //     // });
        //
        //     tasks = _.filter(tasks, (task) => {
        //         return task.name.toLowerCase().indexOf(keyword) !== -1;
        //     });
        // }
        //
        // if(sortBy === 'name') {
        //     tasks.sort( (a, b) => {
        //         if(a.name > b.name) return sortValue;
        //         else if (a.name < b.name) return -sortValue;
        //         else return 0
        //     });
        // } else {
        //     tasks.sort( (a, b) => {
        //         if(a.status > b.status) return -sortValue;
        //         else if (a.status < b.status) return sortValue;
        //         else return 0
        //     });
        // }


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
                        <button type="button" className="btn btn-primary" onClick={() => this.addHandleJobs()}>
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

export default App;
