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
function invalidCredentialsResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'email or password incorrect'
    })
}
function verifyResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Please, verify your email account and try again'
    })
}
function mustSignInResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'sign in please!'
    })
}
const userSignedOutResponse = (req, res) => {
    return res.status(201).json({
        success: true,
        message: 'user signed out'
    })
}
const idDontMatchResponse = (req, res) => {
    return res.status(401).json({
        success: false,
        message: 'user id unauthorized'
    })
}
const reactionExistsResponse = (req, res) => {
    return res.status(400).json({
        success: false,
        message: 'reaction already exists here'
    })
}
const activityNotFoundResponse = (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'activity not found'
    })
}
module.exports = {
    userExistsResponse,
    userSignedUpResponse,
    userNotFoundResponse,
    invalidCredentialsResponse,
    verifyResponse,
    mustSignInResponse,
    userSignedOutResponse,
    idDontMatchResponse,
    reactionExistsResponse,
    activityNotFoundResponse
}