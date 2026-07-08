import { test, expect } from "@playwright/test";

test("User can open Books section", async ({ page }) => {
  await page.goto("https://zangakbookstore.am/");

  const booksLink = page.getByRole("link",{
    name: "Գրքեր",
    exact: true
  }).first();

  await expect(booksLink).toBeVisible();
  await booksLink.click();

  await expect(page).not.toHaveURL("https://zangakbookstore.am/");
});
