---
ID: 1211
title: 'Git 101 &#8211; Step 2: add, stage, commit &#038; push'
author: Raymon S
excerpt:   In this video I show you how you can
  manage your changes, commit them and
  eventually push them to Github. I
  created a video so you can follow along!

slug: 2017/12/git-101-step-2-add-stage-commit-push/
published: true
date: 2017-12-05 22:35:11
---
In the <a href="https://blog.mrfrontend.org/2017/11/git-101-step-1-setup-create-repo-local-and-remote-repository/">previous post I gave a introduction about Git</a> and how to install it. In this video I show you how you can manage your changes, commit them and eventually push them to Github.

Don't wait any longer! Let's dive in! &#x1f525;

https://youtu.be/t-V1CYaPI1M

In order to get your files on Github, we need to add a remote to the local Git repository.
<h2>Add remote</h2>
You can add a remote by this command.
```
git remote add origin http://yourGithubURL
```
In this case is `origin` the name of the remote. But we can name it whatever we like.

It is even possible to have multiple remotes. Just give it a other name, `github` or `secondremote` for example.
<h2>Readme file</h2>
Every repository needs to have proper README.md file. So you can include all the details to install your project.

The file extention "md" stands for Markdown. Markdown is a minimalistic way of writing and adding styling on a very easy way.

Github has created a <a href="https://guides.github.com/features/mastering-markdown/" target="_blank" rel="noopener">guide to tell you everything about Markdown</a> and how to use it.
<h2>Check local changes</h2>
For example we made some changes to our <a href="https://github.com/raymonschouwenaar/git-demo-project" target="_blank" rel="noopener">Git repository</a>. But if we want to see all the changes we have to ask Git for the status. You can do that by this command.
```
git status
```
Then git will show you the files that are changed, removed or created. But also the files that are staged or not staged yet.

This example is from another project, but shows you how it looks!

[caption id="attachment_1218" align="alignnone" width="1024"]<img class="size-large wp-image-1218" src="https://blog.mrfrontend.org/wp-content/uploads/2017/12/git-status-example-1024x380.png" alt="Git status result example" width="1024" height="380" /> <em>This is a example of the result that `git status` will return.</em>[/caption]
<h2>Stage files</h2>
But after making a change and checking it, we have to prepare the changes, so we can bind it to a commit.
```
git add .
```
Is staging all the files.

If we want to do a specific file, we need to use this command.
```
git add foldername/filename.js
```
<h2>Commit files</h2>
No we can finally add a commit message to our files. For that we use:
```
git commit -m "This is our commit message"```
Now all our staged changes are bind to this commit.
<h2>Push files to remote master</h2>
After doing a commit you can push that commit to the remote repo.

I would recommend it! But it is possible to continue with making changes and making more commits, and in the end push everything. But it's more safe to do it more often.

To push your changes to the remote repository we have to use this command.
```
git push origin master```
In this case "origin" is the name of our remote and "master" is the default branch where we are working on. Next time I will show you more about branches.

So now all our changes are safe in Github &#x1f44d;
<h2>Do you need help?</h2>
I hope this second episode/blog helped you with getting your changes to Github (or any other remote repository). If you need any help, please let me know in the comments! I would ❤️ to help you out!
<div class="grammarly-disable-indicator"></div>
<div class="grammarly-disable-indicator"></div>