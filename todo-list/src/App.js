import React, {Component} from 'react';

import './App.css';
import TodoItems from "./components/TodoItems";

//Đề bài : sử dụng state để chuyển đổi trạng thái isComplete khi click vào 1 TodoItems
class App extends Component{
    constructor() {
        super();
        this.state = {
            todoItems: [
                { title : "Nghe Nhạc" , isComplete: true },
                { title : "Đi ngủ" , isComplete: true},
                { title : "Học bài" }
            ]
        };


    }

    onItemClicked(item) {
        return (event) => {
            console.log("Rendering....", item);
            const isComplete = item.isComplete;
            const { todoItems } =  this.state;
            const index = todoItems.indexOf(item);

            this.setState({
                todoItems: [
                    ...todoItems.slice(0, index),
                    {
                        ...item,
                        isComplete: !isComplete
                    },
                    ...todoItems.slice(index + 1)
                ]
            })
        }
    }

    render() {
          const { todoItems } = this.state;
          if(todoItems.length){
              return (
                  <div className="App">
                      {
                          todoItems.length &&  todoItems.map((item, index) =>
                              <TodoItems item={item} key={index} onClick={this.onItemClicked(item)} />
                          )
                      }
                  </div>
              );
          }
    }
}

export default App;
