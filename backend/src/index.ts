import express from 'express'
import path from 'path'
// import{} from '../../frontend/build/stat'
const app = express()
const port = 3000

const distPath = path.join(__dirname, '../../frontend/build')

app.use(express.static(distPath))

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: distPath })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
