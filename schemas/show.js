const joi = require('joi')

const schema = joi.object({
    hotelID:joi.string().required().hex().length(24),
    name:joi.string().required().min(3),
    description:joi.string().required().min(5),
    photo:joi.array().length(3).items(joi.string().required().uri()),
    price:joi.number().required().min(1).max(10000),
    date:joi.date().required(),
    userID:joi.string().required().hex().length(24)
})

module.exports = schema