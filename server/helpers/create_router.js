const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {

        const router = express.Router();

        router.get('/', (req, res) => {
            collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch( err => {
                console.error(err);
                res.status(500);
                res.json({status: 500, error: err});

            });
        });
            router.post('/', (req, res) => {
                const newData = req.body;
                collection
                .insertOne(newData)
                .then((result) => {
                    return result.insertedId
                })
                .then((id) => {
                    collection
                    .findOne({_id: ObjectId(id)})
                    .then((doc) => res.json(doc))
                })
                .catch( err => {
                    console.error(err);
                    res.status(500);
                    res.json({status: 500, error: err});
    
                });
            })








            return router;






}

module.exports = createRouter;