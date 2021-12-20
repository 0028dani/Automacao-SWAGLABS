import RealizarPedidoElements from "../elements/RealizarPedidoElements";

const realizarPedidoElements = new RealizarPedidoElements

class RealizarPedido {
    AcessarURL (){
        cy.visit(realizarPedidoElements.URL())
    }

    Login () {
        cy.get(realizarPedidoElements.Login())
        .type('standard_user')
    }

    Senha () {
        cy.get(realizarPedidoElements.Senha())
        .type('secret_sauce')
    }

    ClicarBotaoLogin () {
        cy.get(realizarPedidoElements.BotaoLogin())
        .click()
    }

    Ordenar () {
        cy.get(realizarPedidoElements.Ordenacao())
        .select('Price (low to high)')
    }

    ProdutoSauceLabsOnesie (){
        cy.get(realizarPedidoElements.SauceLabsOnesie(),{timeout:400})
        .click()
   
    }

    ProdutoTestAllTheThingsRed (){
        cy.get(realizarPedidoElements.TestAllTheThingsRed())
        .click()
    }

    Carrinho (){
        cy.get(realizarPedidoElements.Carrinho())
        .click()
    }

    Checkout () {
        cy.get(realizarPedidoElements.checkout())
        .click()
    }

    PreenchendoCampoFirstName (){
        cy.get(realizarPedidoElements.FistName())
        .type('Daniela')
    }

    PreenchendoCampoLastName (){
        cy.get(realizarPedidoElements.LastName())
        .type('Arcanjo')
    }

    PreenchendoCampoZipPostalCode (){
        cy.get(realizarPedidoElements.ZipPostalCode())
        .type('101010')
    }

    ClicarBotaoContinue () {
        cy.get(realizarPedidoElements.BotaoContinue())
        .click()
    }

    ClicarBotaoFinish () {
        cy.get(realizarPedidoElements.BotaoFinish())
        .click()
    }
    
    MenasagemDeFinalizacao () {
        cy.contains(realizarPedidoElements.MensagemFinalizacao())
        .should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }
}

export default RealizarPedido