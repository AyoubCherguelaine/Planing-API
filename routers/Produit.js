const express = require('express');
const CProduit = require("../controllers/Produit")
const router = express.Router();

router.get("/",async (req,res)=>{
    await CProduit.Product.ProductDeatil((err,result)=>{
        
    })
})

router.get("/:idProduit", async (req,res)=>{
    let id = req.params.idProduit
})

router.get("/:titre", async (req,res)=>{
    let titre = req.params.titre
})

router.get("/:Marque", async (req,res)=>{
    let Marque = req.params.Marque

})

module.exports= router