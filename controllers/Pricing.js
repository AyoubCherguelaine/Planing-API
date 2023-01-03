const MPricing = require("../models/Product/Pricing");

const Filter_Pricing = (idPricing,idProduit,titre,marque,idCategorie,PrixS,PrixI,DatePricing)=>{
    filter={}
    
    if(idPricing!= '_'){
        filter.idPricing = idPricing
    }

    if(idProduit != '_'){
        filter.idProduit=idProduit
    }
    if(titre != '_'){
        filter.titre=titre
    }
    if(marque != '_'){
        filter.marque=marque
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
    if(DatePricing!= '_'){
        filter.DatePricing=DatePricing
    }
    return filter
}

const getPricing= async (req,res)=>{

    await MPricing.read((err,result)=>{
        if(err){
            res.send({message:"Error",Error:err})
        }else{
            res.send(result);
        }
    })
}

const getPricingFilter = async (req,res)=>{
    let params = req.params;
    let idPricing = params.idPricing
    let idProduit = params.idProduit
    let titre = params.titre
    let marque = params.marque
    let idCategorie = params.idCategorie
    let PrixS = params.PrixS
    let PrixI = params.PrixI
    let DatePricing = params.DatePricing

    pack = Filter_Pricing(idPricing,idProduit,titre,marque,idCategorie,PrixS,PrixI,DatePricing)

    await MPricing.read_filter(pack,(err,result)=>{
        if(err){
            res.send({message:"Error",Error:err})
            }else{
            res.send(result);
            }
    })
}


const postCreatePricing = async (req,res)=>{
    let Pricing = new MPricing.Pricing(req.body.Prix,req.body.DatePricing,req.body.idProduit)
    MPricing.Pricing.save(Pricing,(err,result)=>{
        if(err){
            res.send({message:"Error",Error:err})
        }else{
            res.send(result);
        }
    })
}

module.exports={
    postCreatePricing,
    getPricing,
    getPricingFilter
}