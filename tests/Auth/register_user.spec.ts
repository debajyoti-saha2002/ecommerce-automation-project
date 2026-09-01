import { test, expect } from "@playwright/test";
import { RegisterUser } from "../../pages/register_user.pom";
import { generateRandomUser } from "../../utils/helperFunctions";
//import user_test_data from "../../fixtures/test_data_user.json";

test("TC_001 - Register with a New Valid User", async ({ page }) => {
  await test.step(`Redirect The Registration Page`, async () => {
    await page.goto("/register");
    await page.waitForTimeout(1000);
  });
  const user_test_data = generateRandomUser();
  const user = new RegisterUser(page, user_test_data);
  await user.fillRegisterForm();
  await user.submitForm();
  await test.step(`Expect Page Should Display "Your registration completed"`, async () => {
    await expect(page.locator(".result").first()).toHaveText("Your registration completed");
  });
});
