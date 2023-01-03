const { fileLoader } = require("ejs");
const Cat = require("../models/Product/Categorie")


const FilterCategorie = (idCategorie,titre)=>{
    let pack={};
    if(idCategorie != "_"){
        pack.idCategorie = idCategorie
    }
    if(titre != "_"){
        pack.titre = titre
    }
    return pack
}

const getCategorie = async (req,res)=>{

    await Cat.read((err,result)=>{
        if(err){
            res.send({message:"Error",Error:err})
        }else{
            res.send(result);
        }
    })
}

const getCategorieFilter= async (req,res)=>{

    //there is a params
    let idCategorie = req.params.idCategorie
    let  titre=req.params.titre;
    let pack = FilterCategorie(idCategorie,titre)

    await Cat.read_filter(pack,(err,result)=>{
        if(err){
            res.send({message:"Error",Error:err})
        }else{
            res.send(result);
        }
    })

    

}

const postCreateCategorie = (req, res) => { 

    let Categorie = new Cat.Categorie(req.body.titre)

    Cat.Categorie.save(Categorie,(err,result) => {
        if(err){
            res.send({message:"Error",Error:err})
        }else{
            res.send(result);
        }
    });

}

module.exports = {
    postCreateCategorie,
    getCategorie,
    getCategorieFilter
}