
const express = require('express');
const RProduit= require("./routers/Produit")
app = express()

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("test");
});

app.post('/', (req, res) => {
    console.log(req.body.hasOwnProperty("date"))

});

app.use("/Produit",RProduit)

app.listen(3000, () => {
    console.log(`Server started on port`);

});

