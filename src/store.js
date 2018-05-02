import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import activityReducer from './reducers/activity';
import protectedDataReducer from './reducers/protected-data';

export default createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        activity: activityReducer,
        protectedData: protectedDataReducer
    }),
    applyMiddleware(thunk)
);