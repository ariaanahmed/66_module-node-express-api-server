const express = require('express')
const app = express();

const port = process.env.PORT || 3000;

const cors = require('cors')

const users = [
    {id: 1, name: 'Shabana', email: 'shabana@gmail.com'},
    {id: 2, name: 'Shakib', email: 'shakib@gmail.com'},
    {id: 3, name: 'Jashim', email: 'jashim@gmail.com'},
    {id: 4, name: 'Alamgir', email: 'alamgir@gmail.com'},
];

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('manegement server is running')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log(req.body)

    const newUser = req.body
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`menegement server is listening from port: ${port}`)
})