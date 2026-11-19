import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial da Demoblaze", () => {
  cy.visit("https://www.demoblaze.com");
});

When("adiciono 3 produtos ao carrinho: {string}, {string} e {string}", (celular, computador, monitor) => {
  cy.intercept("POST", "**/addtocart").as("addToCart");

  // 1. Celular (Samsung galaxy s6)
  cy.visit("https://www.demoblaze.com/prod.html?idp_=1");
  cy.contains("Add to cart", { timeout: 10000 }).should("be.visible").click();
  cy.wait("@addToCart");

  // 2. Computador (Sony vaio i5)
  cy.visit("https://www.demoblaze.com/prod.html?idp_=8");
  cy.contains("Add to cart", { timeout: 10000 }).should("be.visible").click();
  cy.wait("@addToCart");

  // 3. Monitor (Apple monitor 24)
  cy.visit("https://www.demoblaze.com/prod.html?idp_=10");
  cy.contains("Add to cart", { timeout: 10000 }).should("be.visible").click();
  cy.wait("@addToCart");
});

When("acabo de acessar a página do carrinho de compras", () => {
  cy.get("#cartur", { timeout: 10000 }).should("be.visible").click();
});

When("removo o produto {string} do carrinho", (produto) => {
  cy.intercept("POST", "**/deleteitem").as("deleteItem");
  cy.contains("tr", produto, { timeout: 15000 }).contains("Delete").click();
  cy.wait("@deleteItem");
});

When("atualizo a página \\(refresh\\)", () => {
  cy.reload();
});

Then("o monitor não deve estar presente no carrinho", () => {
  cy.get("#tbodyid", { timeout: 10000 }).should("not.contain", "Apple monitor 24");
});

Then("devem permanecer apenas o celular e o computador", () => {
  cy.get("#tbodyid", { timeout: 10000 }).find("tr").should("have.length", 2);
});