import { IState, Actions, Constants } from '../store/types';

const init: IState = {
    list: [],
    name: 'Theodorus Yoga'
};

export function reducer(state: IState = init,
    action: Actions): IState {
    switch (action.type) {
        case Constants.ADD_ITEM:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload.item
                ]
            }
        default:
            return state;
    }
}