const express = require('express');
const Produit = require("../controllers/Produit")
const router = express.Router();
const LotRouter = require("./Lot")
const CatRouter = require("./Categorie")
const PricingRouter = require("./Pricing")
router.get("/",Produit.getProduits)


router.get("/idProduit=:idProduit/titre=:titre/marque=:marque/Categorie=:Categorie/idCategorie=:idCategorie/prixS=:prixS/prixI=:prixI/",Produit.getProduitsFilter)

router.use('/Lot',LotRouter)
router.use("/Categorie",CatRouter)
router.use("/Pricing",PricingRouter)

module.exports= router