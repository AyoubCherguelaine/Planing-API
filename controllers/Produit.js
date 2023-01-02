const MProduit= require("../models/Product/Product")
const MLot = require("../models/Product/Lot")
const MCategorie = require("../models/Product/Lot")
const MPricing = require("../models/Product/Lot")
MProduit.Create




const Filter_Produit = (idProduit,titre,marque,Categorie,idCategorie,prixS,prixI)=>{
    filter={}
    
    if(idProduit != '_'){
        filter.idProduit=idProduit
    }
    if(titre != '_'){
        filter.titre=titre
    }
    if(marque != '_'){
        filter.marque=marque
    }
    if(Categorie != '_'){
        filter.Categorie=Categorie
    }
    if(idCategorie != '_'){
        filter.idCategorie=idCategorie
    }
    if(prixS != '_'){
        filter.prixS=prixS
    }
    if(prixI != "_" ){
        filter.prixI=prixI
    }

    return filter;
}


const getProduits= async (req,res)=>{
    await MProduit.read_filter((err,result)=>{
        if(err){
            res.send({message:"Error",Error:err})
        }else{
            res.send(result);
        }
    })
}

const getProduitsFilter = async (req,res)=>{
    
    let idProduit = req.params.idProduit
    let titre = req.params.titre
    let marque= req.params.marque
    let Categorie=req.params.Categorie
    let idCategorie=req.params.idCategorie
    let prixS = req.params.prixS
    let prixI = req.params.prixI
    let pack = Filter_Produit(idProduit,titre,marque,Categorie,idCategorie,prixS,prixI);
   
    await MProduit.read_filter(pack, async (err,result)=>{
        if(err){
            res.send({message:"Error",Error:err})
        }else{
            res.send(result);
        }
    })
}

module.exports ={
        getProduits,
        getProduitsFilter
    
    
}