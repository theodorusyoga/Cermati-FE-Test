import { ActionType } from 'typesafe-actions';
import * as actions from '../actions';

export interface IState {
    list: string[]
}

export enum Constants {
    ADD_ITEM = 'ADD_ITEM'
}

export type Actions = ActionType<typeof actions>;