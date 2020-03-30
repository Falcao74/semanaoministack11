const express = require('express');
const routes = express.Router();

routes.post('/users', (req, resp) => {
    const body = req.body;    
    console.log(body);
    return resp.json({body});
});

module.exports = routes;
