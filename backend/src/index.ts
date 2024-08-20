import { studentData } from './assets/data/studentData'
import express from 'express'
import path from 'path'
import cors from 'cors'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import routes from './routes'
const app = express()
app.use(cors())
dotenv.config()
const port = process.env.PORT || 3000
const distPath = path.join(__dirname, '../../frontend/build')
app.use(express.static(distPath))

app.get('/students', (req, res) => {
  res.json(studentData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json())
app.use('/api', routes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

// app.get('/*', (req, res) => {
//   res.sendFile('index.html', { root: distPath })
// })
// src/index.ts