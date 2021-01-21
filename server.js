const express = require('express');
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose');
const cors = require('cors')
const loginroute = require('./api/routes/login');
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup')

mongoose.connect(keys.mongodb.dburi,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected the mongo Database')
})

app.set('view engine','ejs')

const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())




app.get('/',(req,res) => {
    res.status(200)
    res.render('home')
})
app.use('/auth/',loginroute)


app.use((error, req, res, next) => {
    console.log(error)
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    });
})


//mongoose.connect()

app.listen(PORT,() => {console.log(`listening on ${PORT}`)});