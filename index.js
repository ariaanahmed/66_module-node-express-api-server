const express = require('express');
const app = express()
const port = process.env.port || 3000;

const users = [
    {name: 'shabana', gmail: 'shabana24@gmail.com'},
    {name: 'jashim', gmail: 'jashim24@gmail.com'},
    {name: 'Alamgir', gmail: 'Alamgir24@gmail.com'},
]

app.get('/', (req, res) => {
    res.send('mySrver Running')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})