---
ID: 1192
title: 'Git 101 &#8211; Step 1: setup, create repo local and remote repository'
author: Raymon S
excerpt: "Want to publish your project on Github, Bitbucket or Gitlab! In this Git 101 series I will help you achieve this. &#x1f680; let's get started! &#x1f525;"

slug: 2017/11/git-101-step-1-setup-create-repo-local-and-remote-repository/
published: true
date: 2017-11-28 22:25:45
---
If you never used Git it can be hard to start. With this series of blogs and video’s, I want to help you get started. We are gonna start on the terminal! If you're not used to the terminal (some call it command line), I do my best to show you it is not scary!

Let’s get started with Git &#x1f680;&#x1f525;

If you prefer reading over watching a video? Scroll down, below the video, everything is written down.

https://www.youtube.com/watch?v=hFi0hUnvr0s
<h2>What is Git?</h2>
Git is nowadays the way to keep your projects save! Your own small project or the projects of big teams inside companies.

A short version of the explanation is, Git will keep track of all the changes of your project. It will show who did make a change, what is changed and when it changed.

You can always go back to an earlier state of the code if you want to.

Git is not only suitable for programming projects, but also very suitable for other types of files. Design files for example!
<h2>Install Git</h2>
First, we have to install Git in order to use it. Git is available for Windows, Mac and Linux.

Go to the <a href="https://git-scm.com" target="_blank" rel="noopener">Git website and download</a> the version for your OS.

If you have any problems with the installation, please let me know in the comments or hit me on Twitter or Instagram DM.
<h3>Setup your git credentials</h3>
In order to get your name and email right with every commit you do. You need to set the git name and git email.

<strong>Set your git user.name</strong>

Open the terminal and type `git config --global user.name “Your Name”` to set the name you will be using on your machine for Git. If you remove the `—global` option, then this name will only be set in that repository you are in.

You can check it with `git config user.name` command. If you did it right, your name will appear.

<strong>Set your git user.email</strong>

Open the terminal and type `git config --global user.email your@email.com` to set the name you will be using on your machine for Git. If you remove the `—global` option, then this name will only be set in that repository you are in.

You can check it with `git config user.email` command. If you did it right, your email will appear.

<strong>Setting your git password</strong>

Your password can’t be set in the same way. When you push your changes to a remote repository, your password will be asked in the terminal.

But if you don’t like to type it every time you push your changes then use a helper.

For windows: `git config --global credential.helper wincred`
For Mac: `git config --global credential.helper osxkeychain`
For Linux: `git config --global credential.helper cache`

Read some more tips on the <a href="https://help.github.com/articles/caching-your-github-password-in-git/#platform-all" target="_blank" rel="noopener">Github documentation website</a>.
<h2>Start a Git project</h2>
There are few ways to start a project with Git.

1. Start with initializing Git in a local folder on your computer
2. Create a new project on Github, Bitbucket, Gitlab or any other company that is hosting Git repositories.
<h3>Create a Git project locally</h3>
Let’s start with initializing Git in a local folder on your computer.

Open the terminal and type `git init` and hit enter.

With this command, there will be a hidden `.git/` folder. In this folder, all your changes will be saved. Eventually also all the changes others will make to this repository if you pull those changes. But `git pull` will be in another episode.
<h3>Create a Git project on Github, Bitbucket, Gitlab or somewhere else</h3>
It is also possible to start your project with creating the repository remotely. Remote is the external service/company that is hosting your Git repository on a server.

Github is the most popular for a large amount of opensource projects. Bitbucket is most used by people who want to keep there code private or bigger companies that are also using other Atlassian software. Gitlab is a newer service, but I heard good sounds about it.

Offcourse there are a lot more or you can host your own. But your codebase should be somewhere on a server where it is safe! You can get a copy of the whole repository by typing `git clone` followed by the git-repository-url.

<strong>Like this for example:</strong>
`git clone https://github.com/raymonschouwenaar/git-demo-project` or if you want to decide the name of the folder, then add the folder name after the url. `git clone https://github.com/raymonschouwenaar/git-demo-project project-name`

In my video, I showed you how to create a repository on Github. So check it out if you don’t know how to do it.
<h2>Do you need help?</h2>
I hope this first episode/blog helped you setting up Git and gave you a little introduction to using it. If you need any help, please let me know in the comments! I would ❤️ to help you out!
<div class="grammarly-disable-indicator"></div>
<div class="grammarly-disable-indicator"></div>
<div class="grammarly-disable-indicator"></div>
<div class="grammarly-disable-indicator"></div>