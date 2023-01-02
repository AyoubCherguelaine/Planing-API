const db= require("../db")

const Create = (pack)=>{
    let q= `INSERT INTO Categorie ( titre)
    VALUES ( '${pack.titre}');`
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}

const read = async (callback) =>{
    let q= `select from Categorie `
    await db.query(q,(err,Result)=>{
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

const read_filter=(pack,callback)=>{

    let q1=''
    if(pack.hasOwnProperty("titre")){
        q1+=` and titre like "%${pack.titre}%"`
    }
    if(pack.hasOwnProperty("idCategorie")){
        q1+=` and idCategorie = ${pack.idCategorie} `
    }

    let q= `select from Categorie where 1=1 `+q1
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })

}

module.exports={
    Create,
    read,
    update,
    read_filter
}