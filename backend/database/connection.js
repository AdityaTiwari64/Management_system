const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const con = await mongoose.connect('mongodb+srv://aditya:aditya123@usermanage.mmsnw.mongodb.net/Management?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true,
        // useCreateIndex: true,
    })
    console.log('Connected To DB')
    console.log(`${con.connection.host}`)
}
     catch (err) {
        console.log(err)
    }
}
module.exports = connectDB