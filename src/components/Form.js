import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './input';

export class Form extends React.Component {
    onSubmit(values) {
        console.log(values);
    }
    render() {
        return (
            <div>
                <h2>Chewie's Daily Tracker</h2>
                <form>
                    <label htmlFor='mealTimes'>Dog Bowl Icon</label>
                    <Field name='meal-details' cid='message' component='textarea' />
                    <label htmlFor='walks'>Dog Walking Icon</label>
                    <Field name='number-of-walks' component='checkbox' />
                    <label htmlFor='poops'>Poop Icon</label>
                    <Field name='quality-of-poop' component='rating'/>
                    <Field name='number-of-poops' component='select'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Field>
                </form>
            </div>
        );
    }
}
export default reduxForm({
    form: 'form',

})(Form);