import React, {Component} from 'react';

class Sort extends Component{
    onClick = (sortBy, sortValue) => {
        console.log(sortBy + ' ' + sortValue)
        this.props.onHandleSort(sortBy, sortValue);
    }

    render() {
        const { sortBy, sortValue } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span className="fa fa-caret-square-o-down ml-5"></span>&nbsp;&nbsp;&nbsp;&nbsp;Sắp Xếp
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li  onClick={() => this.onClick('name', 1)}>
                            <a role="button"
                               className={ (sortBy === 'name' && sortValue === 1) ? 'sort_selected' : '' }
                            >
                                    <span className="fa fa-sort-alpha-asc pr-5">
                                        Tên A-Z
                                    </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a role="button"
                               className={ (sortBy === 'name' && sortValue === -1) ? 'sort_selected' : '' }
                            >
                                    <span className="fa fa-sort-alpha-desc pr-5">
                                        Tên Z-A
                                    </span>
                            </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li onClick={() => this.onClick('status', 1)}>
                            <a role="button"
                               className={ (sortBy === 'status' && sortValue === 1) ? 'sort_selected' : '' }
                            >
                                Trạng Thái Kích Hoạt
                            </a>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a role="button"
                               className={ (sortBy === 'status' && sortValue === -1) ? 'sort_selected' : '' }
                            >
                                Trạng Thái Không hoạt động
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;
