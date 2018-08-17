context('Dashboard Forms', () => {


    beforeEach(function() {
        cy.visit('http://localhost:8080/dashboard')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('form').submit()
    })

    it('should view services', () => {
        cy.visit('http://localhost:8080/services')
        cy.get('tr').should('have.length', 6)
        cy.title().should('eq', 'Statup | Services')
    })

    it('should create services', () => {
        cy.visit('http://localhost:8080/services')
        cy.get('input[name="name"]').type('Google.com')
        cy.get('input[name="domain"]').type('https://google.com')
        cy.get('input[name="interval"]').type('30')
        cy.get('form').submit()
        cy.title().should('eq', 'Statup | Services')
        cy.get('tr').should('have.length', 7)
    })

    it('should delete a service', () => {
        cy.visit('http://localhost:8080/services')
        cy.get(':nth-child(5) > .text-right > .btn-group > .btn-danger').click()
        cy.title().should('eq', 'Statup | Services')
        cy.get('tr').should('have.length', 6)
    })

    it('should view users', () => {
        cy.visit('http://localhost:8080/users')
        cy.get('tr').should('have.length', 2)
        cy.title().should('eq', 'Statup | Users')
    })

    it('should create a new user', () => {
        cy.visit('http://localhost:8080/users')
        cy.get('input[name="username"]').type('hunterlong')
        cy.get('input[name="email"]').type('info@yayaya.com')
        cy.get('input[name="password"]').type('admin')
        cy.get('input[name="password_confirm"]').type('admin')
        cy.get('form').submit()
        cy.get('tr').should('have.length', 3)
    })

    it('should delete a user', () => {
        cy.visit('http://localhost:8080/users')
        cy.get('#user_2 > .btn-group > .btn-danger').click()
        cy.get('tr').should('have.length', 2)
    })

    it('should view help', () => {
        cy.visit('http://localhost:8080/settings')
        cy.get(':nth-child(6) > .nav-link').click()
        cy.title().should('eq', 'Statup | Help')
        cy.get('.col-12 > :nth-child(1)').should('contain', 'Statup')
    })

});