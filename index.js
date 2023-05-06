const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors');

const users = [
    {name: 'Shabana', gmail: 'shabana@gmail.com'},
    {name: 'Shakib', gmail: 'shakib@gmail.com'},
    {name: 'Jashim', gmail: 'jashim@gmail.com'},
    {name: 'Alamgir', gmail: 'alamgir@gmail.com'},
];

app.use(cors());

app.get('/', (req, res) => {
    res.send('This server is running');
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`app listening on port: ${port}`)
})