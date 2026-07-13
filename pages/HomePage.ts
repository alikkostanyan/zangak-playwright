import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly booksLink: Locator;
  readonly giftsLink: Locator;
  readonly stationeryLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.booksLink = page
      .getByRole("link", { name: "Գրքեր", exact: true })
      .first();

    this.giftsLink = page
      .getByRole("link", { name: "Նվերներ", exact: true })
      .first();

    this.stationeryLink = page
      .getByRole("link", {
        name: "Գրենական պիտույքներ",
        exact: true
      })
      .first();
  }

  async open(): Promise<void> {
    await this.page.goto("https://zangakbookstore.am/");
  }

  async openBooksSection(): Promise<void> {
    await this.booksLink.click();
  }
  
}

