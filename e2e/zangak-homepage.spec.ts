import { test, expect } from "@playwright/test";

test("Zangak homepage opens successfully", async ({ page }) => {
  await page.goto("https://zangakbookstore.am/");

  await expect(page).toHaveURL(/zangakbookstore\.am/);
  await expect(page).toHaveTitle(/"Զանգակ Գրատուն"/i);

  const searchInput = page.getByPlaceholder(/search/i);
  await expect(searchInput).toBeVisible();
});


