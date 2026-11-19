# Desafio Técnico QA — Automação de Testes (Natalia Honorato)

Projeto de automação de testes de API e interface (UI/BDD) desenvolvido para validação da aplicação **Demoblaze**, com coleções de apoio na pasta `postman`.

## Tecnologias utilizadas
* **UI e BDD:** Cypress, Cucumber (`@badeball/cypress-cucumber-preprocessor`) e JavaScript.
* **API:** Postman e Newman.
* **Controle de versão:** Git e GitHub.

## Pré-requisitos
* **Node.js** (versão LTS recomendada, ex.: v18 ou superior) e **npm**.
* **Git**.

## Instalação e configuração
1. Clone o repositório:
   ```bash
 git clone https://github.com/honoratonatalia/desafio-qa-natalia-honorato.git 


 ## Testes de API (Postman)

Os artefactos da API Demoblaze encontram-se na pasta `postman/`:
- `postman/Desafio QA - Demoblaze API.postman_collection.json`SS
- `postman/Demoblaze QA.postman_environment.json`

### Como executar
1. Abra o **Postman** e clique em **Import**.
2. Selecione e importe os dois ficheiros `.json` da pasta `postman/`.
3. No canto superior direito, selecione o ambiente **Demoblaze QA**.
4. Abra a coleção **Desafio QA - Demoblaze API** e execute os cenários (ou utilize **Run** para correr em sequência).