describe('A tela de Cadastro', () => {
  it('carrega normalmente', () => {
    cy.visit('/register')
  })
  it('cadastra um novo usuário', () => {
    cy.visit('/register')
    cy.get('input[name=username]').type('michelet')
    cy.get('input[name=email]').type('michelet@usp.br')
    cy.get('input[name=password]').type('123456')
    cy.get('form').submit()
    cy.url().should('eq', '/')
  })
})
