const joi = require('joi')

const schema = joi.object({
    name:joi.string().required().min(3).max(50),
    description:joi.string().required().min(3).max(200),
    photo:joi.string().required().uri(),
    price:joi.number().required().min(1).max(10000),
    capacity:joi.number().required().min(200),
    date:joi.date().required(),
    userID:joi.string().hex().length(24)
})

module.exports = schema