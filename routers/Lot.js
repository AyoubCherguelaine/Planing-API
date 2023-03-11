const express = require('express');
const Lot = require("../controllers/Lot")

const router = express.Router();

router.get("/",Lot.getLot)
router.get("/idLot=:idLot/idProduit=:idProduit/titre=:titre/titreLot=:titreLot/",Lot.getLotFilter)
router.post("/Add",Lot.postCreateLot)



module.exports= router