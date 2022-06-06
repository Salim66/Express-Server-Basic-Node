const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('GET Routes Done');
});

routes.post('/', (req, res) => {
    res.send('POST Routes Done');
});

routes.get('/:id', (req, res) => {
    res.send('Single STudent Routes Done with id '+req.params.id);
});

routes.put('/:id', (req, res) => {
    res.send('PUT Routes Done with id '+req.params.id);
});

routes.patch('/:id', (req, res) => {
    res.send('PATCH Routes Done with id '+req.params.id);
});

routes.delete('/:id', (req, res) => {
    res.send('DELETE Routes Done with id '+req.params.id);
});


module.exports = routes;