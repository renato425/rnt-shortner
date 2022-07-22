require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const db = require('./fb/index.js')
const moment = require('moment')
moment.locale('pt-BR')

app.use(express.json())
app.set('view source', 'ejs')

function getRandomString() {
  const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let string = ''
  for (let i =0; i < 7; i++) {
    let randomNumber = Math.floor(Math.random() * char.length)
    string = string + char.charAt(randomNumber)
  }
  return string
}

app.get('/', (req, res) => {
  res.render(path.resolve(__dirname, 'public', 'index.ejs'), {
    header: fs.readFileSync(path.resolve(__dirname))
  })
})
