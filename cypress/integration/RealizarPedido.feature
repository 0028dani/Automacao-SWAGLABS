Feature: Realizar Pedido de 3 produtos

Scenario: Realizar pedido
Given que estou no site Le Biscuit 
When escolher os produtos 
And finalizar a compra
Then o pedido apresenta finalizado com sucesso
