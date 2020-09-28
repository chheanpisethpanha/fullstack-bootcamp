const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


//Get tasks
router.get('/', async (req, res) => {
    const tasks = await loadTasksCollection();
    res.send(await tasks.find({}).toArray());
});

//Add task
router.post('/', async (req, res) => { 
    const task = await loadTasksCollection();
    await tasklist.insertOne({
        task: req.body.task,
        dateCreated: new Date() 
    });
    res.status(201).send();
})

//Delete task

async function loadTasksCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://panha:1234@my-tasklist.wnb0i.mongodb.net/my-tasklist?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client.db('my-tasklist').collection('mytasks');
}

module.exports = router;