let cities = [
    {
        "name": "Paris",
        "continent": "Europe",
        "photo": "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "population": 2229621,
        "userId": ["636d210297606439046194bc"]
    },
    {
        "name": "Barcelona",
        "continent": "Europe",
        "photo": "https://images.unsplash.com/photo-1630219694734-fe47ab76b15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80",
        "population": 1639981,
        "userId": ["636d210297606439046194bd"]
    },
    {
        "name": "Dubái",
        "continent": "Asia",
        "photo": "https://images.unsplash.com/photo-1489516408517-0c0a15662682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "population": 4000000,
        "userId": ["636d210297606439046194ba"]
    },
    {
        "name": "Bangkok",
        "continent": "Asia",
        "photo": "https://images.unsplash.com/photo-1578167635648-df79e1565908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "population": 10539000,
        "userId": ["636d210297606439046194bb"]
    },
    {
        "name": "London",
        "continent": "Europe",
        "photo": "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "population": 9541000,
        "userId": ["636d210297606439046194bc"]
    },
    {
        "name": "Singapore",
        "continent": "Asia",
        "photo": "https://images.unsplash.com/photo-1516422641841-cd9803ab02c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "population": 5745000,
        "userId": ["636d210297606439046194bd"]
    },
    {
        "name": "Kuala Lumpur",
        "continent": "Asia",
        "photo": "https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "population": 8420000,
        "userId": ["636d210297606439046194ba"]
    },
    {
        "name": "New York",
        "continent": "North America",
        "photo": "https://images.unsplash.com/photo-1501194811830-ebb130b29b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80",
        "population": 18867000,
        "userId": ["636d210297606439046194bb"]
    },
    {
        "name": "Istambul",
        "continent": "Europe",
        "photo": "https://images.unsplash.com/photo-1626956291772-3aa243614fd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "population": 15636000,
        "userId": ["636d210297606439046194bc"]
    },
    {
        "name": "Tokio",
        "continent": "Asia",
        "photo": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
        "population": 37000000,
        "userId": ["636d210297606439046194bd"]
    },
    {
        "name": "Antalya",
        "continent": "Europe",
        "photo": "https://images.unsplash.com/photo-1591102220074-902493b578b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "population": 1319000,
        "userId": ["636d210297606439046194ba"]
    },
    {
        "name": "Seoul",
        "continent": "Asia",
        "photo": "https://images.unsplash.com/photo-1562568175-c52d8a2ee3be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "population": 9976000,
        "userId": ["636d210297606439046194bb"]
    }
]

require('dotenv')
require('../../config/database/database')

const City = require('../City')

cities.forEach(item=>{
    City.create({
        name:item.name,
        continent:item.continent,
        photo:item.photo,
        population:item.population,
        userId:item.userId,
    })
})