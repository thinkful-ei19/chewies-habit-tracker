import { API_BASE_URL } from '../config';

export const FETCH_DAILY_REQUEST = 'FETCH_DAILY_REQUEST'
export const fetchDailyRequest=()=> ({
    type: FETCH_DAILY_REQUEST
});
export const FETCH_DAILY_SUCCESS = 'FETCH_DAILY_SUCCESS'
export const fetchDailySuccess=()=> ({
    type: FETCH_DAILY_SUCCESS
});
export const FETCH_DAILY_ERROR = 'FETCH_DAILY_ERROR'
export const fetchDailyError=()=> ({
    type: FETCH_DAILY_ERROR
});
export const ADD_DAILY = 'ADD_DAILY'
export const addDaily =(meals, walkTimes, poops)=> ({
    type: ADD_DAILY,
    meals,
    walkTimes,
    poops
})
export const fetchDaily=()=> {
    return(dispatch)=> {
        fetch(`${API_BASE_URL}api/daily`)
        .then(response=>response.json())
        .then(daily => dispatch(fetchDailySuccess(daily)))
        .catch(err=> console.log(err))
    }
};