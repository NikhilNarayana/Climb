const functions = require('firebase-functions');
const express = require('express');

const app = express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 app.get('/hello', (request, response) => {
  //response.send("Hello from Firebase!");
  //response.sendFile('../public/hello.html', {root: {root: __dirname }})
   response.status(200).send(`<!doctype html>
    <html>
<header><title>This is title</title></header>
<body>
Hello world
</body>
</html>`);
 });

exports.hello = functions.https.onRequest(app);