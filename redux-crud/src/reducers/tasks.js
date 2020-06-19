import * as types from './../constants/ActionTypes'

const data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];

const randomNumber = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const generatedID= () => {
    return randomNumber() + randomNumber() + '-' + randomNumber() + '-' + randomNumber() + '-' + randomNumber() + '-' + randomNumber();
}

const myReducers = (state = initialState , action) => {
    switch (action.type) {
        case types.LIST_ALL :
            return state;
        case types.ADD_TASK:
            const newTask = {
                id: generatedID(),
                name: action.task.name,
                status: action.task.status
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

export default myReducers;