const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Blag Engine.'))
app.get('/posts/:post', (req,res) => routes.posts(req,res))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))