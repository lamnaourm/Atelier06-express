import express from 'express'
import MovieModel from '../models/MovieModel.js'
import ActModel from '../models/ActorModel.js'
import DrtModel from '../models/ActorModel.js'

const routes = express.Router()

routes.get('/all', (req, res) => {
    MovieModel.find()
    .then((movies) => {
        res.json(movies)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.get('/actors/:filmname', (req, res) => {
    
})

routes.get('/directors/:filmname', (req, res) => {

})

routes.get('/listcategory/:category', (req, res) => {

})

routes.get('/years/:year1/:year2', (req, res) => {

})


routes.post('/add', (req, res) => {
    const movie = req.body
    MovieModel.create(director)
    .then((m) => {
        res.status(201).json(m)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.put('/update/:name', (req, res) => {
    const name=req.params.name
    const movie=req.body
    MovieModel.updateOne({name}, movie)
    .then((m) => {
        res.status(202).json(m)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

routes.delete('/delete/:name', (req, res) => {
    const name=req.params.name
    MovieModel.deleteOne({name})
    .then((m) => {
        res.status(202).json(m)
    }).catch((err) => {
        res.status(510).send('error')
    })
})

export default routes