import { faker } from "@faker-js/faker";
import { UserDataType } from "../types/user_data.types";
export function maskPassword(value: string) {
  return "*".repeat(value.length);
}

export function generateRandomUser(): UserDataType {
  const password = faker.internet.password({ length: 10, pattern: /[A-Za-z0-9@#]/ });

  return { 
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    gender: faker.helpers.arrayElement(["male", "female"]),
    email: faker.internet.email(),
    password: password,
    confirm_password: password,
  };
}

