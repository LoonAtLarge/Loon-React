import ReactDOM from 'react-dom'; //imports some react object from the react-dom package
import React from 'react'; //imports some react object from the react package
//the react and react-dom packages both make up the react library

import './index.css'; //usually this code wouldn't normally run in javascript but there are background scripts that transform the code before delivering it to the browser (the 'npm start' command in the terminal)
import App from './App'; //imports App component (the default export) from the App.js file

//the same thing is happening here because this is jsx syntax but the scripts allow us to write like this
ReactDOM.render(<App />, document.getElementById('root')); //this code is calling the element with the 'root' id from idex.html and replacing it with the contents of 'App' before the rendering it in the browser
