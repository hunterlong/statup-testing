context('Setup Process', () => {

    it('should go to setup page', () => {
        cy.visit('http://localhost:8080')
        cy.get('input[name="db_host"]').clear().type(Cypress.env('DB_HOST'))
        cy.get('input[name="db_port"]').clear().type('5432')
        cy.get('input[name="db_user"]').clear().type(Cypress.env('DB_USER'))
        cy.get('input[name="db_password"]').clear().type(Cypress.env('DB_PASS'))
        cy.get('input[name="db_database"]').clear().type(Cypress.env('DB_DATABASE'))
        cy.get('input[name="project"]').clear().type('Demo Tester')
        cy.get('input[name="description"]').clear().type('This is a test from Crypress!')
        cy.get('input[name="domain"]').clear().type('http://localhost:8080')
        cy.get('input[name="username"]').clear().type('admin')
        cy.get('input[name="email"]').clear().type('info@domain.com')
        cy.get('input[name="password"]').clear().type('admin')
        cy.scrollTo('bottom')
        cy.get('#setup_button').click()
        cy.wait(5000)
        cy.get('.header-title').should('contain', 'Demo Tester')
        cy.get('.header-desc').should('contain', 'This is a test from Crypress!')
        cy.scrollTo('bottom')
        cy.get('.service_li').should('have.length', 4)
        cy.get('.card').should('have.length', 4)
    })
    
});