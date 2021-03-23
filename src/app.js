const express = require('express')
const app = express()

//Import Routes
const api = require('./routes/api')


//Routes
app.use('/api', api)

//Server mounting
const port = 3000
app.listen (port, ()=> console.log(`Server running at http://localhost:${port}`))