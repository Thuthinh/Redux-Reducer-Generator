import { createStore } from 'redux';
import { actionCreator } from './reducer/todoReducer.js';
import { reducerGenerators} from './util/generator.js';
export const store = createStore(reducerGenerators(actionCreator.initialState, actionCreator.creator));