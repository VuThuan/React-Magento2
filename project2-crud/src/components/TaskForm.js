import React, {Component} from 'react';

class TaskForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            status: true
        };
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onHandleChange = (event) => {
        const target = event.target;
        const name = target.name;
        let value = target.value;
        if(name === 'status') {
            value = value.status === 'true' ? true : false;
        }
        this.setState({
           [name] : value
        });
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClearForm();
        this.onCloseForm();
    }

    onClearForm = () => {
        this.setState({
            id : '',
            name: '',
            status: true
        });
    }

    componentDidMount() {
        const { taskEditing } = this.props;
        if(taskEditing) {
            this.setState({
                id: taskEditing.id,
                name : taskEditing.name,
                status : taskEditing.status
            });
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps && nextProps.taskEditing) {
            this.setState({
                id: nextProps.taskEditing.id,
                name : nextProps.taskEditing.name,
                status : nextProps.taskEditing.status
            });
        } else if (!nextProps.taskEditing) {
            this.setState({
                id : '',
                name : '',
                status: true
            });
        }
    }

    render() {
        const { taskEditing } = this.props;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{ taskEditing ? 'Sửa' : 'Thêm' } Công Việc
                        <span onClick={this.onCloseForm} className="fa fa-times-circle text-right" style={ {float: "right", cursor: "pointer"} } />
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text"
                                   className="form-control"
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.onHandleChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control"
                                required="required"
                                name="status"
                                value={this.state.status}
                                onChange={this.onHandleChange}
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Không hoạt động</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Save</button>
                            &nbsp;
                            <button type="button" onClick={this.onClearForm} className="btn btn-danger">Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
