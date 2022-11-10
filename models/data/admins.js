let admins = [
    {
        "name": "juan",
        "lastname": "rodriguez",
        "role":"admin",
        "age": 34,
        "email": "juanr45@gmail.com",
        "password": "jrodri54",
        "code": "admin87",
        "verified": true,
        "logged": true
    },
    {
        "name": "maria",
        "lastname": "perez",
        "role":"admin",
        "age": 24,
        "email": "mariapz92@outlook.com",
        "password": "peremar66",
        "code": "admin46",
        "verified": true,
        "logged": true
    },
    {
        "name": "richard",
        "lastname": "gonzales",
        "role":"admin",
        "age": 37,
        "email": "richardg432@hotmail.com",
        "password": "gonzard03",
        "code": "admin78",
        "verified": true,
        "logged": true
    },
    {
        "name": "andres",
        "lastname": "diaz",
        "role":"admin",
        "age": 38,
        "email": "andrud65@gmail.com",
        "password": "andruz87",
        "code": "admin23",
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
        role:item.role,
        age:item.age,
        email:item.email,
        password:item.password,
        code:item.code,
        verified:item.verified,
        logged:item.logged
    })
})

