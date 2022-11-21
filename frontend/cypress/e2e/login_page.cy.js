describe('A tela de Login', () => {
  it('carrega normalmente', () => {
    cy.visit('/')
  })
  it('loga com sucesso', () => {
    cy.visit('/')
    cy.get('input[name=username]').type('michelet')
    cy.get('input[name=password]').type('123456')
    cy.get('form').submit()
    cy.url().should('include', '/profile')
    cy.getCookies()
      .should('have.length', 1)
      .then((cookies) => {
        expect(cookies[0]).to.have.property('name', 'token')
      })
  })
})
