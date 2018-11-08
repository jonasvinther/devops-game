const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'dist')));

app.set('views', path.join(__dirname, 'src/pug'));
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('layout', { title: 'DevOps game', message: 'Hello there!' })
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))