const joi = require('joi')


const schema = joi.object({
    email:joi.string().required().min(3).max(30),
    password:joi.string().required().alphanum().min(8)
})

module.exports= schema