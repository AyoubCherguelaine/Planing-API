const db = require("../db")


const Create = (pack, callback) => {

  if (pack.hasOwnProperty("titreLot") && pack.hasOwnProperty("PrixAchat") && pack.hasOwnProperty("dateAchat") && pack.hasOwnProperty("Quantity") && pack.hasOwnProperty("inStock") && pack.hasOwnProperty("idProduit")) {



    let q = `INSERT INTO Lot (
        
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

    db.query(q, (err, Result) => {
      callback(err, Result)
    })
  } else {
    callback("pack not complet", null)
  }
}

const readOne = (pack, callback) => {
  let q = `select l.idLot,l.titreLot,l.PrixAchat,l.dateAchat,l.Quantity,l.inStock,p.idProduit,p.titre,p.marque,(l.PrixAchat*l.Quantity) as cout from Lot l join Produit p on p.idProduit = l.idProduit and idLot=${pack.idLot}`
  db.query(q, (err, resl) => {
    callback(err, resl)
  })
}

const read = (callback) => {
  let q = `select l.idLot,l.titreLot,l.PrixAchat,l.dateAchat,l.Quantity,l.inStock,p.idProduit,p.titre,p.marque,(l.PrixAchat*l.Quantity) as cout from Lot l join Produit p on p.idProduit = l.idProduit`
  db.query(q, (err, resl) => {
    callback(err, resl)
  })
}

const read_filter = (pack, callback) => {
  let q1 = ``

  if (pack.hasOwnProperty("idLot")) {
    q1 += ` and l.idLot=${pack.idLot}`
  }
  if (pack.hasOwnProperty("idProduit")) {
    q1 += ` and p.idProduit=${pack.idProduit}`
  }
  if (pack.hasOwnProperty("titre")) {
    q1 += ` and p.titre like "%${pack.titre}%"`
  }
  if (pack.hasOwnProperty("titreLot")) {
    q1 += ` and l.titreLot like "%${pack.titreLot}%"`
  }
  let q = `select l.idLot,l.titreLot,l.PrixAchat,l.dateAchat,l.Quantity,l.inStock,p.idProduit,p.titre,p.marque,(l.PrixAchat*l.Quantity) as cout from Lot l join Produit p on p.idProduit = l.idProduit ` + q1
  db.query(q, (err, resl) => {
    callback(err, resl)
  })
}

const updatePrix = (pack, callback) => {
  let q = `UPDATE Lot SET PrixAchat=${pack.PrixAchat} WHERE idLot=${pack.idLot};`
  db.query(q, (err, resl) => {
    callback(err, resl)
  })
}

const updateQuantity = (pack, callback) => {
  let q = `UPDATE Lot SET Quantity=${pack.Quantity} WHERE idLot=${pack.idLot};`
  db.query(q, (err, resl) => {
    callback(err, resl)
  })
}

const updateInStock = (pack, callback) => {
  let q = `UPDATE Lot SET inStock=${pack.inStock} WHERE idLot=${pack.idLot};`
  db.query(q, (err, resl) => {
    callback(err, resl)
  })
}

module.exports = {
  Create,
  read,
  updatePrix,
  updateQuantity,
  updateInStock,
  readOne,
  read_filter
}