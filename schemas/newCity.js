const joi = require('joi')

const schema = joi.object({
    name:joi.string()
            .required()
            .min(3)
            .max(50),
    continent:joi.string()
                .required()
                .min(4)
                .max(20),
    photo:joi.string()
            .required()
            .uri(),
    population:joi.number()
                .required()
                .min(1),
    userId:joi.string()
            .hex()
            .length(24)
})

module.exports = schema