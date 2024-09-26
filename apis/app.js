import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import './src/config/index.js'
import User from './src/routes/user.js'

dotenv.config({path: `./${process.env.NODE_ENV}.env`})

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cors())
app.use('/users', User)
app.listen(process.env.PORT)
