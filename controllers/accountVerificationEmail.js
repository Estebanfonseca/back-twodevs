const {google} = require('googleapis')
const OAuth2 = google.auth.OAuth2
const {GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL, GOOGLE_USER, GOOGLE_REFRESH, BACK_URL} = process.env
const {createTransport} = require('nodemailer')

const createClient = () => {
    return new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
}

const getTransport = (client) => {
    const accessToken = client.getAccessToken()
    return createTransport({
        service: 'gmail',
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: {rejectUnauthorized: false}
    })
}

const getEmailBody = (email, host, code) => {
    return `
        <div>
            <h1 style="text-align:center;">My Itinerary</h1>
            <h2>Account verification</h2>
            <h4 style="text-align:center;">${email}</h4>
            <div style="display:flex; justify-content:center;">
                <a href="${host}auth/verify/${code}">Verify my account.</a>
            </div>
        </div>`
}

const accountVerificationEmail = async(newMail, newCode) => {
    const client = createClient()
    client.setCredentials({refresh_token: GOOGLE_REFRESH})
    const transport = getTransport(client)
    const mailOptions = {
        from: GOOGLE_USER,
        to: newMail,
        subject: 'Verify your new account in My Itinerary',
        html: getEmailBody(newMail, BACK_URL, newCode)
    }
    transport.sendMail(mailOptions, (err, res) => {
        err ? console.log(err) : console.log('Email sent!')
    })
}

module.exports = accountVerificationEmail