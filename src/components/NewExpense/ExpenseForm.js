import React, {useState} from 'react';
import './ExpenseForm.css';

//component for a form to enter data for new expense
const ExpenseForm = () => {

    //State variables
    //use State can be called multiple times in a component to create multiple states that act independently
    const [titleEntry, setTitleEntry] = useState('');
    const [amountEntry, setAmountEntry] = useState('');
    const [dateEntry, setDateEntry] = useState('');

    //Event Handlers
    const titleChangeHandler = (event) => { //event is a js object with information about the event, in this case, each keystroke within the title field on the form.
        console.log(event.target.value);//the value field of the event object is the value of the input field, so with each keystroke, the value will be the text currently in the input field. It will automatically update as the user types.

        setTitleEntry(event.target.value);//set the state of the titleEntry variable to the value of the input field.
    }

    const amountChangeHandler = (event) => { 
        console.log(event.target.value);

        setAmountEntry(event.target.value);
    }

    const dateChangeHandler = (event) => { 
        console.log(event.target.value);

        setDateEntry(event.target.value);
    }

    return <form>
        <div className='new-expense_controls'>
            <div className='new-expense_control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense_control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className='new-expense_control'>
                <label>Date</label>
                <input type='date'min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense_actions'>
            <button type='submit'>Add Expense</button>
        </div>

    </form>

};

export default ExpenseForm;