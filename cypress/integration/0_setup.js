context('Setup Process', () => {

    it('should go to setup page', () => {
        cy.visit('http://localhost:8080')
        // cy.get('input[name="db_host"]').type('localhost')
        // cy.get('input[name="db_port"]').type('5432')
        // cy.get('input[name="db_user"]').type('root')
        // cy.get('input[name="db_password"]').type('password123')
        // cy.get('input[name="db_database"]').type('root')
        // cy.get('input[name="project"]').type('Demo Tester')
        // cy.get('input[name="description"]').type('This is a test from Crypress!')
        // cy.get('input[name="domain"]').type('http://localhost:8080')
        // cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('input[name="email"]').type('info@domain.com')
        cy.scrollTo('bottom')
        cy.get('#setup_button').click()

        cy.wait(5000)

        cy.get('.header-title').should('contain', 'Demo')
        cy.get('.header-desc').should('contain', 'This is an awesome page')

    })

});