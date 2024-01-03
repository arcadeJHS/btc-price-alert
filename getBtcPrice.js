const requestPrice = async () => {
    const btcRatesApiUrl = "https://api.coinbase.com/v2/exchange-rates?currency=BTC";

    const rates = await fetch(btcRatesApiUrl);

    const ratesJson = await rates.json();

    const btcPrice = parseFloat(ratesJson.data.rates.CHF);

    return btcPrice;
};

return requestPrice().then((btcPrice) => btcPrice);