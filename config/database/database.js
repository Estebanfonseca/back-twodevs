const mongoose = require('mongoose')
require('dotenv').config()
let connection = async()=>{
    try{
        mongoose.connect(
            process.env.LINK_DB,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log('connected by database')
    }catch(error){
        console.log(error.message)
    }
}

connection()