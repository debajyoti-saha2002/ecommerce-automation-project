import { test, expect, Page, Locator } from "@playwright/test";
import { UserDataType } from "../types/user_data.types";
import { maskPassword } from "../utils/helperFunctions";

export class RegisterUser {
  readonly page: Page;
  readonly user_data: UserDataType;
  readonly gender_male_radio_button_locator: Locator;
  readonly gender_female_radio_button_locator: Locator;
  readonly first_name_locator: Locator;
  readonly last_name_locator: Locator;
  readonly email_locator: Locator;
  readonly passowrd_locator: Locator;
  readonly conf_password: Locator;
  readonly register_button: Locator;

  constructor(page: Page, user_data: UserDataType) {
    this.page = page;
    this.user_data = user_data;
    this.gender_male_radio_button_locator = page.locator("#gender-male");
    this.gender_female_radio_button_locator = page.locator("#gender-male");
    this.first_name_locator = page.locator("#FirstName");
    this.last_name_locator = page.locator("#LastName");
    this.email_locator = page.locator("#Email");
    this.passowrd_locator = page.locator("#Password");
    this.conf_password = page.locator("#ConfirmPassword");
    this.register_button = page.locator("[name='register-button']");
  }
  fillRegisterForm = async () => {
    await test.step(`Select The Gender ${this.user_data.gender}`, async () => {
      if (this.user_data.gender.toUpperCase() === "MALE") {
        await this.gender_male_radio_button_locator.click();
      } else {
        await this.gender_female_radio_button_locator.click();
      }
    });
    await test.step(`Enter the First Name - ${this.user_data.first_name}`, async () => {
      await this.first_name_locator.fill(this.user_data.first_name);
    });
    await test.step(`Enter the Last Name - ${this.user_data.last_name}`, async () => {
      await this.last_name_locator.fill(this.user_data.last_name);
    });
    await test.step(`Enter the Email - ${this.user_data.email}`, async () => {
      await this.email_locator.fill(this.user_data.email);
    });
    await test.step(`Enter the Password - ${maskPassword(this.user_data.password)}`, async () => {
      await this.passowrd_locator.fill(this.user_data.password);
    });
    await test.step(`Enter the Confirm Password - ${maskPassword(this.user_data.confirm_password)}`, async () => {
      await this.conf_password.fill(this.user_data.confirm_password);
    });
  };
  submitForm = async () => {
    await test.step(`Click in the Submit Button`, async () => {
      await this.register_button.click();
    });
  };
}
