let hotels = [
    {
        name: "InterContinental Dubai Marina",
        photo: ["https://digital.ihg.com/is/image/ihg/intercontinental-dubai-4930171863-2x1?fit=fit,1&wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0", "https://digital.ihg.com/is/image/ihg/intercontinental-dubai-4930171844-2x1?fit=fit,1&wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0", "https://digital.ihg.com/is/image/ihg/intercontinental-dubai-6051224202-2x1?fit=fit,1&wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0"],
        capacity: 3890,
        cityid: "636d3af27ccd7c6ea97b82e4",
        userid: "636d210297606439046194bb",
    },
    {
        name: "Vogue Hotel Supreme Istanbul",
        photo: ["https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/267622968.jpg?k=492fa2ef5df5e48d412b2b323f97e6591b5c053c67965c4ebcd0d3098adc5b3b&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/227205932.jpg?k=356c37f62a41e83057b705457ba6aafa8249b44bf017627b507f2bacd01983cc&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/227205946.jpg?k=4d1f80f241197ebcab125f2d1784ee5021855f60dfc6d986ed5f5e59f38b758c&o=&hp=1"],
        capacity: 3500,
        cityid: "636d3af27ccd7c6ea97b82ea",
        userid: "636d210297606439046194bc",
    },
    {
        name: "Le Club Barrière",
        photo: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ab/08/74/skyroom-salle-de-punto.jpg?w=1200&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ab/08/83/the-vault-salle-cash.jpg?w=1200&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ab/08/a3/staff-du-club-barriere.jpg?w=1200&h=-1&s=1"],
        capacity: 2950,
        cityid: "636d3af27ccd7c6ea97b82e2",
        userid: "636d210297606439046194bd",
    },
    {
        name: "Club Pierre Charron",
        photo: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/d3/4b/2f/salle-des-grands-jeux.jpg?w=1200&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/d3/4b/36/le-bar-du-club-pierre.jpg?w=1200&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/d3/4b/34/le-poker-21-au-club-pierre.jpg?w=1200&h=-1&s=1"],
        capacity: 3160,
        cityid: "636d3af27ccd7c6ea97b82e2",
        userid: "636d210297606439046194ba",
    },
    {
        name: "AJWA Sultanahmet",
        photo: ["https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/188422487.jpg?k=5f8f143c54b09a447552f6a4f1086ed3048e82735f12c7b6a79cb6a78a1a65e1&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/228336466.jpg?k=b3f5776c1dd16bfe49f508a5b700d211040c1fe27e0cf497ad90b4cc92e650c1&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/188422456.jpg?k=5ef3add6eb12e1f5e38f4b6eb041c68c8f84029bedd48656ebd6ccf866ef723b&o=&hp=1"],
        capacity: 2870,
        cityid: "636d3af27ccd7c6ea97b82ea",
        userid: "636d210297606439046194bb",
    },
    {
        name: "The Grosvenor Victoria Casino London",
        photo: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/6f/6e/a2/grosvenor-the-victoria.jpg?w=1000&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/3f/67/b4/the-club-room-private.jpg?w=1000&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/b3/ff/05/grosvenor-victoria-casino.jpg?w=1200&h=-1&s=1"],
        capacity: 4032,
        cityid: "636d3af27ccd7c6ea97b82e6",
        userid: "636d210297606439046194bc",
    },
    {
        name: "Resorts World Casino New York City",
        photo: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/04/cb/01/the-thrill-of-big-city.jpg?w=1200&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/5a/5f/b9/outside.jpg?w=600&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/29/93/52/it-is-a-nice-place.jpg?w=1200&h=-1&s=1"],
        capacity: 3200,
        cityid: "636d3af27ccd7c6ea97b82e9",
        userid: "636d210297606439046194bd",
    },
    {
        name: "Resorts World Sentosa Casino",
        photo: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/cd/66/94/resorts-world-sentosa.jpg?w=1200&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ba/e1/67/photo4jpg.jpg?w=1200&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a9/ff/e2/photo0jpg.jpg?w=1200&h=-1&s=1"],
        capacity: 4500,
        cityid: "636d3af27ccd7c6ea97b82e7",
        userid: "636d210297606439046194ba",
    },
    {
        name: "Sotetsu Fresa Inn Ginza-Nanachome",
        photo: ["https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/82009954.jpg?k=7dba35d5f4387d73e6c6cd256ebcf33c7e5bad4eb153f42791cf6a4826812693&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/79977961.jpg?k=326c8ede4898322fc1ba5e22698b59ca49fc0afc25cfb844499dbee13691ab3a&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/266697479.jpg?k=8d79f9df39ac146f0b09b6384650e66ee83ea99092403714480ca337954096b0&o=&hp=1"],
        capacity: 3800,
        cityid: "636d3af27ccd7c6ea97b82eb",
        userid: "636d210297606439046194bb",
    },
    {
        name: "ibis Kuala Lumpur City Centre",
        photo: ["https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/403064205.jpg?k=9fc8a0884821b9916a10eec3d5fa7f1defac649fe8b0cab552c39ac9bf5cdec4&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/251609639.jpg?k=d7aaa97148b9b5d721c548164b51f31b06127f2c0b697bd85969f52afb240fab&o=&hp=1", "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/251609642.jpg?k=71bd58f9d10abf43618b2f000993a716af10b9685fdecb4452881097815fb928&o=&hp=1"],
        capacity: 2900,
        cityid: "636d3af27ccd7c6ea97b82e8",
        userid: "636d210297606439046194bc",
    },
    {
        name: "Casino Barcelona",
        photo: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/4e/6c/c5/ruleta.jpg?w=1200&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/65/23/5e/photo3jpg.jpg?w=1200&h=-1&s=1", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/78/61/59/casino-barcelona.jpg?w=1200&h=-1&s=1"],
        capacity: 3200,
        cityid: "636d3af27ccd7c6ea97b82e3",
        userid: "636d210297606439046194bd",
    },
    {
        name: "plaza dubai crown",
        photo: ["https://media-cdn.tripadvisor.com/media/photo-s/26/68/98/4d/burj-khalifa.jpg", "https://digital.ihg.com/is/image/ihg/crowne-plaza-dubai-7024949190-4x3", "https://www.detectahotel.com/rimg/himg/fc/83/f9/revato-12087-6161660-661324.jpg?width=1366&height=768&crop=true"],
        capacity: 4300,
        cityid: "636d3af27ccd7c6ea97b82e4",
        userid: "636d210297606439046194ba",
    },
]

require('dotenv')
require('../../config/database/database')

const Hotel = require('../Hotel')

hotels.forEach(item=>{
    Hotel.create({
        name:item.name,
        photo:item.photo,
        capacity:item.capacity,
        cityID:item.cityid,
        userID:item.userid
    })
})

