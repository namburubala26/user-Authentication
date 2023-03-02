const express = require('express')
const expenseApp = require('./models/data')
const app = express()
const sequelize = require('./util/dataBase')

const cors = require('cors')
const bodyParser = require('body-parser')

const postRoute = require('./router/data')
const getRoute = require('./router/getData')
const delRoute = require('./router/delData')
const editRoute = require('./router/editData')

app.use(cors())
app.use(bodyParser.json({extended:false}))

app.use(postRoute)
app.use(getRoute)
app.use(delRoute)
app.use(editRoute)

async function sequelInstance(){
    await sequelize.sync()
    console.log("The table for the sequelize model was just created!")
    app.listen(3000, ()=>{
        console.log('port running on 3000')
    })
}
sequelInstance()

// sequelize.sync()
// .then((result)=>{
//     app.listen(8000)
// })
// .catch((err)=>{
//     console.log(err)
// })