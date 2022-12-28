const db= require("../db")

const Create = (pack)=>{
    let q= `call InsertPricing(19000,"2020-12-28",1);`
}

const read = (pack,callback)=>{
    let q= `select * from Pricing where idPricing=${pack.idPricing}`
    db.query(q,(err,Result)=>{
        callback(err,Result)
    })
}




module.exports={
    Create,
    read
}