import { test, expect } from "@playwright/test";
import mockUsersResponse from "./fixtures/mockUsersResponse.json";
import mockUserResponse from "./fixtures/mockUserResponse.json";

test.beforeEach(async ({ page }) => {
  await page.route("https://dummyapi.io/data/v1/user", (route) =>
    route.fulfill({
      status: 200,
      body: JSON.stringify(mockUsersResponse),
    }),
  );
});

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("User list application");
});

test("fake login", async ({ page }) => {
  await page.goto("/");

  await page.getByTestId("login-button").click();

  await expect(page.getByTestId("logout-text")).toHaveText("Logout");
});

test("should show modal", async ({ page }) => {
  await page.route(
    "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca",
    (route) =>
      route.fulfill({
        status: 200,
        body: JSON.stringify(mockUserResponse),
      }),
  );
  await page.goto("/");
  await page.getByTestId("login-button").click();
  await page.getByTestId("select-user-60d0fe4f5311236168a109ca").click();
  await expect(page.getByTestId("modal-wrapper")).toBeVisible();
  await expect(
    page.getByTestId("modal-wrapper").getByRole("img", { name: "Andersen" }),
  ).toBeVisible();
  await expect(page.getByText("ms. Sara Andersen")).toBeVisible();
});
