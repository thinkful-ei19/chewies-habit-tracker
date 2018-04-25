import {FETCH_DAILY_SUCCESS, FETCH_DAILY_REQUEST, FETCH_DAILY_ERROR, ADD_DAILY} from '../actions';

const initialState = {
    meals:{},
    walkTimes: [],
    poops:{},
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
    return state;
}