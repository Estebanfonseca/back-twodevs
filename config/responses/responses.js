const userExistsResponse = (req, res) => {
    return res.status(400).json({
        success: false,
        message: 'user already exists'
    })
}
const userSignedUpResponse = (req, res) => {
    return res.status(201).json({
        success: true,
        message: 'user signed up'
    })
}
const userNotFoundResponse = (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'user not found'
    })
}
module.exports = {
    userExistsResponse,
    userSignedUpResponse,
    userNotFoundResponse
}