import express from 'express'
import DrtModel from '../models/ActorModel.js'
import MovieModel from '../models/MovieModel.js'

const routes = express.Router()

routes.get('/all', (req, res) => {
    DrtModel.find()
    .then((drts) => {
        res.json(drts)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.get('/names', (req, res) => {
    DrtModel.find({},{_id:0, name:1})
    .then((drts) => {
        res.json(drts)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.get('/movies', (req, res) => {
    MovieModel.aggregate([{$group:{_id:'$director', nb_films:{$sum:1}}}])
    .then((acts) => {
        res.json(acts)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.post('/add', (req, res) => {
    const director = req.body
    DrtModel.create(director)
    .then((drt) => {
        res.status(201).json(drt)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.put('/update/:name', (req, res) => {
    const name=req.params.name
    const director=req.body
    DrtModel.updateOne({name}, director)
    .then((drt) => {
        res.status(202).json(drt)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.delete('/delete/:name', (req, res) => {
    const name=req.params.name
    DrtModel.deleteOne({name})
    .then((drt) => {
        res.status(202).json(drt)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

export default routes