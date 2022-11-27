const joi = require('joi')

const schema = joi.object({
    cityId:joi.string().hex().length(24),
    name:joi.string().required().min(3).max(50),
    photo:joi.array().length(3).items(joi.string().required().uri()),
    description:joi.string().required().min(3).max(200),
    price:joi.number().required().min(1).max(10000),
    duration:joi.number().required().min(0.5).max(24),
    userId:joi.string().hex().length(24)
})

module.exports = schema