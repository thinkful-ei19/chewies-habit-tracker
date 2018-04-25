import React from 'react';
import {reduxForm, Field} from 'redux-form';
import ReactStars from 'react-stars';
import Input from './input';
import {addDaily} from '../actions/daily';



export class Form extends React.Component {
    onSubmit(values) {
        console.log(values);
        const value = this.input.value;
        this.props.dispatch(addDaily(value));
        
    }
    render() {
     

        return (
            <div>
                <h2>Chewie's Daily Tracker</h2>
                <form onSubmit={e=> this.onSubmit(e)}>
                    <label htmlFor='mealTimes'>Dog Bowl Icon</label>
                        <div className='meals'>
                            <label htmlFor='breakfastMeal'>Breakfast</label>
                            <Field name='breakfastMeal' component='input' type='checkbox'/>
                            <label htmlFor='dinnerMeal'>Dinner</label>
                            <Field name='dinnerMeal' component='input' type='checkbox' />
                            <Field name='mealDetails' cid='message' component='textarea' placeholder='Comments/Concerns'/>
                        </div>
                    <label htmlFor='walks'>Dog Walking Icon</label>
                        <div className='walkTimes'>
                            <label htmlFor='morning'>Morning</label>
                            <Field name='morning' component='input' type='checkbox'/>
                            <label htmlFor='afternoon'>Afternoon</label>
                            <Field name='afternoon' component='input' type='checkbox' />
                            <label htmlFor='evening'>Evening</label>
                            <Field name='evening' component='input' type='checkbox' />
                            <label htmlFor='night'>Night</label>
                            <Field name='night' component='input' type='checkbox' />
                        </div>
                    <label htmlFor='poops'>Poop Icon</label>
                        <div className='poops'>
                        <ReactStars count={5} size={16} color1={'#808080'} color2={'#8B4513'} half={false}/>
                        <Field name='number-of-poops' component='select'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Field>
                        <Field name='poop-details' cid='message' component='textarea' placeholder='Important Comments about the day'/>
                    </div>
                    <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                    Submit
                    </button>
                </form>
            </div>
        );
    }
}
export default reduxForm({
    form: 'form',

})(Form);