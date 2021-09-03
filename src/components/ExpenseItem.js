import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


//Passing Data via Props
//Props (short for properties) are variables that are passed into components
//the ExpenseItem component is a functional component that takes in an expense object as a prop, receiving all the properties of the expense object
function ExpenseItem(purchaseData) {
//the data in the props are stored as key/value pairs, so we can access the properties of the object by using the dot notation and calling the key

/*Using a component called ExpenseItem to display each expense in the expense array in App.js 
  The ExpenseItem component should be configurable from outside of the component
  Data should NOT be stored in the component itself, but instead passed in as props */

  //nesting divs allows us to output multiple lines of text without causing errors
  return (//we use className instead of class to assign styling because this is still within jsx and class is a reserved keyword in javascript
    <div className="expense-item"> 

      <ExpenseDate date={purchaseData.date}/> {/*This is a component that we imported from another file. Elements that don't require any content can be written as self-closing tags*/}
      
      <div className="expense-item__description">
        <h2>{purchaseData.title /*jsx allows you to run basic javascript within the html (only works inside the curly braces)*/}</h2> 
        <div className="expense-item__price">${purchaseData.amount}</div>
      </div>
    </div>
  );
}



export default ExpenseItem;
