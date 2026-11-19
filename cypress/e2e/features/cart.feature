# language: en
Feature: Gerenciamento de Carrinho na Demoblaze

  Scenario: Adicionar produtos, remover um e validar persistência após refresh
    Given que estou na página inicial da Demoblaze
    When adiciono 3 produtos ao carrinho: "Samsung galaxy s6", "Apple monitor 24" e "Sony vaio i5"
    And acabo de acessar a página do carrinho de compras
    And removo o produto "Apple monitor 24" do carrinho
    And atualizo a página (refresh)
    Then o monitor não deve estar presente no carrinho
    And devem permanecer apenas o celular e o computador