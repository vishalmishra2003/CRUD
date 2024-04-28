const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const modelSchema = require('./Model/Model')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/CRUD")

app.post('/putDetail', (req, res) => {
    modelSchema.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.get('/fetchData', async (req, res) => {
    try {
        const data = await modelSchema.find({})
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    modelSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    modelSchema.findById({ _id: id })
        .then(result => res.json(result))
        .catch(err => console.log(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;

    modelSchema.findByIdAndUpdate({ _id: id }, { name: req.body.name, email: req.body.email, age: req.body.age })
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.listen(3000, (req, res) => { console.log("Listening to the port 3000") })

