const joi = require('joi')

const schema = joi.object({
    name:joi.string()
            .required()
            .min(3)
            .max(50),
    continent:joi.string()
                .required()
                .valid('africa', 'antartica', 'asia', 'Europe', 'north america', 'south america', 'oceania')
                .insensitive(),
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