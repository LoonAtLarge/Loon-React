import React from 'react';
import './ExpenseDate.css';

//this component recieves the date from the parent component as props and displays it
function ExpenseDate(purchaseData){

var expenseDate = new Date(purchaseData.date); //store the date prop in a new Date object because otherwise the call to the getFullYear method won't work and will crash the page

// toLocaleString() is a built-in function that allows date objects to be parsed and output in a readable format 
//documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
const month  = expenseDate.toLocaleString('en-US', {month: 'long'}); //the function takes in a language and format as arguments, and returns the month in the desired format
const day = expenseDate.toLocaleString('en-US', {day: '2-digit'});//second verse same as the first
const year = expenseDate.getFullYear(); //this function is pretty self-explaanatory, it returns the year contained in the provided date object
//this code could be run in the divs but it's better practice to run the logic outside, store it in a variable, and then pass it into the divs


return(
    <div className="expense-date">

        <div className="expense-date__month">{month}</div>{/*displays the month*/}
        <div className="expense-date__day">{day}</div>{/*displays the day*/}
        <div className="expense-date__year">{year}</div>{/*displays the year*/}

      </div>
)
}

export default ExpenseDate;