# Project Creation Checklist

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
npm run podInstall
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
npm start
npm run ios
```