const MLot = require("../models/Product/Lot")

const Filter_Lot= (idLot,idProduit,titre,titreLot)=>{

    filter={}
    if(idLot != ' '){
        filter.idLot=idLot
    }
    if(idProduit != ' '){
        filter.idProduit=idProduit
    }
    if(titre != ' '){
        filter.titre=titre
    }
    if(titreLot != ' '){
        filter.titreLot=titreLot
    }

    return filter
}
const getLot = async (req,res)=>{
    await MLot.read((err,result)=>{
        if(err){
            res.send({message:"Error",Error:err})
        }else{
            res.send(result);
        }
    })
}

const getLotFilter = async (req,res)=>{
    
    let idLot = req.params.idLot
    let idProduit = req.params.idProduit
    let titre = req.params.titre
    let titreLot = req.params.titreLot
    pack = Filter_Lot(idLot,idProduit,titre,titreLot)
    await MLot.read_filter(pack, async  (err, result) => {
        if(err){
            res.send({message:"Error",Error:err})
        }else{
            res.send(result);
        }
        })
}

const postCreateLot = async (req, res) => {

    let idProduit = req.body.idProduit
 
    let titreLot = req.body.titreLot
    let PrixAchat = req.body.PrixAchat
    let dateAchat   = req.body.dateAchat
    let inStock = req.body.Quantity
    this.Quantity = Quantity;

    let Lot =new MLot.Lot(titreLot,PrixAchat, dateAchat,Quantity,inStock,idProduit)
    MLot.Lot.save(Lot,(err,result) => {
        if(err){
            res.send({message:"Error",Error:err})
        }else{
            res.send(result);
        }
    })
}

module.exports = {
    postCreateLot,
    getLot,
    getLotFilter

}