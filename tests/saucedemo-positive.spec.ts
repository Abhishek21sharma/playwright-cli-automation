import { test, expect } from "@playwright/test";

const saucedemoUrl = "https://www.saucedemo.com/";

test.describe("Sauce Demo positive flows", () => {
  test("standard user can log in successfully", async ({ page }) => {
    await page.goto(saucedemoUrl);

    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText("Products", { exact: true })).toBeVisible();
  });

  test("standard user can add a product to the cart", async ({ page }) => {
    await page.goto(saucedemoUrl);

    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    await page.getByRole("button", { name: "Add to cart" }).first().click();

    await expect(
      page.getByRole("button", { name: /Cart, 1 item/ }),
    ).toBeVisible();
  });
});
