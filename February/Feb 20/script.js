// event.preventDefault()

       //It helps to ignore the default behavior of form tag.

       //The preventDefault() method cancels the event if it is cancelable, meaning that the default action 
//that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit"
// button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.


//Stop Propogation:-
// The stopPropagation() method prevents propagation of the same event from being called.

// Propagation means bubbling up to parent elements or capturing down to child elements.



// stopImmediatePropagation()

// The stopImmediatePropagation() method prevents other listeners of the same event from being called.
//When clicking on a button, execute the first event handler, and stop the rest of the event handlers from being executed:



//--------------------------------------------------------------------------------------------------------------------------------------------------

// CSS Selectors

// CSS selectors are used to "find" (or select) the HTML elements you want to style.

// We can divide CSS selectors into five categories:

// * Simple selectors (select elements based on name, id, class)
// * Combinator selectors (select elements based on a specific relationship between them)
// * Pseudo-class selectors (select elements based on a certain state)
// * Pseudo-elements selectors (select and style a part of an element)
// * Attribute selectors (select elements based on an attribute or attribute value)


// Combinator selectors 
//A combinator is something that explains the relationship between the selectors.
// A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.


// There are four different combinators in CSS:

// * descendant selector (space)
// * child selector (>)
// * adjacent sibling selector (+)
// * general sibling selector (~)

// Descendant Selector
// The descendant selector matches all elements that are descendants of a specified element.

// The following example selects all <p> elements inside <div> elements: 

// div p {
//   background-color: yellow;
// }


// Child Selector (>)
// The child selector selects all elements that are the children of a specified element.

// The following example selects all <p> elements that are children of a <div> element:

// div > p {
//   background-color: yellow;
// }


// Adjacent Sibling Selector (+)
// The adjacent sibling selector is used to select an element that is directly after another specific element.

// Sibling elements must have the same parent element, and "adjacent" means "immediately following".

// The following example selects the first <p> element that are placed immediately after <div> elements:


// div + p {
//   background-color: yellow;
// }



// General Sibling Selector (~)
// The general sibling selector selects all elements that are next siblings of a specified element.

// The following example selects all <p> elements that are next siblings of <div> elements: 


// div ~ p {
//   background-color: yellow;
// }


// Pseudo-class selectors:-

// A pseudo-class is used to define a special state of an element.

// For example, it can be used to:

// Style an element when a user mouses over it
// Style visited and unvisited links differently
// Style an element when it gets focus
