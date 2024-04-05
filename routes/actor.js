import express from 'express'
import ActModel from '../models/ActorModel.js'
import MovieModel from '../models/MovieModel.js'

const routes = express.Router()

routes.get('/all', (req, res) => {
    ActModel.find()
    .then((acts) => {
        res.json(acts)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.get('/names', (req, res) => {
    ActModel.find({},{_id:0, name:1})
    .then((acts) => {
        res.json(acts)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.get('/movies', (req, res) => {
    MovieModel.aggregate([{$unwind:'$actors'}, {$group:{_id:'$actors', nb_films:{$sum:1}}}])
    .then((acts) => {
        res.json(acts)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.post('/add', (req, res) => {
    const actor = req.body
    ActModel.create(actor)
    .then((act) => {
        res.status(201).json(act)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.put('/update/:name', (req, res) => {
    const name=req.params.name
    const actor=req.body
    ActModel.updateOne({name}, actor)
    .then((act) => {
        res.status(202).json(act)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.delete('/delete/:name', (req, res) => {
    const name=req.params.name
    ActModel.deleteOne({name})
    .then((act) => {
        res.status(202).json(act)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

export default routes