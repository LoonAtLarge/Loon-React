//App.js is our root component and all other components will be nested within App.js
//Components should always return jsx code containing the html code that will be rendered by React
//comments within jsx must be contained within {/* and */} and it must be within the html portion of the code

import React from 'react';
//import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

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
      <p>It is safer to assume that I am exhausted at all times</p>
      

      {/*Elements that don't require any content can be written as self-closing tags (completely optional)*/}
      <Expenses expenses={expenses}/>
    </div>
  );
} //this code takes advantage of jsx which is a custom language (syntax extension) created by the react devs that allows us to code with various syntaxes while scripts within the React package transform the code into something the browser can understand
//https://reactjs.org/docs/introducing-jsx.html

export default App;
