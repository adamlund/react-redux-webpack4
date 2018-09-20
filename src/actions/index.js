import { ADD_ARTICLE, UPDATE_TIME } from '../constants/action-types';

/* Using a simple webservice that returns a JSON object to tell the current time */
export const fetchTime = () => (
    fetch('http://worldclockapi.com/api/json/utc/now')
);

/* Method to cheaply parse the time object from service and return the portion we want */
function checkTimeObject(timeObject) {
    return (timeObject && timeObject.hasOwnProperty('currentFileTime')) ? timeObject.currentFileTime : 'Error -- no currentFileTime';
}

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});

export const updateTime = newTime => ({
    type: UPDATE_TIME,
    currentTime: newTime
});

/**
 * Example of a Thunk method, which is internally handling result of an async call and returning a dispatch.
 */
export const updateTimeAsyncThunk = () => {
    return (dispatch) => {
        return fetchTime().then(
            result => result.json().then(
                timeObject => dispatch(updateTime(checkTimeObject(timeObject)))
                ).catch(jsonError => console.error('JSON parse error', jsonError)
            ).catch(fetchError => console.error('FETCH error', fetchError))
        );
    };
};