var csv = require("csvtojson");
var fs = require('fs');


csv().fromFile('./pokemoninventory.csv')
    .then(pokemon => {
        // users is a JSON array
        // write JSON array to file
         fs.writeFile('pokemon.json', JSON.stringify(pokemon, null,2), (err) => {
            if (err) {
               throw err;
             }
          });

    }).catch(err => {
        // log error if any
        console.log(err);
    });








