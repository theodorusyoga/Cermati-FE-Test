import { ActionType } from 'typesafe-actions';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import * as actions from '../actions';

export interface HighlightContent {
    title: string,
    description: string,
    icon: IconDefinition
}

export type HighlightContents = Array<HighlightContent>;

export interface IState {
    name: string,
    highlights: HighlightContents
}

export enum Constants {
    ADD_HIGHLIGHTS = 'ADD_HIGHLIGHTS'
}

export type Actions = ActionType<typeof actions>;


