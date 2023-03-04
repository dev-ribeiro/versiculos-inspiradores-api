require('dotenv').config()
const express = require('express')
const app = express()
const { router } = require('./routes/index.routes')
const cors = require('cors')
const { checkSecretKey } = require('./middlewares/checkSecretKey')

app.use(cors({
    origin: '*'
}))
app.use('/', checkSecretKey, router)

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log('Running'))
