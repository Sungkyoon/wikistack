const express = require('express');
const morgan = require('morgan');
const app = express()
const { db , Page, User } = require('./models')

app.use(morgan('dev'))

app.use(express.static((__dirname, 'Public')))
app.use(express.urlencoded({ extends: false }))

app.get('/',  (req, res, next) => {
  console.log('Hello World')
})


db.authenticate().then(() => {
  console.log('connected to the database')
})

const syncDB = async () => {
  await db.sync({ force: true });

  app.listen(3000, () => {
    console.log('listening on 3000')
  })
}


syncDB();
