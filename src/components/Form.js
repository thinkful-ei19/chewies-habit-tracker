import React from 'react';
import {reduxForm, Field} from 'redux-form';
import ReactStars from 'react-stars';



export class Form extends React.Component {
    onSubmit(values) {
        console.log(values);
    }
    render() {
     

        return (
            <div>
                <h2>Chewie's Daily Tracker</h2>
                <form onSubmit={e=> this.onSubmit(e)}>
                    <label htmlFor='mealTimes'>Dog Bowl Icon</label>
                        <div className='meals'>
                            <label htmlFor='Breakfast'>Breakfast</label>
                            <Field name='meal-time' component='input' type='checkbox' value='Breakfast'/>
                            <label htmlFor='Dinner'>Dinner</label>
                            <Field name='meal-time' component='input' type='checkbox' value='Dinner'/>
                            <Field name='meal-details' cid='message' component='textarea' placeholder='Comments/Concerns'/>
                        </div>
                    <label htmlFor='walks'>Dog Walking Icon</label>
                        <div className='walks'>
                            <label htmlFor='Morning'>Morning</label>
                            <Field name='number-of-walks' component='input' type='checkbox' value='Morning'/>
                            <label htmlFor='Morning'>Afternoon</label>
                            <Field name='number-of-walks' component='input' type='checkbox' value='Afternoon'/>
                            <label htmlFor='Morning'>Evening</label>
                            <Field name='number-of-walks' component='input' type='checkbox' value='Evening'/>
                            <label htmlFor='Morning'>Night</label>
                            <Field name='number-of-walks' component='input' type='checkbox' value='Night'/>
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
                    <button type="submit" name="submit" id="guessButton" className="button">
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