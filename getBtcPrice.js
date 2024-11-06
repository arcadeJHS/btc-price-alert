const btcRatesApiUrl = "https://api.coinbase.com/v2/exchange-rates?currency=BTC";

fetch(btcRatesApiUrl).then(response => response.json()).then(data => {
    const price = data.data.rates.USD;
    // the console.log is required to return the value to the step
    console.log(parseFloat(price));
});
