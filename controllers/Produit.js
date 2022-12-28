const MProduit= require("../models/Product/Product")
const MLot = require("../models/Product/Lot")
const MCategorie = require("../models/Product/Lot")
const MPricing = require("../models/Product/Lot")
MProduit.Create


module.exports ={
    Product:{
        create:MProduit.Create,
        read :MProduit.read,
        update: MProduit.update,
        ProductDeatil:MProduit.ProductDeatil,
        search: MProduit.Search
    }
    ,
    Lot:MLot,
    Categorie:MCategorie,
    Pricing:MPricing
}