require('dotenv')
require('../../config/database/database')
const Reaction = require('../Reaction')
const Show = require('../Show')

const createAllReactions = async() => {
let shows = await Show.find()
    shows.forEach(el => {
        let showsReactions = [
            {
                "showId": el._id,
                "name": "like",
                "icon": "https://img.icons8.com/dusk/512/thumb-up.png",
                "iconBack": "https://img.icons8.com/wired/512/thumb-up.png"
            },
            {
                "showId": el._id,
                "name": "not-like",
                "icon": "https://img.icons8.com/dusk/512/thumbs-down.png",
                "iconBack": "https://img.icons8.com/wired/512/thumbs-down.png"
            },
            {
                "showId": el._id,
                "name": "love",
                "icon": "https://img.icons8.com/dusk/512/hearts.png",
                "iconBack": "https://img.icons8.com/wired/512/hearts.png"
            },
            {
                "showId": el._id,
                "name": "surprise",
                "icon": "https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/external-surprised-emoji-wanicon-lineal-color-wanicon.png",
                "iconBack": "https://img.icons8.com/external-wanicon-lineal-wanicon/512/external-surprised-emoji-wanicon-lineal-wanicon.png"
            }
        ]
        showsReactions.forEach(item => {
            Reaction.create({
                showId: item.showId,
                name: item.name,
                icon: item.icon,
                iconBack: item.iconBack
            })
        })
    })
}
    createAllReactions()