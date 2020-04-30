import { IState, Actions, Constants } from './types';

const init: IState = {
    list: []
};

export function reducer(state: IState = init,
    action: Actions): IState {
    switch (action.type) {
        case Constants.ADD_ITEM:
            return {
                list: [
                    ...state.list,
                    action.payload.item
                ]
            }
        default:
            return state;
    }
}