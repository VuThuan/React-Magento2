import React, {Component} from 'react';

class TaskItem extends Component{
    render() {
        const { taskItem, keyIndex } = this.props;
        return (
            <tr>
                <td>{ keyIndex + 1 }</td>
                <td>{ taskItem.name }</td>
                <td className="text-center">
                    <span className={ taskItem.status === true ? 'label label-success' : 'label label-danger' }>
                        { taskItem.status === true ? 'Kích hoạt' : 'Không hoạt động' }
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5">Sửa</span>
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5">Xóa</span>
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
