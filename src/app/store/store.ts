import { ADD_GIFS, VIEW_GIF } from './actions';
import { IGif } from '../models/gif.model';

export interface IAppState {
    gif?: IGif;
    gifList: IGif[];
    lastUpdate: any;
}
export function rootReducer(state: IAppState, action): IAppState {
    // console.log('store=>', state, action);
    switch (action.type) {
        case ADD_GIFS:
            const gifList = action.gifList;
            const result = {...state, gifList};
            return result;
        case VIEW_GIF:
            const gif = action.gif;
            return {...state, gif};
        default:
            return state;
    }
}
export const INITIAL_STATE: IAppState = {
    gifList: [],
    gif: null,
    lastUpdate: null
};

