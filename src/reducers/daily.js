import {FETCH_DAILY_SUCCESS, FETCH_DAILY_REQUEST, FETCH_DAILY_ERROR, ADD_DAILY, POST_DAILY_SUCCESS, POST_DAILY_ERROR} from '../actions';

const initialState = {
    meals:{ 
        breakfastMeal: false,
        dinnerMeal: false
    },
    walkTimes: {
        morming: false,
        afternoon: false,
        evening: false,
        night: false
    },
    poops:{
        poopQuality: '',
        poopsTaken: 0,
        poopDetails: ''
    },
    loading: false,
    error: null
};
export default (state=initialState, action) => {
    if(action.type === FETCH_DAILY_REQUEST){
        return Object.assign({}, state, {
            loading: true
        })
    }
    if(action.type === FETCH_DAILY_SUCCESS){
        return Object.assign({}, state, {
            
        })
    }
    if(action.type === FETCH_DAILY_ERROR){
        return Object.assign({}, state, {
            error: action.error
        })
    }
    if(action.type === ADD_DAILY){
        let meal;
        let walkTime;
        let poop;
        return Object.assign({}, state, {
            meals: [...state.meals, meal],
            walkTimes: [...state.walkTimes, walkTime],
            poops: [...state.poops, poop]
        })
    }
    if(action.type === POST_DAILY_SUCCESS){
        return Object.assign({}, state, {

        })
    }
    if(action.type === POST_DAILY_ERROR){
        return Object.assign({}, state, {
            error: action.error
        })
    }
    return state;
}