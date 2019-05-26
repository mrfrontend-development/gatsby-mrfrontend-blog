---
ID: 1266
title: "Git 101 - STEP 4: merging branches, merge conflicts &amp; cherry-pick"
author: Raymon S
excerpt: ""
slug: "2017/12/git-101-step-4-merging-branches-merge-conflicts-cherry-pick"
published: true
date: 2017-12-20 09:46:17
---
Today I want to show you how easy it is to merging branches, fix a merge  conflict and how to use cherry-pick to get any commit your local branch!

Let's get fired up and hit the terminal &#x1f525;

<em>In the video, I show you everything that I know. Below the video, you can check the notes with all the commands you need.</em>

https://youtu.be/BTIyMEOOPEQ
<h2>1 Git pull a different branch into current branch!</h2>
Make sure your both branches are up to date on the remote!
```
git merge tryout```
Now you can test if your code still works! If it works it push it to the remote!
<h2>2 After successfully merged, delete another branch</h2>
Use the following command like we talked about in the previous video, to delete the branch.
```
git branch -d tryout```
<h2>3 What if you get a merge conflict?</h2>
Sometimes it happens that someone else changed the same row as you did. When you pull the remote you will get a merge conflict.

The easiest way to fix this is just manually by checking your code. After you fixed it, commit this change and push it to the remote!
<h2>4 What if you want to have a specific commit change from another branch?</h2>
This is what we called cherrypicking. With cherry-pick you can pick the commit you want, to pull it into your local branch where your working on.

Just find the commit id and just this command.
```
git cherry-pick commitId```
<h2>Do you need some help?</h2>
If your working with Git, but getting stuck? Please let me know in the comments or hit me on twitter <a class="no-ajaxy" href="https://twitter.com/frontendmr" target="_blank" rel="noopener">@frontendmr</a> and I would &#x2764;&#xfe0f; to help you out!

Did you liked this post? Please share it around &#x1f64f;
<div class="grammarly-disable-indicator"></div>
<div class="grammarly-disable-indicator"></div>
<div class="grammarly-disable-indicator"></div>