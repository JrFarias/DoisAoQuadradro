const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const profileRoute = require('./routes/profile')
const creditCardRoute = require('./routes/creditCard')
const paymentOrderRoute = require('./routes/paymentOrder')
const transactionRoute = require('./routes/transaction')

const app = express();
const port = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

const baseUri = '/api'

app.use(baseUri, profileRoute)
app.use(baseUri, creditCardRoute)
app.use(baseUri, paymentOrderRoute)
app.use(baseUri, transactionRoute)

app.use((err, req, res, next) => {
	if(err.name === 'MongoError') {
		err.status = 500
	}
	next(err)
})

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : err
  /* eslint-disable no-console */
  console.error(err.stack || err)
  res.status(err.status || 500)
  res.json(res.locals.error)
})

app.listen(port, () => console.log(`Backend running on port: ${port}...`))