# Rest-API-Project

## OverView

> In this project I will be building A full fledged API backend using nodejs, express, and mongodb

> the entire process will be devided into multiple stages of development. The commits will also be ordered by them.

## Features
- Follows MVC Structure
- Uses MongoDB Atlas, NodeJS
- CRUD implementation
- Global error handling
- Filtering through query parameters
- Sorting through query parameters
- limiting fields through query parameters


# Deployment and Documentation

> Use the live link to send the api request to the server
> - if you are testing it on local environment then this would be the root address for api requests
> - Live Link: https://rest-api-project-production.up.railway.app

> check out the documentation to know more about the Endpoints in this api
> note - documentation is of production env. so whatever api request link is there, should work fine
> - https://documenter.getpostman.com/view/29937505/2s9YJW5RP7 


<br/>
<hr/>
<br/>

## Development Phase
> ### Phase - 01 📈

- #### Stage 1:
- [X] Inital setup & initialization project with npm and modules 
- [X] create a basic api server with one or two end points without using express
- [x] create a same server using express
- [x] Perform CRUD operations on express

- [x] Completed 

- #### Stage 2: 
- [x] decide API context and use case (decision Job related api)
- [X] Create project folders
- [x] follow MVC design pattern
- [x] Create MongoDB database
- [x] integrate '.env' file and mongodb configuration and conect to database
- [x] create database schema and models
  - - [x] implemented and tested job schema on mongo atlas db(online);
- [x] perform CRUD operations on database
- [x] Build multiple endpoints 

- #### Stage 3:
- [x] restructure code base
- [x] create documentation
- [x] host on live server.
- [x] Wrapup phase-1 development. next phase will start latter

- [x] restructure code base and Readme

> ### Phase 02 📈

- #### Stage 2.1
- [ ] Working on Aggregation concept
- [x] Error handling 
-- [x] error handling classes
- [x] Advance filterning Features
  -- Now can search job through query parameters  
- [ ] 

<br/>
<hr/>
<br/>

## Running the Projec

- steps to follow

> Clone the repository

```bash
git clone https://github.com/Akashay-Anand/Rest-API-Project.git
```

> move into the repository
```bash
cd "Rest-API-Project"
```

> [Note] Do setup environment variables as per your local configuration/database
```bash
// .env example file

PORT = 8080
dbDriver = http://localhost:8080 // if using Atlas online replace it here
add other variables if needed
``` 

> Install dependencies
```bash
npm install
```

> start server // like in this project server.js is our executable file
```bash
nomemon server.js
```

> Now your server may start working properly. So we you can test it through its endpoint
>
> either you can use online platform or tools like postman for this 
>
> for endpoints checkout the documentation.
- https://documenter.getpostman.com/view/29937505/2s9YJW5RP7 

## Dependencies

```bash
  "dependencies": {
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.5.2",
    "nodemon": "^3.0.1",
    "slugify": "^1.6.6",
    "validator": "^13.11.0"
  }
```

<br/>
<hr/>
<br/>


### Folder structure

> files which are not part of this Project
> - simple_http_api.js , simple_express_api.js , database.js , basics.md ...

[ note ] apart from the above file, rest of the files and folder may contain code related to this project.

> Folders details

- config > contains configuration file. i.e: environment variables , .env , etc

- routes > routes will contains all route path 

- models > this will contain database model and schema

- controllers > holds resopnse for routes

- Utils > contains supportive methods/features 

# Documentation for Help

- https://expressjs.com/en/starter/basic-routing.html
- https://expressjs.com/en/guide/routing.html
- https://expressjs.com/en/guide/using-middleware.html
- https://www.geeksforgeeks.org/express-js/

<br/>
<br/>
<hr/>

## Remarks By Anand

- well never know building api without using any framework is that much lengthy, well after working on **'simple_http_api.js'** I realize that... Kudos to people who build these modules/framework 🧑🏻‍💻✌🏻🤖

- Now I have writen Simple API in both http (simple_http_api.js) and ExpressJS (simple_express_api.js) ;
- after analyzing both files we can say that ExpressJS simplifies code complexity and improve readability.


// issue to resolve
// anyone can add data init big issues