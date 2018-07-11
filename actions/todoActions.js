import { actionCreator } from '../reducer/todoReducer.js';
import { store } from '../store.js';
const {GET_DATA, REMOVE_LAST, REMOVE_FIRST, REMOVE_ALL, REMOVE_BY_INDEX} = actionCreator.actions;

export const getData = (value) => {
    store.dispatch({type:GET_DATA, payload: value});
}

export const resetData = () => {
    store.dispatch({type: REMOVE_ALL});
}

export const removeItemByIndex = (index) => {
    store.dispatch({type: REMOVE_BY_INDEX, payload: index});
}

export const removeFirstItem = () => {
    store.dispatch({type: REMOVE_FIRST});
}

export const removeLastItem = () => {
    store.dispatch({type: REMOVE_LAST});
}