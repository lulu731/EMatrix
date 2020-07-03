const express = require('express');
// var cors = require('cors');
fs = require('fs');
const app = express();

// const data = {
//     "essai" : "truc"
// }

// app.use((req, res, next) => {
//     cors();
//     next()
// });
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// const data = null;

app.get('/test', (req, res) => {
    console.log('in get ');
    fs.readFile('./public/test.json', 'utf8', (err, data) => {
        res.send('<h6>' + data + '</h6>');
    });
    
})

app.put('/test', (req, res) => {
    const data = req.body;
    console.log(JSON.stringify(data));
    fs.writeFile('./public/test.json', JSON.stringify(data), (err) => {
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
