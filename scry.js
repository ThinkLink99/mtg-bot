const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

const address = "https://api.scryfall.com/";
function returnCard (cardName) {
    return new Promise ((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: `${address}cards/search?q=${cardName}/`,
            dataType: 'json',
            success: function (response) {
                resolve(response.data);
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

module.exports = {
    returnCard: returnCard,
};