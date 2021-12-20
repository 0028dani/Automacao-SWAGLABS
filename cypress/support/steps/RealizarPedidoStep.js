import RealizarPedido from "../pageobjects/RealizarPedidoPage"

const realizarPedido = new RealizarPedido

Given(/^que estou no site SWAGLABS$/, () => {
	realizarPedido.AcessarURL()
	realizarPedido.Login()
	realizarPedido.Senha()
	realizarPedido.ClicarBotaoLogin()	
});

When(/^escolher os produtos$/, () => {
	realizarPedido.Ordenar()
	realizarPedido.ProdutoSauceLabsOnesie()
	realizarPedido.ProdutoTestAllTheThingsRed()
});

And(/^finalizar a compra$/, () => {
	realizarPedido.Carrinho()
	realizarPedido.Checkout()
	realizarPedido.PreenchendoCampoFirstName()
	realizarPedido.PreenchendoCampoLastName()
	realizarPedido.PreenchendoCampoZipPostalCode()
	realizarPedido.ClicarBotaoContinue()
	realizarPedido.ClicarBotaoFinish()
});	

Then(/^o pedido apresenta finalizado com sucesso$/, () => {
	realizarPedido.MenasagemDeFinalizacao()
});



