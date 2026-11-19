import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso o site da Demoblaze", () => {
  cy.visit("https://www.demoblaze.com");
});

When("clico no botão de Sign up", () => {
  cy.get('#signin2').click();
});

When("preencho um usuário e senha válidos", () => {
  const randomUser = `user_${Date.now()}`;
  const randomPass = "password123";
  cy.get('#sign-username').type(randomUser, { force: true });
  cy.get('#sign-password').type(randomPass, { force: true });
});

When("preencho um usuário que já existe", () => {
  cy.get('#sign-username').type("testuser123", { force: true });
  cy.get('#sign-password').type("password123", { force: true });
});

When("confirmo o cadastro", () => {
  cy.contains('button', 'Sign up').click();
});

Then("devo ver a mensagem de sucesso {string}", (mensagem) => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal(mensagem);
  });
});

Then("devo ver a mensagem de erro {string}", (mensagem) => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal(mensagem);
  });
});