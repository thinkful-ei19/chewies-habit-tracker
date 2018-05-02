import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {API_BASE_URL} from '../config';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



export class Form extends React.Component {
    onSubmit(values) {
        const authToken = this.props.authToken;
        return fetch(`${API_BASE_URL}/daily`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${authToken}`
            }
        })
        .then(res => {
            if (!res.ok) {
                if (
                    res.headers.has('content-type') &&
                    res.headers
                        .get('content-type')
                        .startsWith('application/json')
                ) {
                    // It's a nice JSON error returned by us, so decode it
                    return res.json().then(err => Promise.reject(err));
                }
                // It's a less informative error returned by express
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
            }
            return;
        })
        .then(() => console.log('Submitted with values', values))
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
            return Promise.reject(
                new SubmissionError({
                    _error: 'Error submitting daily'
                })
            );
        });
        
    }
    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Daily submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

        return (
            <div>
                <h2>Chewie's Daily Tracker</h2>
                <form onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {successMessage}
                {errorMessage}
                    <label htmlFor='mealTimes'>Dog Bowl Icon</label>
                        <div className='meals'>
                            <label htmlFor='breakfastMeal'>Breakfast</label>
                            <Field name='breakfastMeal' component='input' type='checkbox'/>
                            <label htmlFor='dinnerMeal'>Dinner</label>
                            <Field name='dinnerMeal' component='input' type='checkbox' />
                            <Field name='mealDetails' cid='message' component='textarea' placeholder='Food Comments/Concerns'/>
                        </div>
                    <label htmlFor='walks'>Dog Walking Icon</label>
                        <div className='walkTimes'>
                            <label htmlFor='morningWalk'>Morning</label>
                            <Field name='morningWalk' component='input' type='checkbox'/>
                            <label htmlFor='afternoonWalk'>Afternoon</label>
                            <Field name='afternoonWalk' component='input' type='checkbox' />
                            <label htmlFor='eveningWalk'>Evening</label>
                            <Field name='eveningWalk' component='input' type='checkbox' />
                            <label htmlFor='nightWalk'>Night</label>
                            <Field name='nightWalk' component='input' type='checkbox' />
                        </div>
                    <label htmlFor='poops'>Poop Icon</label>
                        
                        <div className='poops'>
                       
                            <label>
                            <Field name="poopQuality" component="input" type="radio" value="1" />
                            Bad
                            </label>
                            <label>
                            <Field name="poopQuality" component="input" type="radio" value="2" />
                            OK
                            </label>
                            <label>
                            <Field name="poopQuality" component="input" type="radio" value="3" />
                            Good
                            </label>
                    
                        <Field name='poopsTaken' component='select'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Field>
                        <Field name='poopDetails' cid='message' component='textarea' placeholder='Poop Comments/Concerns'/>
                    </div>
                    <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                    Submit
                    </button>
                    <button>
                    <Link to="/overview">Overview</Link>
                    </button>
                </form>
            </div>
        );
    }
}
Form = reduxForm({
    form: 'form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('contact', Object.keys(errors)[0]))
})(Form);

const mapStateToProps = state => ({
    authToken: state.auth.authToken
});
export default connect(mapStateToProps)(Form)
