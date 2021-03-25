const express = require('express')
const app = express()

//Import Routes
const usersAPIRouter = require('./routes/usersAPIRouter')
const productsAPIRouter = require('./routes/productsAPIRouter')
const shopsAPIRouter = require('./routes/shopsAPIRouter')


//Routes
app.use('/api/users', usersAPIRouter)
app.use('/api/products', productsAPIRouter)
app.use('/api/shops', shopsAPIRouter)

//Server mounting
const port = 3000
app.listen (port, ()=> console.log(`Server running at http://localhost:${port}`))