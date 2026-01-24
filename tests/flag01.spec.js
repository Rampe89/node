import { test, expect } from '@playwright/test';
const emailDict = require('./flag01-dict.js');

test('Progress at 0/13', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toContainText('CyberDefense Lab');
  await expect(page.locator('#progress')).toContainText('Fortschritt: 0/13 Flags gesammelt');
});

test.describe.serial('Flag#01: Phishing', () => {
  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test('Open page', async () => {
    await page.goto('http://localhost:3000/');
	await page.getByText('Phishing-Quiz')
		  .locator('..')
		  .getByRole('link', { name: 'Aufgabe öffnen' })
		  .click();
	await expect(page).toHaveURL('http://localhost:3000/phishingquiz.html');
  });

  test('Solve Phishing-Quiz (takes a few seconds)', async () => {
    // Same page, same state
  	await expect(page).toHaveURL('http://localhost:3000/phishingquiz.html');
	for (let i = 0; i < emailDict.length; i++) {
		const emailHeader = page.locator('#email-header');
		const senderText = await emailHeader.textContent();
		const emailMatch = senderText.match(/[\w.-]+@[\w.-]+\.\w+/);
		const sender = emailMatch ? emailMatch[0] : senderText.trim();
		const emailData = emailDict.find(e => e.sender === sender);
		
		if (emailData.isPhishing) {
		  await page.getByRole('button', { name: 'Phishing', exact: true }).click();
		} else {
		  await page.getByRole('button', { name: 'Kein Phishing' }).click();
		}

		await page.locator('button:has-text("Weiter")').click();
		
	  }
	  const result = page.locator('#result');
	  await expect(result).toBeVisible();
	  await expect(result).toContainText('{CAUGHT_ALL_THE_PHISH}');
	  await page.getByRole('button', {name: 'Zurück zur Startseite'}).click();
  	  await expect(page).toHaveURL('http://localhost:3000/index.html');
  });

  test('Capture Flag#01', async () => {
	  await expect(page).toHaveURL('http://localhost:3000/index.html');
	  const task = page.locator('div.task:has(h3:text("Phishing-Quiz"))');
	  await task.locator('#flag1').fill('{CAUGHT_ALL_THE_PHISH}');
	  page.once('dialog', async dialog => {
		  expect(dialog.message()).toContain('Richtig! Flag für Aufgabe 1 akzeptiert: {CAUGHT_ALL_THE_PHISH}');
		  await dialog.accept();
	  });
	  await task.getByRole('button', { name: 'Prüfen' }).click();
  });

  test('Progress at 1/13', async () => {
	  await expect(page).toHaveURL('http://localhost:3000/index.html');
	  await expect(page.locator('#progress')).toContainText('Fortschritt: 1/13 Flags gesammelt');
  });
		
});
