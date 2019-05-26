---
ID: 1243
title: 'Git 101 – Step 3: branches'
author: Raymon S
excerpt: ""

slug: 2017/12/git-101-step-3-branches/
published: true
date: 2017-12-12 10:03:07
---
This time we are going to talk about how you can handle branches with Git on the terminal &#x1f680;. For a full explanation check the video &#x1f609;

https://youtu.be/Kf4sjbE-G24
<h2>What is a Git branch?</h2>
A branch is a separate workspace, it’s like a bucket where you can fiddle around without screwing the production application.

You create branches when you are gonna make new functionality or features for your application.

So let’s get started with branches!
<h2>Check your branch</h2>
<strong>Check your branches</strong>

If you want to know on which branch you are currently working? This command will tell you!
```
git branch```
<strong>Update your local branches</strong>

So let's face it! Sometimes your branches are behind of the branches on the remote. So to update this list, use this command.
```
git fetch origin```
<h2>Do something with your branch!</h2>
<strong>Create branch</strong>

Now we want to create a branch, because we want to fiddle around without the code. Pretty easy command. <em>Keep in mind to use "-b" instead of the "-d"!! </em>&#x1f605;<em>, because the "-d" will delete your branch!</em>
```
git checkout -b branch_name```
<strong>Push to a branch</strong>

When you made some changes, staged them and added a commit message, we want to push our branch to the remote. Use this command for it!
```
git push origin branch_name```
<strong>Pull changes from a branch</strong>

When your team member made some change to the same branch you are working on. You can pull those changes from the remote into your local branch with this command.
```
git pull origin branch_name```
<strong>Switch branch</strong>

Sometimes you want to switch to another branch for some reason. Just checkout the other branch with this command.
```
git checkout branch_name```
<strong>Delete local branch</strong>

Be careful with this command! If you didn't pushed the changes in this branch, all the changes will be lost with this command!
```
git branch -d branch_name```
<h2>Do you need some help?</h2>
If your working with Git, but getting stuck? Please let me know in the comments or hit me on twitter <a href="https://twitter.com/frontendmr" target="_blank" rel="noopener">@frontendmr</a> and I would &#x2764;&#xfe0f; to help you out!

Did you liked this post? Please share it around &#x1f64f;
<div class="grammarly-disable-indicator"></div>