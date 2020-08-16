# Friendo

## Want to learn

We want to consolidate and learn the following technologies through making this project:

* React native
* React Hooks
* node-postgres

## Overview

Our goal is to create a social media platform that matches people based on similarities/activities/location. With the end intention of users finding new friends easily.

## MVP

* Account creation/customisation (handle cookies)
  * Upload pictures
* Different sign up and log in views
* Create/join activities
* Filter/search based on:
  * users
  * interests/activity
* Contact list
  * add contact

## Extensions

* Location co-ordinates linked to activities to pin on map
* Private chat
* Public forum/comments section
* Ability to add activity photos
* Reactive styling on app state
* Activity time limiting
* Be able to rate user/experience based on different ratings categories (blacklisting?)




# Project Setup Checklist

1. Create `project_name` folder. 
```
mkdir project_name
```
2. Git init
```
cd project_name
git init
```
3. Create .gitignore
```
touch .gitignore
```
4. Add the following to .gitignore
```
client/node_modules/
server/node_modules/
```

## Front-End `/client`

5. Create `client` folder with React Native
```
npx react-native init client
```

6. Create services folder and ProjectService.js

```
cd client
mkdir /services
touch /services/ProjectService.js
```

7. Install Watchman
  
```
brew install watchman
```

8. Install Xcode & CocoaPods

Install Xcode via the Mac App Store.

Install CocoaPods with:

```
sudo gem install cocoapods
```

## Back-End `/server`

9. On `/project_name`,
create `server` folder. 

```
mkdir server
```
10. Initiate `server`

```
cd server
npm init -y
```

11. Create `db` and `helpers` folders within `server` plus `server.js`
```
mkdir db helpers
touch server.js
```

12. Create `seeds.js` and `create_routers.js` inside `db` and `helpers`

```
touch db/seeds.js helpers/create_routers.js
```

13. Install nodemon
```
npm install -D nodemon
```

14. Install express, node-postgres and cors
```
npm install express pg cors
```

15. Add the following to /server/package.json

```
"scripts": {
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "server:dev": "nodemon server.js",
    "seeds": "pg < ./db/seeds.js"
  },
```


## Start Servers

### Server

16. Run express:

```
npm run server:dev
```

### Client

17. Run client server
    
```
npm run ios
```


# Git Commands

## Git Commits

```
gaa
gcmsg "Commit Message"
```

## Push & Pull

```
git push origin branch_name
```
```
git pull origin branch_name
```

## Branching
Create branch:

```
git checkout -b branch_name
```

Switch to branch:

```
git checkout branch_name
```

Delete branch:
```
git checkout -d branch_name
```

## Merging

0. Commit & Push last changes on child_branch:
```
gaa
gcmsg "Last changes"
git push origin child_branch
```
1. Checkout the parent_branch and pull:
```
git checkout parent_branch
git pull origin parent_branch
```
2. Go back to child_branch and pull:
```
git checkout child_branch
git pull origin child_branch
```
3. From child_branch, merge with parent_branch:
```
git merge parent_branch
gaa
gcmsg "Merged with parent_branch"
git push origin child_branch
```
4. Switch back to parent_branch:
```
git checkout parent_branch
git pull origin parent_branch
```
5. From parent_branch, merge with child_branch:
```
git merge child_branch
gaa
gcmsg "Merged with child_branch"
git push origin parent_branch
```




