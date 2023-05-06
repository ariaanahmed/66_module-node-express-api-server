const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors');

const users = [
    {id: 1, name: 'Shabana', email: 'shabana@gmail.com'},
    {id: 2, name: 'Shakib', email: 'shakib@gmail.com'},
    {id: 3, name: 'Jashim', email: 'jashim@gmail.com'},
    {id: 4, name: 'Alamgir', email: 'alamgir@gmail.com'},
];

app.use(cors());

app.get('/', (req, res) => {
    res.send('This server is running');
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {

    console.log('post api hiting')
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`app listening on port: ${port}`)
})