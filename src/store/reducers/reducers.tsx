import {UPDATE_VIEWS} from '../actions/actions';

export const viewsReducer = (state ={}, action :{type: string, view: string}) => {
    switch(action.type) {
      case UPDATE_VIEWS :
        return {...state, name: action.view}
      default :
        return state
    };
};
