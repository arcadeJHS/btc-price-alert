import { test, expect } from '@playwright/test';

test('Check BTC price', async ({ request }) => {
  const btcRatesApiUrl = "https://api.coinbase.com/v2/exchange-rates?currency=BTC";

  const rates = await request.get(btcRatesApiUrl);

  expect(rates.ok()).toBeTruthy();

  const ratesJson = await rates.json();

  const btcPrice = ratesJson.data.rates.CHF;

  console.log(`BTC Price: ${btcPrice}`);
});