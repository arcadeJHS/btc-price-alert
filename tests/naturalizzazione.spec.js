import { test, expect } from '@playwright/test';

const url = 'https://www.ifc.ti.ch/corsi/tutti-i-corsi/dettaglio/2324asoc0140001_corsi-di-formazione-alla-cittadinanza';

test('Le iscrizioni al corso di naturalizzazione sono aperte?', async ({ page }) => {
  await page.goto(url);
  const btnIscriviti = await page.getByRole('button', { name: /iscriviti/i });
  // await expect(btnIscriviti).toHaveClass(/disabled/);
  await expect(btnIscriviti).not.toBeVisible();
});