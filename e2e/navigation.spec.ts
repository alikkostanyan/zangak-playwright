import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("main navigation links are visible", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await expect(homePage.booksLink).toBeVisible();
  await expect(homePage.giftsLink).toBeVisible();
  await expect(homePage.stationeryLink).toBeVisible();
});

test("user can open Books section", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();
  await expect(homePage.booksLink).toBeVisible();

  await homePage.openBooksSection();

  await expect(page).not.toHaveURL("https://zangakbookstore.am/");
});