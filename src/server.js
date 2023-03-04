const express = require('express')
const app = express()
const { router } = require('./routes/index.routes')

app.use('/', router)

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log('Running'))