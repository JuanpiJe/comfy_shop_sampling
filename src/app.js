const express = require('express')
const app = express()

//Import Routes
const authRoute = require('./routes/auth')


//Routes
app.use('/api/user', authRoute)

//Server mounting
const port = 3000
app.listen (port, ()=> console.log(`Server running at http://localhost:${port}`))