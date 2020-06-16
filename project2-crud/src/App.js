import React, {Component} from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks : []
        }
    }

    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')){
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            })
        }
    }

    onGeneratedData = () => {
        const tasks = [
            {
                id : this.generatedID(),
                name : 'Learn C++',
                status: false
            },
            {
                id : this.generatedID(),
                name : 'Learn PHP and Magento in 10 minuted',
                status: true
            },
            {
                id : this.generatedID(),
                name : 'Learn ReactJS for developer Frontend',
                status: true
            }
        ];
        this.setState({
            tasks : tasks
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    randomNumber() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generatedID() {
        return this.randomNumber() + this.randomNumber() + '-' + this.randomNumber() + '-' + this.randomNumber() + '-' + this.randomNumber() + '-' + this.randomNumber();
    }

    render() {
        const { tasks } = this.state;
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <TaskForm />
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-5">Thêm Công Việc</span>
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button"
                                className="btn btn-danger"
                                onClick={this.onGeneratedData}
                        >
                            Generated Data
                        </button> <br/>
                        {/*Search and Sort*/}
                        <Control/><br/>
                        {/*End*/}
                        {/* Task List*/}
                        <TaskList tasks={tasks} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
