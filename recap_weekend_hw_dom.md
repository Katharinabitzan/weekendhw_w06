# Weekend Homework Recap: DOM

1. What is the return value of `document.createElement`? And what does it accept as an argument?

It takes an HTML element eg. div, li, as an argument and returns a NodeElement object that is created of that element. 


2. What is the return value of `document.querySelector`? And what does is accept as an argument?

'document.querySelector' takes a CSS selector as an argument, and returns that object which is referred to by the selector. It is a NodeList object, and always the first one identified is returned. If no matches are found it returns null.

3. What is the return value `document.querySelectorAll`?

It takes a CSS selector as an argument and returns NodeElement objects of all the matches to the selector.

4. What is the difference between using `textContent` and `appendChild`?

'textContent' accesses the objects textContent attribute and directly edits it, similar to how attr_accessors work in Ruby. 'appendChild' attaches an element to an existing HTML element as its child. Without appendChild, it wont appear on screen.

5. What is the event we handle to access the values of a form, and how do we access the values?

The event is the 'submit' button, and we access the values of the form by using the form CSS selector. To access each value, we pass the whole form into a function and use the name values of the form to edit the object (instead of using textContent for example.)
