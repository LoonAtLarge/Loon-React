//App.js is our root component and all other components will be nested within App.js
//comments within jsx must be contained within {/* and */}

import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {id: 'g1', title: 'Battlefield V Definitive Edition', amount: 5.42, date: '2021-08-27'},
    {id: 'g2', title: 'Tom Clancy\'s Rainbow Six Siege', amount: 21.71, date: '2021-08-16'},
    {id: 'g3', title: 'RUINER', amount: 4.33, date: '2021-06-26'},
    {id: 'g4', title: 'Monster Prom 2: Monster Camp', amount: 9.77, date: '2021-06-26'},
  ];

  return (
    //this is html syntax and wouldn't normally work here in a javascript file
    <div>
      <h2>Loon's Game Expense Tracker</h2>
      <p>Voracious reader, wannabe writer, middling gamer, insecure programmer, exhausted person</p>
      {/*we are using a component called ExpenseItem to display each expense in the array
        The ExpenseItem component should be configurable from outside of the component
        Data should NOT be stored in the component itself, but instead passed in as props
      */}

      {/*Elements that don't require any content can be written as self-closing tags (completely optional)*/}
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
} //this code takes advantage of jsx which is a custom language (syntax extension) created by the react devs that allows us to code with various syntaxes while scripts within the React package transform the code into something the browser can understand
//https://reactjs.org/docs/introducing-jsx.html

export default App;
