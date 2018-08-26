const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('POST request')
})

app.put('/user', function (req, res) {
  res.send('PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('DELETE request at /user')
})

app.listen(3000, () => console.log('Example app'))
