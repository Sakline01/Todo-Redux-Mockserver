import Counter from './counter';
import Todo from './todo';
import { combineReducers } from 'redux';
import mocktodo from './mocktodo';
const allreducers = combineReducers({
    Count: Counter,
    Todos: Todo,
    Mock: mocktodo
})
export default allreducers;