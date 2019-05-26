---
ID: 1145
title: >
  Introduction to SSR with NextJS and
  NuxtJS
author: Raymon S
excerpt: ""

slug: 2017/11/introduction-ssr-nextjs-nodejs-reactjs-nuxtjs-vuejs/
published: true
date: 2017-11-14 15:11:12
---
At the moment there is a lot talking about SSR (Serverside rendering) applications. SSR is most used in combination with frameworks like React or Vue. For React there is NextJS and VueJS has NuxtJS.

Check my experiment with the new Mr Frontend Blog with NextJS and the WordPress API!

https://youtu.be/7N6PaO7UnvA

So no JavaScript teaching today, but an introduction to <a href="https://zeit.co/blog/next2" target="_blank" rel="noopener">NextJS</a>!
<h2>NextJS</h2>
[embed]https://res.cloudinary.com/zeit-inc/video/upload/front/blog/next.js/hello-world_2.mp4[/embed]

NextJS is a JavaScript framework for NodeJS, build on top of React. NextJS is super easy to use!

Most people know and use React as a client-side application. But with NextJS all the React Components are rendered by NodeJS on the server and then served to the browser. With client-side rendering, the browser downloads the JavaScript and other assets and then renders the view when that is finished.
<h2>SSR &amp; CSR</h2>
SSR and CSR have both pros and cons, explained in the "<a href="https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8" target="_blank" rel="noopener"><strong>The Benefits of Server Side Rendering Over Client Side Rendering</strong></a>".

At the moment I'm experimenting with NextJS and using the <a href="http://nextblog.herokuapp.com" target="_blank" rel="noopener">WordPress API on Heroku, to experiment with a new design for the Mr Frontend Blog</a>. If you want to try it out for free on Heroku, please check out this starter project on <a href="https://github.com/mars/heroku-nextjs" target="_blank" rel="noopener">Github for running NextJS on Heroku</a>.
<h2>NuxtJS</h2>
If you prefer VueJS more than React, please checkout <a href="https://nuxtjs.org" target="_blank" rel="noopener">NuxtJS</a>. NuxtJS is similar to NextJS, both are rendering their components serverside with NodeJS. I didn't try NuxtJS, but it looks almost as awesome as NextJS. Maybe I will try it later &#x1f60e;
<h2>What do you think about it?</h2>
I'm wondering what you think about SSR or CSR and both the pros and cons. Or do you see something usefull for NextJS or NuxtJS?

Please let me know in the comments &#x1f609;