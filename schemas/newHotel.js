const joi = require('joi')

const schema = joi.object({
    name:joi.string().required().min(3).max(50),
    photo:joi.array().length(3).items(joi.string().required().uri()),
    capacity:joi.number().required().min(200),
    cityID:joi.string().hex().length(24),
    userID:joi.string().hex().length(24)
})

module.exports = schema