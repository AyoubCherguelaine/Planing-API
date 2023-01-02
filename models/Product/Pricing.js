const db= require("../db")

const Create = (pack)=>{
    let q= `call InsertPricing(19000,"2020-12-28",1);`
}

const read = (callback)=>{
    let q= `select pr.idProduit,pr.Prix,pr.DatePricing,pr.Active,pr.idProduit,p.titre,p.marque,p.idCategorie from Pricing pr join Produit p on p.idProduit=pr.idProduit`
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}

const read_filter= (pack,callback)=>{
    let q1=""
    if(pack.hasOwnProperty("idPricing")){
        q1+= `and pr.idPricing=${pack.idPricing}`
    }

    if(pack.hasOwnProperty("idProduit")){
        q1+=` and p.idProduit=${pack.idProduit}`
    }
    if(pack.hasOwnProperty("PrixS")){
        q1+=` and pr.Prix>${pack.PrixS}`  
    }
    if(pack.hasOwnProperty("PrixN")){
        q1+=` and pr.Prix<${pack.PrixN}`

    }

    if(pack.hasOwnProperty("DatePricing")){
        q1+=` and pr.DatePricing='${pack.DatePricing}'`
    }

    if(pack.hasOwnProperty("Active")){
        q1+=` and pr.Active=${pack.Active}`
    }
    if(pack.hasOwnProperty("idCategorie")){
        q1+=` and pr.idCategorie=${pack.idCategorie}`
    }
    if(pack.hasOwnProperty("titre")){
        q1+=` and p.titre like '%${pack.titre}%'`
    }
    if(pack.hasOwnProperty("marque")){
        q1+=` and p.marque like'%${pack.marque}%'`
    }
    
    let q= `select pr.idProduit,pr.Prix,pr.DatePricing,pr.Active,pr.idProduit,p.titre,p.marque,p.idCategorie from Pricing pr join Produit p on p.idProduit=pr.idProduit ` + q1 

    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}





module.exports={
    Create,
    read,
    read_filter
}