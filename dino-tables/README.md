# Quick Start: Dino Tables

1. Run Scripts
```
npm install
npm start
```
2.  Open your localhost:3000: [http://localhost:3000](http://localhost:3000)

## Pre-Reqs

Have Node 17+ installed along with npm. 


## Available Scripts

In the project directory, you can run:

### `npm install`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Write Up

Project took 4-5 hours. I went down the wrong path with React tables before realizing the nested objects are a tricky limitation for React tables. After re-directing towards the classic Bootstrap, it was smooth sailing. I also spent a bit of time attempting to fix the Edit bug. 

### Edit Bug
- *Description:* There's an issue with the dino table repaiting on every edit. This causes the input field to loose focus after inputing 1 char. To fix the issues, I need to decouple the full table update from the edits. 
- *Reason not fixed:* Time. It's one of those bugs like a CORS error. Sometimes you need a day just for those. 

