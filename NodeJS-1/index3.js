import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log(req.url);
    res.send('Response from server for /');
});

app.get('/home', (req, res) => {
    console.log(req.url);
    res.send('Response from server for /home');
});

app.listen(8080, () => {
    console.log('Server started ');
});
