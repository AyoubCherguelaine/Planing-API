const db= require("../db")


const Create = (pack,callback)=>{

  if(pack.hasOwnProperty("titreLot") && pack.hasOwnProperty("PrixAchat")&& pack.hasOwnProperty("dateAchat")&& pack.hasOwnProperty("Quantity")&& pack.hasOwnProperty("inStock")&& pack.hasOwnProperty("idProduit") ){

  

    let q=`INSERT INTO Lot (
        
        titreLot,
        PrixAchat,
        dateAchat,
        Quantity,
        inStock,
        idProduit
      )
    VALUES (
        '${pack.titreLot}',
        '${pack.PrixAchat}',
        '${pack.dateAchat}',
        ${pack.Quantity},
        ${pack.inStock},
        ${pack.idProduit}
      );`

    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
  }else{
    callback("pack not complet",null)
  }
}

const read = (pack,callback)=>{
  let q=`select * from Lot where idLot=${pack.idLot}`
  db.query(q,(err,resl)=>{
    callback(err,resl)
  })
}

const updatePrix=(pack,callback)=>{
  let q=`UPDATE Lot SET PrixAchat=${pack.PrixAchat} WHERE idLot=${pack.idLot};`
  db.query(q,(err,resl)=>{
    callback(err,resl)
  })
}

const  updateQuantity= (pack,callback)=>{
  let q=`UPDATE Lot SET Quantity=${pack.Quantity} WHERE idLot=${pack.idLot};`
  db.query(q,(err,resl)=>{
    callback(err,resl)
  })
}

const updateInStock= (pack,callback)=>{
  let q=`UPDATE Lot SET inStock=${pack.inStock} WHERE idLot=${pack.idLot};`
  db.query(q,(err,resl)=>{
    callback(err,resl)
  })
}

module.exports={
  Create,
  read,
  updatePrix,
  updateQuantity,
  updateInStock
}