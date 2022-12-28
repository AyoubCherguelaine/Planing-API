const db= require("../db")


const Create = (pack,callback)=>{
    let q= `INSERT INTO Produit ( titre, marque, idCategorie)
    VALUES (
        '${pack.titre}',
        '${pack.marque}',
        ${pack.idCategorie}
      );`
      db.query(q,(err,Result)=>{
        callback(err,Result)
      })
}

const read = (pack,callback)=>{
    let q = `select  * from ProductDetail where idProduit=${pack.idProduit}`
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}

const update = (pack,callback)=>{
    // you can change only titre

    let q=`update Produit set titre="${pack.titre}" where idProduit=${pack.idProduit}`
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}

const ProductDeatil=(callback)=>{
    let q = `select  * from ProductDetail`
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })

}

const ProductSearchTitre = (pack,callback)=>{
    let q =`select  * from ProductDetail where nom like "${pack.titre}" `
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}

const ProductSearchMarque = (pack,callback)=>{
    let q =`select  * from ProductDetail where marque like "${pack.marque}" `
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}

module.exports={
    Create,
    read,
    update,
    ProductDeatil,
    Search:{ProductSearchMarque, ProductSearchTitre}
   
}