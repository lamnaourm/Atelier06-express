import express from 'express'

const routes = express.Router()

routes.get('/all', (req, res) => {

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

routes.update('/update/:name', (req, res) => {
    
})

routes.delete('/delete/:name', (req, res) => {
    
})

export default routes