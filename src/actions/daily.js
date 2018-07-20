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
});
export const POST_DAILY_SUCCESS = 'POST_DAILY_SUCCESS'
export const postDailySuccess=()=> ({
    type: POST_DAILY_SUCCESS
});
export const POST_DAILY_ERROR = 'POST_DAILY_ERROR'
export const postDailyError=()=> ({
    type: POST_DAILY_ERROR
});
export const DELETE_DAILY = 'DELETE_DAILY';
export const deleteDaily = (id) => ({
    type: DELETE_DAILY,
    id
});
//post action for saving info typed in the from post request to endpoint
//once user logs in fetch username from db and validate
//fetch request based on id for dailies
//same for post based on user id
//look up user 
//use.this.props.daily

export const fetchDaily=()=> {
    return(dispatch)=> {
        fetch(`${API_BASE_URL}api/daily`)
        .then(response=>response.json())
        .then(daily => dispatch(fetchDailySuccess(daily)))
        .catch(err=> console.log(err))
    }
};
export const postDaily = (daily)=> {
    return(dispatch)=> {
        fetch(`${API_BASE_URL}api/daily/`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(daily)
        })
            .then(res => res.json())
            .then(daily => dispatch(postDailySuccess(daily)))
            .catch(err => console.log(err));
    }
};
export const deleteDaily = (daily)=> {
    return (dispatch)=> {
        fetch(`${API_BASE_URL}api/daily/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if(!res.ok) {
                return Promise.reject(rest.statusText);
            }
            return dispatch(deleteDaily(id));
        })
    }
}