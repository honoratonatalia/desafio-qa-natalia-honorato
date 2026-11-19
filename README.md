# Desafio QA Tecnobank — Automação E2E (Demoblaze)

Projeto de automação de testes end-to-end para a aplicação **Demoblaze** utilizando **Cypress**, **Cucumber** (`@badeball/cypress-cucumber-preprocessor`) e **JavaScript**, com coleções de apoio na pasta `postman`.

## Estrutura do projeto

- `cypress/e2e/features/` — Cenários BDD em Gherkin (`cart.feature`, `signup.feature`).
- `cypress/e2e/step_definitions/` — Implementação dos passos (`cart.steps.js`, `signup.steps.js`).
- `postman/` — Coleções e requisições de apoio.
- `cypress.config.js` — Configuração do Cypress e do pré-processador Cucumber.
- `package.json` — Dependências e scripts do projeto.

## Como executar os testes

1. Instale as dependências:
   ```cmd
   npm install 