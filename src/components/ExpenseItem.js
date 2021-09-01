import React from "react";
import "./ExpenseItem.css";


//Passing Data via Props
//Props (short for properties) are variables that are passed into components
//the ExpenseItem component is a functional component that takes in an expense object as a prop, receiving all the properties of the expense object
function ExpenseItem(purchaseData) {
//the data in the props are stored as key/value pairs, so we can access the properties of the object by using the dot notation and calling the key

var expenseDate = new Date(purchaseData.date); //store the date prop in a new Date object because otherwise the getFullYear method won't work and will crash the page

// toLocaleString() is a built-in function that allows date objects to be parsed and output in a readable format 
//documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
const month  = expenseDate.toLocaleString('en-US', {month: 'long'}); //the function takes in a language and format as arguments, and returns the month in the desired format
const day = expenseDate.toLocaleString('en-US', {day: '2-digit'});//second verse same as the first
const year = expenseDate.getFullYear(); //this function is pretty self-explaanatory, it returns the year contained in the provided date object
//this code could be run in the divs but it's better practice to run the logic outside, store it in a variable, and then pass it into the divs

  //nesting divs allows us to output multiple lines of text without causing errors
  return (//we use className instead of class to assign styling because this is still within jsx and class is a reserved keyword in javascript
    <div className="expense-item"> 

      <div>

        <div>{month}</div>{/*displays the month*/}
        <div>{day}</div>{/*displays the day*/}
        <div>{year}</div>{/*displays the year*/}

      </div>
      <div className="expense-item__description">
        <h2>{purchaseData.title /*jsx allows you to run basic javascript within the html (only works inside the curly braces?)*/}</h2> 
        <div className="expense-item__price">${purchaseData.amount}</div>
      </div>
    </div>
  );
}



export default ExpenseItem;
