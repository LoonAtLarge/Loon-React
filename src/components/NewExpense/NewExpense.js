import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

//component for adding a new expense to the page
const NewExpense = () => {

    return <div className="new-expense">
        <ExpenseForm/>
    </div>

};

export default NewExpense;