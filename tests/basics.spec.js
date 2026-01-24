import { test, expect } from '@playwright/test';

test('Startpage exists', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/CyberDefense Lab/);
  await expect(page.locator('h1')).toContainText('CyberDefense Lab');
});

test('About page exists', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  await expect(page).toHaveTitle(/CyberDefense Lab/);
  await expect(page.locator('h1')).toContainText('CyberDefense Lab');
});

test('Geheim page exists', async ({ page }) => {
  await page.goto('http://localhost:3000/geheim.html');
  await expect(page).toHaveTitle(/Geheime Flags/);
  await expect(page.locator('h1')).toContainText('CyberDefense Lab');
});

test('Impressum page exists', async ({ page }) => {
  await page.goto('http://localhost:3000/impressum.html');
  await expect(page).toHaveTitle(/Impressum/);
  await expect(page.locator('h1')).toContainText('Impressum');
});

test('Datenschutz page exists', async ({ page }) => {
  await page.goto('http://localhost:3000/datenschutz.html');
  await expect(page).toHaveTitle(/CyberDefense Lab/);
  await expect(page.locator('h1')).toContainText('Datenschutzerklärung');
});

test('Quellen page exists', async ({ page }) => {
  await page.goto('http://localhost:3000/sources.html');
  await expect(page).toHaveTitle(/Quellen/);
  await expect(page.locator('h1')).toContainText('Quellen');
});

test('Contact page exists', async ({ page }) => {
  await page.goto('http://localhost:3000/contact.html');
  await expect(page).toHaveTitle(/CyberDefense Lab/);
  await expect(page.locator('h2')).toContainText('(Kein echtes) Kontaktformular');
});

