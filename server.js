const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Blag Engine.'))

app.get('/admin', (req, res) => res.sendFile(__dirname + '/public/admin/index.html'))

app.post('/admin', (req, res) => routes.AddPost(req, res));

app.get('/posts/:post', (req,res) => routes.ReadPost(req,res))

