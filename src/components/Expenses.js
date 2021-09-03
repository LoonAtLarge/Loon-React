import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

//this component recieves expense data as props and displays it using the ExpenseItem component
function Expenses(props) {

    return( 
<Card className="expenses">
    {/* As Justin (Mintzy) explained: the .map() function allows you to iterate through an array of data (with the e=>). Here, we use it to loop through the expenses array in App.js that is within the props. This wasn't how I was initially planning on tackling this but it's much more efficient since it will run dynamically as the array grows or shrinks */}
    {props.expenses.map(e=>(<ExpenseItem title={e.title} amount={e.amount} date={e.date}/>))}
</Card>
);
 
}

export default Expenses;