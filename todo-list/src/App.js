import React, {Component} from 'react';

import './App.css';
import TodoItems from "./components/TodoItems";

//Đề bài : sử dụng state để chuyển đổi trạng thái isComplete khi click vào 1 TodoItems
class App extends Component{
    constructor() {
        super();
        this.ToDoList = [
            { title : "Nghe Nhạc" , isComplete: true },
            { title : "Đi ngủ" , isComplete: true},
            { title : "Học bài" }
        ];


    }

    onItemClicked() {

    }

    render() {
          return (
              <div className="App">
                  {
                      this.ToDoList.length > 0 &&  this.ToDoList.map((item, index) =>
                          <TodoItems item={item} key={index} onClick={this.onItemClicked} />
                      )
                  }
                  {
                      this.ToDoList.length === 0 && 'Nothing Here'
                  }
              </div>
          );
    }
}

export default App;
