const express = require('express')
const app = express()
const cors = require ('cors')
const path = require ('path')

//Env Path
// require('dotenv').config({ 
//     path: path.resolve(__dirname, '../.env')
//  })

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
console.log(process.env['SOCKET_PATH'])

//Import Routes
const usersAPIRouter = require('./routes/usersAPIRouter')
const productsAPIRouter = require('./routes/productsAPIRouter')
const shopsAPIRouter = require('./routes/shopsAPIRouter')
const adminAPIRouter = require('./routes/adminAPIRouter')

//Routes
app.use('/api/users', usersAPIRouter)
app.use('/api/products', productsAPIRouter)
app.use('/api/shops', shopsAPIRouter)
app.use('/api/admin', adminAPIRouter)

//Server mounting
const port = 3000
app.listen (port, ()=> console.log(`Server running at http://localhost:${port}`))