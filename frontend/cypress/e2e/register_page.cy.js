describe('A tela de Cadastro', () => {  
  it('carrega normalmente', () => {
    cy.visit('/register')
  })
  it('cadastra um novo usuário', () => {
    cy.request("delete",'http://localhost:3000/api/delete',{username:"michelet"})
    cy.visit('/register')
    cy.get('input[name=username]').type('michelet')
    cy.get('input[name=email]').type('michelet@usp.br')
    cy.get('input[name=password]').type('123456')
    cy.get('form').submit()
    cy.url().should('eq', 'http://localhost:3000/')
  })
  it('apresenta erro com usuário repetido', () => {
    cy.visit('/register')
    cy.get('input[name=username]').type('michelet')
    cy.get('input[name=email]').type('michelet@usp.br')
    cy.get('input[name=password]').type('123456')
    cy.get('form').submit()
    cy.get('#status_message').should('have.text', 'Um usuário com esse login já existe.')
  })
})
