import React, {Component} from 'react';

import './App.css';
import TodoItems from "./components/TodoItems";
import TickForm from "./img/foursquare-check-in.svg";

//Đề bài : sử dụng state để chuyển đổi trạng thái isComplete khi click vào 1 TodoItems
class App extends Component{
    constructor() {
        super();
        this.state = {
            newItem : '',
            currentFilter : 'all', //  all, active, completed
            todoItems: [
                { title : "Nghe Nhạc" , isComplete: true },
                { title : "Đi ngủ" , isComplete: true},
                { title : "Học bài" }
            ]
        };

        this.onKeyUp =  this.onKeyUp.bind(this);
        this.onChange = this.onChange.bind(this);
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

    onKeyUp(event) {
        if(event.keyCode === 13) { //Key enter
            let text = event.target.value;
            if(!text) {
                return;
            }
            text = text.trim();
            if(!text) {
                return ;
            }

            this.setState({
                'newItem' : '',
                todoItems : [
                    { title: text, isComplete: false },
                    ...this.state.todoItems
                ]
            });
        }
    }

    onChange(event){
        this.setState({
           'newItem': event.target.value
        });
    }

    render() {
          const { todoItems, newItem } = this.state;
          if(todoItems.length){
              return (
                  <div className="App">
                      <div className="Header">
                            <img src={TickForm} width={32} height={32} />
                            <input
                                type="text"
                                placeholder="Add a new Items"
                                value={newItem}
                                onChange={this.onChange}
                                onKeyUp={this.onKeyUp}
                            />
                      </div>
                      {
                          todoItems.length &&  todoItems.map((item, index) =>
                              <TodoItems
                                  item={item}
                                  key={index}
                                  onClick={this.onItemClicked(item)}
                              />
                          )
                      }
                  </div>
              );
          }
    }
}

export default App;
