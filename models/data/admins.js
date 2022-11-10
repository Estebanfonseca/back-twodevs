let admins = [
    {
        "name": "juan",
        "lastname": "rodriguez",
        "age": 34,
        "email": "juanr45@gmail.com",
        "password": "jrodri54",
        "code": 2334,
        "verified": true,
        "logged": true
    },
    {
        "name": "maria",
        "lastname": "perez",
        "age": 24,
        "email": "mariapz92@outlook.com",
        "password": "peremar66",
        "code": 4657,
        "verified": true,
        "logged": true
    },
    {
        "name": "richard",
        "lastname": "gonzales",
        "age": 37,
        "email": "richardg432@hotmail.com",
        "password": "gonzard03",
        "code": 8733,
        "verified": true,
        "logged": true
    },
    {
        "name": "andres",
        "lastname": "diaz",
        "age": 38,
        "email": "andrud65@gmail.com",
        "password": "andruz87",
        "code": 3521,
        "verified": true,
        "logged": true
    }
]

require('dotenv')
require('../../config/database/database')

const Admin = require('../User')

admins.forEach(item=>{
    Admin.create({
        name:item.name,
        lastname:item.lastname,
        age:item.age,
        email:item.email,
        password:item.password,
        code:item.code,
        verified:item.verified,
        logged:item.logged
    })
})

