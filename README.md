# donation-tracker
A easy to use and open source donation tracker for speedrunning marathons. Inspired by the GDQ donation tracker but runs in Node. Currently, the tracker is able to collect donations and display them in the console. Work is beginning on the API and backend database. Progress can be tracked on our [projects page](https://github.com/Indiethon/donation-tracker/projects/1). IF you have any suggestions or bugs, please post them in the issue tracker. Thanks!

**This tracker is NOT ready for production yet! It currently is in early development.**

# Help wanted!
This is a big project and I can't do it alone. If you would like to help, please reach out to me on Discord! nicnacnic#5683

More specifically, I would like a front end developer to create the website pages and style them with CSS. Probably going to use React or Vue, idk yet.

# Deploying
*The tracker is still under development, this is subject to change.*

5 steps to success:
- Using Git, clone the repo. `git clone https://github.com/indiethon/donation-tracker.git`
- Install all the dependencies. `npm install`
- Generate the config file. `npm run config`
- Open `config.json` and change desired settings. Make sure to save!
- Start the tracker. `npm start`

# Simple Docs
When creating users or resetting their passwords, the default password is `password`. Each individual user is able to change their own password once they log in. For security reasons, a password from another user cannot be changed through the dashboard. To change another user's password, open the MongoDB database directly through a program (such as MongoDB Compass) or through the command line, find the user, delete the password field, then restart the dashboard. The affected user's password will be reset to the default once the dashboard restarts.
