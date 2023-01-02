const db= require("../db")


const Create = async (pack,callback)=>{
    let q= `INSERT INTO Produit ( titre, marque, idCategorie)
    VALUES (
        '${pack.titre}',
        '${pack.marque}',
        ${pack.idCategorie}
      );`
      await db.query(q,(err,Result)=>{
        callback(err,Result)
      })
}



const update = async (pack,callback)=>{
    // you can change only titre

    let q=`update Produit set titre="${pack.titre}" where idProduit=${pack.idProduit}`
    await db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}

const ProductDeatil= async(callback)=>{
    let q = `select  * from ProductDetail`
    await db.query(q,(err,Result)=>{
        callback(err,Result)
    })

}



const read_filter= async (pack,callback)=>{
    let q1=""

    if (pack.hasOwnProperty("idProduit")) {
        q1 += ` and pd.idProduit=${pack.idProduit}`
    }
    if (pack.hasOwnProperty("titre")) {
        q1 += ` and pd.titre like "%${pack.titre}%"`
    }
    if (pack.hasOwnProperty("marque")) {
        q1 += ` and pd.marque like "%${pack.marque}%"`
    }

    if (pack.hasOwnProperty("Categorie")) {
        q1 += ` and pd.categorie like "%${pack.Categorie}%"`
    }

    if (pack.hasOwnProperty("idCategorie")) {
        q1 += ` and pd.idCategorie=${pack.idCategorie}`
    }

    if (pack.hasOwnProperty("prixS")) {
        q1 += ` and pd.prix>${pack.prixS}`
    }
    if (pack.hasOwnProperty("prixI")) {
        q1 += ` and pd.prix<${pack.prixI}`
    }

    let q = `select  * from ProductDetail pd where 1=1 `+q1
    console.log(q)
    await db.query(q, (err,result)=>{
        callback(err,result)
    })
}

module.exports={
    Create,
    update,
    ProductDeatil,
    read_filter
   
   
}