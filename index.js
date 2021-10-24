const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("Hello, I am from second node module. Take Love. Hey yaaaaa");
});

const users = [
    {id: 0, name: 'Aurora', email: 'auroralroy2003@gmail.com'},
    {id: 1, name: 'Arghya', email: 'auroralroy2003@gmail.com'},
    {id: 2, name: 'Kook', email: 'auroralroy2003@gmail.com'},
    {id: 3, name: 'Bam', email: 'auroralroy2003@gmail.com'},
    {id: 4, name: 'Bam', email: 'auroralroy2003@gmail.com'},
    {id: 5, name: 'Bam', email: 'auroralroy2003@gmail.com'},
    {id: 6, name: 'Bam', email: 'auroralroy2003@gmail.com'}
]
 
app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser)); 
    res.json(newUser);
});

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'bananas', 'apples', 'watermelons']);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Fazlis are sour.');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});