const joi = require('joi')

const schema = joi.object({
    showId:joi.string().hex().length(24),
    itineraryId:joi.string().hex().length(24),
    name:joi.string().required().min(3).max(20),
    icon:joi.string().required().uri(),
    iconBack:joi.string().required().uri(),
})

module.exports = schema