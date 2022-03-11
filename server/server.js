const express = require('express')
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
    .then((client) => {
    const db = client.db('zoo');
    const animalsCollection = db.collection('animals');
    const animalsRouter = createRouter(animalsCollection);
    app.use('/api/animals', animalsRouter);
})
    .catch(console.err)

app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port}`);
})

