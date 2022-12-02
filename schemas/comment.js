const joi = require('joi')

const schema = joi.object({
    showID:joi.string().hex().length(24),
    itinerarieID:joi.string().hex().length(24),
    userID:joi.string().required().hex().length(24),
    comment:joi.string().required().min(3)
})

module.exports = schema