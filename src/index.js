const express = require ('express');
const cors = require ('cors');
const routes = require ('./routes');

const app = express();
app.use (cors());
app.use (express.json());
app.use (routes);

app.use ( (error, request, response, next) => {
    response.status(error.status || 500);
    response.json({ error: error.message })
})

app.listen (3333);