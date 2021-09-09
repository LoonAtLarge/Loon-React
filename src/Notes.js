/*
    jsx allows you to run basic javascript within the html (only works inside the curly braces)

    Components in React are just Javascript funtions, they are unique because they can use and return jsx code. React must be imported to the component in order to use jsx.

    Components should always return jsx code containing the html code that will be rendered by React

    Elements that don't require any content can be written as self-closing tags (completely optional)

    comments within jsx must be contained within {css comment syntax} and it must be within the html portion of the code

    jsx is a custom language (syntax extension) created by the react devs that allows us to code with various syntaxes while scripts within the React package transform the code into something the browser can understand
    https://reactjs.org/docs/introducing-jsx.html

    Passing Data via Props
    Props (short for properties) are variables that are passed into components
    props are used to pass data from parent to child components
    example: 
    function Expenses(props) {

        return( 
    <Card className="expenses">
        {props.expenses.map(e=>(<ExpenseItem title={e.title} amount={e.amount} date={e.date}/>))}
    </Card>
    );
    
    }

    nesting divs allows us to output multiple lines of text without causing errors

    className is a special attribute that allows us to add classes to elements in jsx since class is a reserved keyword in js

    the .map() function allows you to iterate through an array of data (with the e=>). Here, we use it to loop through the expenses array in App.js that is within the props


    a "Card" is a component containing the styles shared by a group of components

    by replacing the div in another component with access to Card.js with this custom component (after taking the steps detailed in comments below) the css is applied automatically to all the content within your new custom <Card> tags

    using Cards in this way, you can store all the shared styling that your components have in a Card component and avoid duplicate code

    props.children is a reserved keyword that is implicitly passed to the component whenever props is called. The value of this special children prop is the content between the opening and closing tags of your custom component. Calling it explicitly here as the content of the div makes it so that when you use your custom component as a wrapper, it's css is applied to the content it contains
    The css already on the content however will not take effect because the custom component does not support class names like a built in html tag does, you'll have to code in that functionailty yourself
    Example:
    function Card(props) {

    const classes = 'card ' + props.className;
    return <div className= {classes} > {props.children} </div>;

    }

    when importing a file you can use ./ to indicate that the file being imported is within the same directory as the file you are currently in. each '.' you add is another directory up from the current directory.
    Example:
    import './ExpenseItem.css';
    import Card from '../UI/Card';
    import Filename from '.../src/Filename';

*/