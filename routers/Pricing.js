const express = require('express');
const Pricing = require('../controllers/Pricing')

const router = express.Router();

//get all
router.get('/', Pricing.getPricing);

//get search
router.get('/idPricing=:idPricing/idProduit=:idProduit/titre=:titre/marque=:marque/idCategorie=:idCategorie/Prixs=:PrixS/PrixI=:PrixI/DatePricing=:DatePricing/',Pricing.getPricingFilter)


module.exports= router