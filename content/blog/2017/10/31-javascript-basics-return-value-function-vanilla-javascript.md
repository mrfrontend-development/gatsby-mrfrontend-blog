---
ID: 1092
title: 'JavaScript Basics: How to return a value from a function in Vanilla JavaScript'
author: Raymon S
excerpt:   I want to talk what a return statement
  does and how you can return a value from
  a function in Vanilla JavaScript.

slug: 2017/10/javascript-basics-return-value-function-vanilla-javascript/
published: true
date: 2017-10-31 11:56:24
---
This time I want to talk what a return statement does and how you can return a value from a function in Vanilla JavaScript.

If you don’t like to watch a video, then scroll down for reading (almost) everything I said in the video.

https://youtu.be/CXScWfSd-9Y

Let’s start with creating a simple multiply function in Vanilla JavaScript.
```
function getMultiply(numberParam) {
   console.log('Multiply', numberParam * numberParam);
}```
We can call it with:
```
getMultiply(7);```
So now this function will multiply the number 7. But we can’t do anything with the outcome of it.
<h2>Return a value from the function</h2>
Let’s bring in the return statement.
```
function getMultiply(numberParam) {
   return numberParam * numberParam;
}```
Now we have to call the function in the console.log to see the outcome.
```
console.log(getMultiply(7));```
If we put this function into a variable, we have the outcome stored inside of it!

With the return statement, you can put anything out of the function.

If you want to return true, false or an Object or Array.
<h2>How do you use the return statement?</h2>
If you have another way of using the statement <code>return</code>? Please share it in the comments!&#x1f64f; But if you have any problems with returning a value out of a JavaScript function? Please let me help you, post your question in the comments!