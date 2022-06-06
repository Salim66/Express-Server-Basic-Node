const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

// Get Server Port
const PORT = process.env.SERVER_PORT;

app.get('/api/students', (req, res) => {
    res.send('GET Routes Done');
});

app.post('/api/students', (req, res) => {
    res.send('POST Routes Done');
});

app.get('/api/students/:id', (req, res) => {
    res.send('Single STudent Routes Done with id '+req.params.id);
});

app.put('/api/students/:id', (req, res) => {
    res.send('PUT Routes Done with id '+req.params.id);
});

app.patch('/api/students/:id', (req, res) => {
    res.send('PATCH Routes Done with id '+req.params.id);
});

app.delete('/api/students/:id', (req, res) => {
    res.send('DELETE Routes Done with id '+req.params.id);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


