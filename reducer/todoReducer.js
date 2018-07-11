import { actionGenerators } from '../util/generator.js';

const getData = (state, action) => {
    return {...state, data: state.data.concat(action.payload)};
};

const removeLast = (state) => {
    return {...state, data: state.data.filter(x=>x !== state.data[state.data.length-1])};
}

const removeFirst = (state) => {
    return {...state, data: state.data.filter(x=>x !== state.data[0])};
}

const removeAll = (state) => {
    return {...state, data: []};
}

const removeByIndex = (state, action) => {
    return {...state, data: state.data.filter(x=>x !== state.data[action.payload])}
}

const actions = [
    {type: 'GET_DATA', reducer: getData},
    {type: 'REMOVE_LAST', reducer: removeLast},
    {type: 'REMOVE_FIRST', reducer: removeFirst},
    {type: 'REMOVE_ALL', reducer: removeAll},
    {type: 'REMOVE_BY_INDEX', reducer: removeByIndex}
];

const initialState = {
    data: []
}

export const actionCreator = {...actionGenerators(actions),initialState};