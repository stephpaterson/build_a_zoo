const express = require('express')
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createrRouter = require('./helpers/create_router');

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
.then((client) => {
    const db = client.db('zoo');
    const animalsCollection = db.collection('animals');
    const animalsRouter = createRouter(animalsCollection);
    app.use('/api/animals', animalsRouter);
})

app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port}`);
})

