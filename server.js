const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3232;
const router = require('./backend/routes/routes')
const path = require('path')
const connectDB = require('./backend/database/connection')

app.set("view engine","ejs")
// Load Assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')));
app.use('/js',express.static(path.resolve(__dirname,'assets/js')));
app.use(bodyParser({extended:false}))
app.use("/",router)

connectDB()


app.listen(port,()=>{
    console.log(`Connected To http://localhost:${port}`)
})