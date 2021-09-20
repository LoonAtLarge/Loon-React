/*
    jsx allows you to run basic javascript within the html (only works inside the curly braces)

    Components in React are just Javascript funtions, they are unique because they can use and return jsx code. React must be imported to the component in order to use jsx.

    Components should always return jsx code containing the html code that will be rendered by React

    Elements that don't require any content can be written as self-closing tags (completely optional)

    comments within jsx must be contained within {css comment syntax} and it must be within the html portion of the code

    jsx is a custom language (syntax extension) created by the react devs that allows us to code with various syntaxes while scripts within the React package transform the code into something the browser can understand
    https://reactjs.org/docs/introducing-jsx.html


    PROPS:
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


    CARD COMPONENT:
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

    Components can also be written using arrow function syntax. Right now it serves no benefit so it's up to personal preference
    Learn more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    Example:
                const Card = (props) => {

                const classes = 'card ' + props.className;
                return <div className= {classes} > {props.children} </div>;

                }

    
    EVENTS & STATES:
    React works by treating each component as a funtion and executing the code within that function whenever it is rendered. If a component calls another component, React is made aware of that component's existence and will call it whenever it is rendered. React will repeat this process until there are no more components to render.
    The problem with this is that it's not very efficient. React is designed to be efficient and will only render the components that are needed to display the current state of the application. In short, React will render only once. To deal with this, we must use Events and States. Events will trigger a re-render of the components and the page will be updated to match the current state of the application.


    useState is a React hook, React hooks start with "use" and must be called within the component function. They should NOT be called outside a component or within a function nested within the component.This is a hook that allows us to define a state variable, and set it to a value.

    The useState function returns an array with two elements, the first element is the state variable, and the second element is a function that allows us to update the state variable.

    The State variable that is created via useState is unique for each instance of the component, so updates to the state variable will only effect the component instance in which it is updated. Even though it looks like the entire page is being refreshed React will only update the component that has the state variable that is being updated.

    The props can be updated with useState even thought they are declared as const variables because they are not updated using declarative syntax (=). Instead they are updated using the setState() function of the useState hook which changes the value of the initial declaration. When the component is then re-rendered, the new value of the prop will be displayed.

    The useState hook is only executed the first time the component is rendered after the Event is triggered. If the component is re-rendered, the hook will not be executed again unless a new State change is detected. In short, React will always render the latest State and it's values.

    ARRAY DESTRUCTURING:
    Array destructuring is a javascript concept that creates an array with any number of variables as elements on the left side of the expression. These variables store the element of the array on the right side of the expression that share the same index.
    Example:
    const x = [1, 2, 3, 4, 5];
    const [y, z] = x;
    console.log(y); // 1
    console.log(z); // 2

    Example 2:
    const [firstElement, secondElement] = list;
    // is equivalent to:
    // const firstElement = list[0];
    // const secondElement = list[1];


*/