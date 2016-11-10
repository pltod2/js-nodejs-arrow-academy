# Introduction 

* As an outcome of this Academy we are going to make a final fullstack JavaScript project. 

* We want to be creative and to make "new generation" social platform for people that participate in IT training academies.

* Our platform should combine in very creative way three major things:

> 1. Users

> 2. Forum like functionality 

> 3. Blogging like functionality

* Our platform must consume a lot of third party APIs. The more integrations the better. 

**HINT: Think on abstract level so you could reuse your integration approach.**

> Slack and Github in order to build the user profiles. 

We assume that Slack is defacto standard for trainee communication and Github is defacto standard for where we put our code. So the trainees already have profiles there and we would like to leverage them in order to build profiles for our platform avoding having to deal with registration forms.

> Ghost (https://ghost.org/) / Medium (https://medium.com/) / Wordpress (https://wordpress.com/)

For blogging functionality we could integrate with services like these so we could get posts from there and put them into our platform

> Discourse (http://www.discourse.org/) / NodeBB (https://nodebb.org/) / Flarum (http://flarum.org/) / Hacker News (https://news.ycombinator.com/)

For forum functionality we could integrate with similar services to get data from there


# Teams 

* We have three teams each of them is led by a Lector

* Each team has a project repository

* Each team member will fork the repo and submit PR request for particular feature 

> **HINT: make sure you do your request in a branch**


# Use Cases 

Here is the minimal set of use cases that must be covered:

## User Management 

We have here User Profile / User Feed (or Wall if you want)

* Login 

* Generate user profiles taking data from Slack and Github and mix it into single profile

* Browse through users 

* Select user to see its details like email / github repos / user feed etc.

## Bloging 

We have here Blog Article / Comments / Likes

* User should be able to publish blog article into its feed

* User must be able to like and comment on another blog article

> when you like the blog article it should appear into the users feed 

## Forum

We have here Category / Topic / Posts 

* User must be able to create discussion categories (e.g. MVC Frameworks)

* User must be able to create topic as part of particular category

* Users must be able to publish posts in particular topic

* User must be able to like posts

> when you like a post it should appear into the users feed 


So that it is. Be creative and feel free to extend these use case as you wish. Check out the mentioned services with which you must integrate for inspiration.


# Completion Criteria

* Have a working project with front-end, http server, and persistent mechanism for the application data.

* Each project must be easely deployable and deployed in the cloud in order to be demonstrated on the Project Exhibition

* The platform should be integrated with at least 4 third party APIs - Slack / Github / One bloging service / One forum service

* Each team member must create and publish at least one npm module that must be used in the platform. So your project should have as many "home made" modules as are the team members excluding the lectors

* Some technical requirements 

> 1) having one scheduled tasks that run in a background to do some repetitive work

> 2) having one integration that reads huge amount of data from third party API so you could play with the event loop management  

* Keeping track of team members contributions (this is mostly for the lectors)

* Do the final presentations in extremely funny way on the Final Project Exhibition


**Everything else beyond these will be considered a plus so you will be closer to the Grand Prize ;)**
