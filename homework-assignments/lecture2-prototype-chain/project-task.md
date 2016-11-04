This is your assignment related with the project.

# Goal 

* Extract the username and email for each person from slack team nodejscourse

* Send all data to a running http express server locally 

* Log the data in the console

# Detailed Instructions

Note that getting data with bots is one way to do it. You can be creative and use slack web app or another approach to achieve the same goal. 

Here are the steps for using bots to solve the problem.


TASK 1. Create express server that has 1 post endpoint which gets POST data and print it in the console where server is started

> How to make post endpoint -> https://expressjs.com/en/guide/routing.html

TASK 2. Create the logic in your express endpoint 

* Here you should just have a function that gets data as its parameter and you log this data.

Something like: 

app.post('/', function (req, res) {
 
    //YOU DATA WOULD BE IN req object just conosole.log it

    res.send('DONE!')
})

TASK 3. Commit this server into your github repo for the final project

> See github documentation -> https://help.github.com/articles/adding-a-file-to-a-repository-using-the-command-line/

TASK 4. Read about Slack Apps in general 

> https://api.slack.com/slack-apps

TASK 5. Read this tutorial to understand how to communicate between the bot and your Express app 

> https://www.sitepoint.com/custom-slackbot-with-node/


TASK 5.1. Create the bot code and start the bots 

Use tokens of the bots created by Vlado

**Please do not post their tokens in github!!!**

If you start the bot it will appear with green dot in front of it. 

You can choose your own command name e.g. exportTeamMembers

TASK 5.2. Write the http request logic to make POST request to the express application

* You can use https://github.com/request/request or https://github.com/visionmedia/superagent or another

TASKS 6. Try out the whole stuff 

* run your express server locally

* run the bot 

* send command to the bot and see if it goes inside bot code and express app endpoint 



# Resources 

Here are the resources for writing slack apps:

## Knowledge Base

* Getting started with Slack apps

> https://slackapi.github.io/node-slack-sdk/

## Tools and Libraries

* Module to help build a custom command-line vocabulary for your bot

> https://www.npmjs.com/package/slack-terminalize

* Slack Developer Kit for Node.js

> https://github.com/slackapi/node-slack-sdk

* Slack Web and RTM API client for Node and the Browser

> https://github.com/smallwins/slack

## Tutorials

*  https://www.sitepoint.com/custom-slackbot-with-node/ 

  