import React, {Component} from 'react';

class TaskItem extends Component{

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.taskItem.id);
    }

    onHandleDelete = () => {
        this.props.onHandleDelete(this.props.taskItem.id);
    }

    onHandleUpdate = () => {
        this.props.onHandleUpdate(this.props.taskItem.id);
    }

    render() {
        const { taskItem, keyIndex } = this.props;
        return (
            <tr>
                <td>{ keyIndex + 1 }</td>
                <td>{ taskItem.name }</td>
                <td className="text-center">
                    <span onClick={this.onUpdateStatus} className={ taskItem.status === true ? 'label label-success' : 'label label-danger' }>
                        { taskItem.status === true ? 'Kích hoạt' : 'Không hoạt động' }
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onHandleUpdate}>
                        <span className="fa fa-pencil mr-5">Sửa</span>
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onHandleDelete}>
                        <span className="fa fa-trash mr-5">Xóa</span>
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
