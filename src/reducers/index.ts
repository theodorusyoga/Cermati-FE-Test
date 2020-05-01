import { IState, Actions, Constants } from '../store/types';

const init: IState = {
    name: 'Theodorus Yoga',
    highlights: []
};

export function reducer(state: IState = init,
    action: Actions): IState {
    switch (action.type) {
        case Constants.ADD_HIGHLIGHTS:
            return {
                ...state,
                highlights: action.payload.item
            }
        default:
            return state;
    }
}