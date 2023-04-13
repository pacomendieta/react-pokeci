const express = require('express')
const app = express()
const { version } = require('/package.json')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send(version)
})

app.use(express.static('dist')) //servidor html en el build de React

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}. App React hmtl de /dist/index.html en localhost:${PORT}`)
})
