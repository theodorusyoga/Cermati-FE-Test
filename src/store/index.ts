import { combineReducers, createStore } from 'redux';
import { reducer } from '../reducers';
import { IState } from './types';
export interface IRootState {
    main: IState
}
const store = createStore<IRootState, any, any, any>(
    combineReducers({
        main: reducer
    }));
export default store;