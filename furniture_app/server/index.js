
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const productRouter = require('./routes/products')

dotenv.config()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI).then(() => console.log('Database connection established')).catch((e) => console.log(e))

app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({limit:'10mb'}))

app.use('/api/products',productRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))