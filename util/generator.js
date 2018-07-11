export const actionGenerators = (actions) => {
    return actions.reduce((a,c)=>{
        const id = Symbol(c.type);   
        a.actions = {...a.actions, [c.type]: id};
        a.creator = a.creator ? a.creator.concat({id, exec: c.exec}) : [{id, exec: c.exec}];
        return a;
    },{});
}

export const reducerGenerators = (initialState, creator) => {
    return (state = initialState, action) => {
        const found = creator.find(x=>x.id === action.type);
        return found ? found.exec(state, action) : state;
    }
}