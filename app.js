const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const app = express()
const { db } = require('./models');
const models  = require('./models');
const layout = require("./views/layout")
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user');


db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended: true}))


const PORT = 3000
const init = async () =>{
  await models.db.sync({force:true})
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
  })
}

init()

app.get('/', (req, res, next) => {
	res.redirect('/wiki');
})
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);
