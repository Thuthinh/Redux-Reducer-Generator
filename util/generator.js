export const actionGenerators = (actions) => {
    return actions.reduce((a,c)=>{
        const id = Symbol(c.type);   
        a.actions = {...a.actions, [c.type]: id};
        a.reducer = a.reducer ? a.reducer.concat({id, reducer: c.reducer}) : [{id, reducer: c.reducer}];
        return a;
    },{});
}

export const reducerGenerators = (initialState, reducer) => {
    return (state = initialState, action) => {
        const found = reducer.find(x=>x.id === action.type);
        return found ? found.reducer(state, action) : state;
    }
}