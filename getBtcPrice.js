const btcRatesApiUrl = "https://api.coinbase.com/v2/exchange-rates?currency=BTC";

fetch(btcRatesApiUrl).then(response => response.json()).then(data => {
    const price = data.data.rates.CHF;
    console.log(parseFloat(price));
});
