# language: en
Feature: Cadastro de Usuário na Demoblaze

  Scenario: Criação de um novo usuário com dados válidos
    Given que acesso o site da Demoblaze
    When clico no botão de Sign up
    And preencho um usuário e senha válidos
    And confirmo o cadastro
    Then devo ver a mensagem de sucesso "Sign up successful."

  Scenario: Tentar cadastrar com um usuário já existente
    Given que acesso o site da Demoblaze
    When clico no botão de Sign up
    And preencho um usuário que já existe
    And confirmo o cadastro
    Then devo ver a mensagem de erro "This user already exist."