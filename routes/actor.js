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
    
})

routes.get('/movies', (req, res) => {
    
})

routes.post('/add', (req, res) => {
    
})

routes.put('/update/:name', (req, res) => {
    
})

routes.delete('/delete/:name', (req, res) => {
    
})

export default routes