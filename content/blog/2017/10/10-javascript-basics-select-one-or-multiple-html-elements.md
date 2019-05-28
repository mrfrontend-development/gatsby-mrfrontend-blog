---
ID: 1018
title: 'JavaScript basics: Select one or multiple HTML elements'
author: Raymon S
excerpt: "I'm a big fan of learning Vanilla JavaScript instead of jQuery. I want to show how easy the querySelector() and querySelectorAll() are! (video included)."

slug: 2017/10/javascript-basics-select-one-or-multiple-html-elements/
published: true
date: 2017-10-10 16:20:22
---
If you search StackOverflow for selecting HTML elements on a page you will be overloaded by jQuery examples.

Since I’m a bigger fan of learning Vanilla JavaScript to get into JavaScript in general, I want to show you how to do it with the <strong>querySelector()</strong> and <strong>querySelectorAll()</strong>.

The querySelector methods are just that easy as the jQuery selector.

So let’s dive into the code &#x1f44d;

If you are more a fan of reading than watching a video about the <em>querySelector()</em> than scroll down to read it &#x1f609;

https://youtu.be/cLsTHYS7-7A
<h2><b>The querySelector() methods</b></h2>
You can use both the querySelector methods to search for one or more elements via a:

<strong>class</strong>
```
document.querySelector('.class__name')```
<strong>ID</strong>
```
document.querySelector('#ID__name')```
<strong>attribute</strong>
```
document.querySelector('input[type="text"]')```
<strong>data-attribute</strong>
```
document.querySelector('header[data-info="product-header"]')```
The querySelectors work both similar! And if you are familiar with jQuery than you have no problem with this &#x1f44d;
<h2><b>How to select 1 element on the page with JavaScript</b></h2>
To select one single element on a HTML page you need the <em>document.querySelector()</em>! Just put a condition as a parameter and the DOM will be searched for the element.

For example, we want to find the header with a class "<strong>header__main</strong>". (as you maybe notice, I used the <a href="https://blog.mrfrontend.org/2017/10/write-better-css-with-bem/">template from the BEM video</a>).
```
document.querySelector('.header__main')```
The document.querySelector is gonna returns the first element on the page that matches the selector.

The element is a NodeList Object. You can find a lot of information of your element in this Object. For example: style, height, width, classnames, data-attributes, child elements and a whole lot more!

If you want to use the height or width from the element you need to do it like this.
```
var headerElement = document.querySelector('.header__main')
var headerHeight = headerElement.clientHeight;
var headerWidth = headerElement.clientWidth;```
<h2><b>How to get multiple elements on the page</b></h2>
To select multiple elements on a HTML page you need the <em>document.querySelectorAll()</em>! Put your selector in and you will get all the elements.

The document.querySelectorAll is gonna return all the elements on the page that matches the selector as a NodeList Object.

For example, you have a navigation. But in the JavaScript you want to have access to all the &lt;li&gt; elements. Than the querySelectorAll() method comes to the rescue!

<strong>HTML</strong>

```
&lt;nav class=“main-nav”&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Blog&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
```

<strong>JavaScript</strong>

```
var navElements = document.querySelectorAll('.main-nav li');
navElements.forEach(function(navElement) {
  console.log('navElement: ', navElement);
})
```

I discovered that not all the browsers will accept the <strong>forEach()</strong> method on a NodeList Object. So it is saver to choose for the 

<strong>for-loop</strong>.

```
var navElements = document.querySelectorAll('.main-nav li');

for (var i = 0; i &lt; navElements.length; i++) {
  console.log('navElements[i]: ', navElements[i].clientHeight);
}
```

This NodeList Object looks similar to an Array, but there is a difference. Read on Quora what the <a href="https://www.quora.com/What-is-the-difference-between-a-NodeList-and-an-Array" target="_blank" rel="noopener">difference is between a NodeList Object and an Array</a>.

If you need any help or have questions about the querySelector, please let me know so I can help you out! You can put your answer in the comments, or just register for our open <a href="https://www.facebook.com/groups/mrfrontendgroup/" target="_blank" rel="noopener">Facebook Group community</a>!

<script src="//widget.manychat.com/493241460881733.js" async="async">
</script>
<div class="mcwidget-embed" data-widget-id="528016"></div>
<h2>Follow us on:</h2>
Follow us on Medium: <a href="https://medium.com/mr-frontend-community" data-href="https://medium.com/mr-frontend-community">https://medium.com/mr-frontend-community
</a>Follow us on Twitter: <a href="https://twitter.com/frontendmr" data-href="https://twitter.com/frontendmr">https://twitter.com/frontendmr
</a>Follow us on Facebook: <a href="http://facebook.com/mrfrontendcommunity/" data-href="http://facebook.com/mrfrontendcommunity/">http://facebook.com/mrfrontendcommunity/</a>
Follow us on Instagram: <a href="http://instagram.com/mrfrontend" data-href="http://instagram.com/mrfrontend">@mrfrontend</a>