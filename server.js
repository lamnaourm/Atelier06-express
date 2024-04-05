import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ActorRoute from './routes/actor.js'
import DirectorRoute from './routes/director.js'
import MovieRoute from './routes/movie.js'
import mongoose from 'mongoose'

dotenv.config()

const port = process.env.port || 3000
const url = process.env.url_mongoose
const db = process.env.db_name

const app = express()

app.use(cors())
app.use(express.json())

app.use('/actor', ActorRoute)
app.use('/director', DirectorRoute)
app.use('/movie', MovieRoute)

mongoose.connect(`${url}/${db}`).then(() => {
    console.log('Connected to mongo')
}).catch((err) =>{
    console.log('Not connected to mongo')
})

app.listen(port, (err) => {
    if(err)
        console.log('Unable to start server at ' + port)
    else
        console.log('Server started at ' + port)
})



