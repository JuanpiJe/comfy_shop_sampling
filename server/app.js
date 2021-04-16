const express = require('express')
const app = express()
const cors = require ('cors')
const path = require ('path')


//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//Import Routes
const usersAPIRouter = require('./routes/usersAPIRouter')
const surveysAPIRouter = require('./routes/surveysAPIRouter')
const categoriesAPIRouter = require('./routes/categoriesAPIRouter')
const shopsAPIRouter = require('./routes/shopsAPIRouter')
const adminAPIRouter = require('./routes/adminAPIRouter')

//Routes
app.use('/api/users', usersAPIRouter)
app.use('/api/surveys', surveysAPIRouter)
app.use('/api/categories', categoriesAPIRouter)
app.use('/api/shops', shopsAPIRouter)
app.use('/api/admin', adminAPIRouter)

//Server mounting
const port = 5000
app.listen (port, ()=> console.log(`Server running at http://localhost:${port}`))