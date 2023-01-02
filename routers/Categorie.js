const express = require('express');
const Cat = require("../controllers/Categorie")

const router = express.Router();


router.get("/",Cat.getCategorie)

router.get("/idCategorie=:idCategorie/titre=:titre",Cat.getCategorieFilter)



module.exports= router