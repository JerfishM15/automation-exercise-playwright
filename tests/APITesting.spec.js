const { test, expect, request } = require("@playwright/test");

test("Get all products list", async () => {
  const apicontext = await request.newContext();
  const response = await apicontext.get(
    "https://automationexercise.com/api/productsList"
  );
  expect(await response.status()).toBe(200);
  const responseBodyJson = await response.json();
  console.log("GET Response:", responseBodyJson);
});

test("Post to all products list", async () => {
  const apicontext = await request.newContext();
  const response = await apicontext.post(
    "https://automationexercise.com/api/productsList"
  );
  expect(await response.status()).toBe(200);
  const responseBodyJson = await response.json();
  console.log("POST Response:", responseBodyJson);
});
