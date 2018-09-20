import { ADD_ARTICLE, UPDATE_TIME } from '../constants/action-types';

const initialState = {
    articles: [],
    currentTime: 'time not initialized'
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        case UPDATE_TIME:
            console.log('root reducer update_time state:', state, 'action', action);
            return { ...state, currentTime: action.currentTime };
        default:
            return state;
    }
};

export default rootReducer;