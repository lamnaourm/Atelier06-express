import express from 'express'
import MovieModel from '../models/MovieModel.js'

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

routes.get('/listcategory/:year1/:year2', (req, res) => {

})


routes.post('/add', (req, res) => {
    
})

routes.put('/update/:name', (req, res) => {
    
})

routes.delete('/delete/:name', (req, res) => {
    
})

export default routes