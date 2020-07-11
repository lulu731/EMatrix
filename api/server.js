const express = require('express');
const cors = require('cors');
fs = require('fs');
const app = express();

app.use(cors());
// app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// const data = null;

app.get('/tasks', (req, res) => {
    fs.readFile('./public/tasks.json', 'utf8', (err, data) => {
        console.log('in get, data:', data);
        res.send(data);
    });
    
})

app.put('/tasks', (req, res) => {
    const data = req.body;
    console.log(JSON.stringify(data));
    fs.writeFile('./public/tasks.json', JSON.stringify(data), (err) => {
        if (err) {res.send('<h6>Not OK</h6>')}
        else 
        { console.log(data);
        
            res.send('<h6>'+data+'</h6>');}
});
})

// app.get('/tasks/tasks.json', (req, res) => {
//     console.log('in get file');
    
//     res.sendFile('/home/lulu/program/projects/EMatrix_api/public/tasks/tasks.json');
// })

app.get('/signin', (req, res) => {
    res.send('sign in to be implemented');
})

app.get('/register', (req, res) => {
    console.log('in register');
    res.send('register to be implemented');
})


app.listen(3000, () => {
    console.log('app running on port 3000')
});
