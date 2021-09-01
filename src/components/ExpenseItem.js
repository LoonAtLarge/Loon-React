import React from "react";
import "./ExpenseItem.css";


//Passing Data via Props
//Props (short for properties) are variables that are passed into components
//the ExpenseItem component is a functional component that takes in an expense object as a prop, receiving all the properties of the expense object
function ExpenseItem(purchaseData) {
//the data in the props are stored as key/value pairs, so we can access the properties of the object by using the dot notation and calling the key

  //nesting divs allows us to output multiple lines of text without causing errors
  return (//we use className instead of class to assign styling because this is still within jsx and class is a reserved keyword in javascript
    <div className="expense-item"> 

      <div>{purchaseData.date /*need the toISOString method because Date objects can't be output as Strings*/}</div>
      <div className="expense-item__description">

        <h2>{purchaseData.title /*jsx allows you to run basic javascript within the html (only works inside the curly braces?)*/}</h2> 
        <div className="expense-item__price">${purchaseData.amount}</div>
      </div>
    </div>
  );
}



export default ExpenseItem;
