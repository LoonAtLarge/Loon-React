import React, {useState} from 'react'; //this is a named import. Not only are we importing the React library, we are specifiying a particular part of the library. In this cae we are importing the useState function from React. useState allows us to define values as States, this lets React know that changes to these values are imoortant and should trigger a re-render of the component.

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';//this import statement uses two dots to go up a directory in order to access the UI folder


//Passing Data via Props
//Props (short for properties) are variables that are passed into components
//the ExpenseItem component is a functional component that takes in an expense object as a prop, receiving all the properties of the expense object
function ExpenseItem(purchaseData) {
//the data in the props are stored as key/value pairs, so we can access the properties of the object by using the dot notation and calling the key

/*Using a component called ExpenseItem to display each expense in the expense array in App.js 
  The ExpenseItem component should be configurable from outside of the component
  Data should NOT be stored in the component itself, but instead passed in as props */


//useState is a React hook, React hooks start with "use" and must be called within the component function. They should NOT be called outside a component or within a function nested within the component.
//this statement uses array destructuring, a javascript concept that creates an array with any number of variables as elements on the left side of the expression. These variables store the element of the array on the right side of the expression that share the same index.
  const [title, setTitle] = useState(purchaseData.title); //this is a hook that allows us to define a state variable, and set it to a value.
  //the useState funtion returns an array with two elements, the first element is the state variable, and the second element is a function that allows us to update the state variable.

  

  //defining a function to be passed to the onClick event handler
  const onClickHandler = () => {
    setTitle('Updated');//here you're calling the setTitle functiion of the useState hook, and passing in the new value to be set.
    console.log('title');
  }

  //nesting divs allows us to output multiple lines of text without causing errors
  return (//we use className instead of class to assign styling because this is still within jsx and class is a reserved keyword in javascript

    //replacing <div> with <Card> here after using props.children in the Card component applies the styling to the entire contents of the div ON TOP of the styling that the component already has. This effectively makes is work like a built in html wrapper component
    <Card className="expense-item"> 

      <ExpenseDate date={purchaseData.date}/> {/*This is a component that we imported from another file. Elements that don't require any content can be written as self-closing tags*/}
      
      <div className="expense-item__description">
        <h2>{title /*jsx allows you to run basic javascript within the html (only works inside the curly braces)*/}</h2> 
        <div className="expense-item__price">${purchaseData.amount}</div>
      </div>
      {/*placeholder button for demoing changes and States*/}
      <button onClick={onClickHandler} >Change Title</button>{/*in React, events begin with "on" and Event listeners are added inside of the tags instead of at the beginning of the code like it'd be done usually in JS. The Event listeners take a function as an argument so that the code within the function is executed when the Event occurs.
      Make sure to only use the function name without parentheses otherwise the function will execute when the jsx code is returned (which would be too early) and not when the Event is reached. */}
    </Card>
  );
}



export default ExpenseItem;
