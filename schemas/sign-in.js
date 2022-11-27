const joi = require('joi')

const schema = joi.object({
    email:joi.string().required().email({minDomainSegments: 2}),
    password:joi.string().required().alphanum().min(8)
})

module.exports= schema