  
// Otetaan mongoose käyttöön
const mongoose = require("mongoose");
// Luodaan skeema
const Schema = mongoose.Schema;
// Luodaan selkätreenit-skeema
let selkätreenit = new Schema ( {

    liikkeet: [{
        liike: {type: String}
       },
       {
        sarjat: {type: Number}
       },
       {
        toistot: {type: Number}
       }
       ]
},

        { collection: "selkätreenit"}
);

// Tarjoa pääsy tähän 
module.exports = mongoose.model("selkätreenit", selkätreenit);