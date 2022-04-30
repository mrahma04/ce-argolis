const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()

const PORT = process.env.PORT || 4000

require('dotenv').config()

app.get('/', (req, res) => {
    res.json({ hello: `${uuidv4()}` })
})

app.listen(PORT, () => console.log(`🌎 Server running on ${PORT}`))