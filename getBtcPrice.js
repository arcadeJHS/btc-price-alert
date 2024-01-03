// const requestPrice = async () => {
//     const btcRatesApiUrl = "https://api.coinbase.com/v2/exchange-rates?currency=BTC";

//     const rates = await fetch(btcRatesApiUrl);

//     const ratesJson = await rates.json();

//     const btcPrice = ratesJson.data.rates.CHF;

//     console.log(btcPrice);

//     return btcPrice;
// };

// return requestPrice().then(price => parseFloat(price));


const btcRatesApiUrl = "https://api.coinbase.com/v2/exchange-rates?currency=BTC";
let price = 0;

fetch(btcRatesApiUrl).then(response => response.json()).then(data => {
    const btcPrice = data.data.rates.CHF;

    // console.log(btcPrice);

    return btcPrice;
}).then(price => {
    price = parseFloat(price);
    console.log(price);
    return price;
});
