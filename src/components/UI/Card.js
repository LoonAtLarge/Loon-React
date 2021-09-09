import React from "react";
import './Card.css';

//a "Card" is a component containing the styles shared by a group of components
//by replacing the div in another component with access to Card.js with this custom component (after taking the steps detailed in comments below) the css is applied automatically to all the content within your new custom <Card> tags
//using Cards in this way, you can store all the shared styling that your components have in a Card component and avoid duplicate code

function Card(props) {

    //props.children is a reserved keyword that is implicitly passed to the component whenever props is called. The value of this special children prop is the content between the opening and closing tags of your custom component. Calling it explicitly here as the content of the div makes it so that when you use your custom component as a wrapper, it's css is applied to the content it contains
    //The css already on the cntent however will not take effect because the custom component does not support class names like a built in html tag does, you'll have to code in that functionailty yourself (as seen below).
    const classes = 'card ' + props.className;
    return <div className= {classes} > {props.children} </div>;

}

export default Card;