# Redux Reducer Generator
This project aim to remove boilerplate code when setting up action and reducer. It also remove the burden of creating a constant variable for your action type. You can reuse your action type name without being afraid of it been already being defined. I have include a Todo application to demostrate this pattern.

## Getting Started
```
git clone git@github.com:Thuthinh/Redux-Reducer-Generator.git
npm install
```
Project utilize ES6 import so you need an evergreen browser.
## Code
Reducer are now simple functions
```
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
```
Action type and reducer function are now declared in an array
```
const actions = [
    {type: 'GET_DATA', reducer: getData},
    {type: 'REMOVE_LAST', reducer: removeLast},
    {type: 'REMOVE_FIRST', reducer: removeFirst},
    {type: 'REMOVE_ALL', reducer: removeAll},
    {type: 'REMOVE_BY_INDEX', reducer: removeByIndex}
];
```
Initial state for the reducer
```
const initialState = {
    data: []
}
```
actionGenerators creates an unique Id using Symbol and assign that Id to actions and reducer function.
```
const actionGenerators = (actions) => {
    return actions.reduce((a,c)=>{
        const id = Symbol(c.type);   
        a.actions = {...a.actions, [c.type]: id};
        a.reducer = a.reducer ? a.reducer.concat({id, reducer: c.reducer}) : [{id, reducer: c.reducer}];
        return a;
    },{});
}
```
reducerGenerators is a generic reducer creator. 
```
const reducerGenerators = (initialState, reducer) => {
    return (state = initialState, action) => {
        const found = reducer.find(x=>x.id === action.type);
        return found ? found.reducer(state, action) : state;
    }
}
```
## Usage
```
const actionsReducerCreator = actionGenerators(actions);
const store = createStore(reducerGenerators(initialState, actionsReducerCreator.reducer));
const {GET_DATA} = actionsReducerCreator.actions;
store.dispatch({type: GET_DATA});

```
