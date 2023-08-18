const express = require('express');
const tournamentsRoutes = require('./riotRoutes.js');


const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/api/tournaments', tournamentsRoutes); // Mount the tournament routes

app.get('/', (req, res) => {
    res.send('Serversdfsdf is running');
});
app.post('/', (req, res) => {
    console.log('Received a POST request at root endpoint.');
    console.log(req.body);
    res.status(200).send('Received');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});