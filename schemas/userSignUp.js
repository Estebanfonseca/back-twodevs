const joi = require('joi')

const schema = joi.object({
    name:joi.string().required().min(3).max(30),
    lastName:joi.string().required().min(3).max(30),
    age:joi.number().required().min(18).max(100),
    photo:joi.string().required().uri(),
    email:joi.string().required().email({minDomainSegments: 2}),
    password:joi.string().alphanum().required().min(8)
})

module.exports = schema