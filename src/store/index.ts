import { combineReducers, createStore } from 'redux';
import { reducer } from './reducer';
import { IState } from './types';
export interface IRootState {
    test: IState
}
const store = createStore<IRootState, any, any, any>(
    combineReducers({
        test: reducer
    }));
export default store;