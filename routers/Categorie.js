const express = require('express');
const Cat = require("../controllers/Categorie");
const { Categorie } = require('../models/Product/Categorie');

const router = express.Router();


router.get("/",Cat.getCategorie)

router.get("/idCategorie=:idCategorie/titre=:titre",Cat.getCategorieFilter)

router.post("/add",Cat.postCreateCategorie)


module.exports= router