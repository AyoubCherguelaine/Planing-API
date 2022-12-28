const db= require("../db")

const Create = (pack)=>{
    let q= `INSERT INTO Categorie ( titre)
    VALUES ( '${pack.titre}');`
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}

const read = (pack,callback)=>{
    let q= `select from Categorie where idCategorie=${pack.idCategorie}`
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}

const update = (pack,callback)=>{
    // you can change only titre

    let q=`update Produit set titre="${pack.titre}" where idCategorie=${pack.idCategorie}`
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}

module.exports={
    Create,
    read,
    update
}