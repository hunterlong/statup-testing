context('Settings Forms', () => {

    beforeEach(function() {
        cy.visit('http://localhost:8080/dashboard')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('form').submit()
    })

    it('should edit main settings', () => {
        cy.visit('http://localhost:8080/settings')
        cy.get('input[name="project"]').clear().type('Project Updated')
        cy.get('input[name="description"]').clear().type('Cypress can test!')
        cy.get('input[name="domain"]').clear().type('http://0.0.0.0:8080')
        cy.get('#v-pills-home > form').submit()
        cy.title().should('eq', 'Statup | Settings')
        cy.get('input[name="project"]').should('have.value', 'Project Updated')
        cy.get('input[name="description"]').should('have.value', 'Cypress can test!')
        cy.get('input[name="domain"]').should('have.value', 'http://0.0.0.0:8080')
    })


    it('should edit email settings', () => {
        cy.visit('http://localhost:8080/settings')
        cy.get('#v-pills-email-tab').click()
        cy.wait(500)
        cy.get('input[name="host"]').clear().type('smtp.server.com')
        cy.get('input[name="username"]').clear().type('smtpusername')
        cy.get('input[name="password"]').clear().type('smtppassword')
        cy.get('input[name="port"]').clear().type('587')
        cy.get('input[name="address"]').clear().type('info@socialeck.com')
        cy.get('#v-pills-email > form').submit()
        cy.title().should('eq', 'Statup | Settings')
        cy.get('#v-pills-email-tab').click()
        cy.wait(500)
        cy.get('input[name="host"]').should('have.value', 'smtp.server.com')
    })

    it('should edit slack settings', () => {
        cy.visit('http://localhost:8080/settings')
        cy.get('#v-pills-slack-tab').click()
        cy.wait(500)
        cy.get('input[name="slack_url"]').clear().type('https://webhook.slack.com')
        cy.get('#v-pills-slack > form').submit()
        cy.title().should('eq', 'Statup | Settings')
        cy.get('#v-pills-slack-tab').click()
        cy.wait(500)
        cy.get('input[name="slack_url"]').should('have.value', 'https://webhook.slack.com')
    })


});