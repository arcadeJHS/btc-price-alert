const btcRatesApiUrl = "https://api.coinbase.com/v2/exchange-rates?currency=BTC";

const rates = await request.get(btcRatesApiUrl);

const ratesJson = await rates.json();

const btcPrice = parseFloat(ratesJson.data.rates.CHF);

const sendAlert = (btcPrice > 39000 || btcPrice < 36000);

echo `BTC Price:${btcPrice}`;

return sendAlert;