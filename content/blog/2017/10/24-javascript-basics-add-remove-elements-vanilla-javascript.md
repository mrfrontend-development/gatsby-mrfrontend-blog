---
ID: 1068
title: 'JavaScript basics: How to add and remove elements with Vanilla JavaScript'
author: Raymon S
excerpt: 'This time we are going to add and remove HTML elements to our page with Vanilla JavaScript. With the createElement, createTextNode & removeChild.'

slug: 2017/10/javascript-basics-add-remove-elements-vanilla-javascript/
published: true
date: 2017-10-24 12:46:04
---
&nbsp;

In the previous videos and blogs, I showed you a couple of things with <a href="https://blog.mrfrontend.org/2017/10/javascript-basics-select-one-or-multiple-html-elements/" target="_blank" rel="noopener">getting 1 or more HTML elements via Vanilla JavaScript.</a> This time we are going to add and remove HTML elements to our page with Vanilla JavaScript. We are gonna use the createElement, createTextNode, appendChild &amp; removeChild methods for it.

If your not a video person, please scroll down for the written version &#x1f609;

https://www.youtube.com/watch?v=ENTuadZmDJ8&feature=youtu.be
<h2>Add element to body</h2>
First, let’s add an HTML element to our page via Vanilla JavaScript.

You create an element with the method <code>createElement</code>. Then create a text inside of it with the method<code>createTextNode</code>.

Combine them with the method <code>appendChild</code>. After that, use the same method to add the div to the body.

Check the example code below!

<strong>HTML</strong>
```
&lt;div id="wrapper"&gt;&lt;span&gt;Mr Frontend&lt;/span&gt; does JavaScript&lt;/div&gt;```
<strong>JavaScript</strong>
```
var divElement = document.createElement('div');

var divText = document.createTextNode('Mr Frontend');

divElement.appendChild(divText);

document.querySelector('body').appendChild(divElement);```
If you want to see this code working, please check the <a class="jsbin-embed" href="http://jsbin.com/busocuh/2/embed?html,js,output">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?4.1.0"></script>
<h2>Add element to parent div</h2>
If you want to add a new element to an already existing element than you have to target that element instead of the body.

Check the example code below!

<strong>JavaScript</strong>
```
var divElement = document.createElement('div');

var divText = document.createTextNode('Mr Frontend');

divElement.appendChild(divText);

document.querySelector('#wrapper').appendChild(divElement);
```
If you want to see this code working, please check the <a class="jsbin-embed" href="http://jsbin.com/vidoroc/2/embed?html,js,output">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?4.1.0"></script>
<h2>Remove element</h2>
We also want to remove some HTML elements from our page.

It works very simple. Just target a parent element or the body, then use the method<code>removeChild</code> to remove your HTML element.

Check the example code below!

<strong>HTML</strong>
```
&lt;div id="wrapper"&gt;&lt;span class="mrfrontend"&gt;Mr Frontend&lt;/span&gt; does JavaScript&lt;/div&gt;```
<strong>JavaScript</strong>
```
var paragraph1 = document.querySelector('#p1'); 
var divElement = document.querySelector('#div1'); 

divElement.removeChild(paragraph1);
```
If you want to see this code working, please check the <a class="jsbin-embed" href="http://jsbin.com/nowulit/2/embed?html,js,output">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?4.1.0"></script>
<h2>Resources W3Schools</h2>
<ul>
 	<li><a href="https://www.w3schools.com/jsref/met_document_createtextnode.asp">createTextNode</a></li>
 	<li><a href="https://www.w3schools.com/jsref/met_document_createelement.asp">createElement</a></li>
 	<li><a href="https://www.w3schools.com/jsref/met_node_appendchild.asp">appendChild</a></li>
 	<li><a href="https://www.w3schools.com/jsref/met_node_removechild.asp">removeChild</a></li>
</ul>
<h2><b>Do you need help?</b></h2>
My question for you to answer in the comments, how did you created new elements or removed HTML elements from your page in Vanilla JavaScript? Share it with me! And if you need any help, please let me know &#x1f60a;