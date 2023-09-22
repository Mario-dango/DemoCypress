context('Example test 01', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Test 01', () => {
        //
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.contains('Completed').click();
        cy.contains('Active').click();
    })

    it('Test 02: Slect using CSS selectors', () => {        
        //
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.get(':nth-child(2) > .view > .toggle').click();
        cy.contains('Completed').click();
    })
    
    it('Test 03: Select using Text Content', () => {        
        //
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.get('label:contains("My long task #1")')
            .parent()
            .find('.toggle')
            .click();
        cy.contains('Completed').click();
    })

    // it .only('test')
    it('Test 04: Assertions', () => {        
        //
        cy.get('.todo-list li').should('have.length', 2);
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.todo-list li').should('have.length', 3);

        cy.get('label:contains("My long task #1")')
            .parent().find('.toggle').click();
        cy.get('label:contains("My long task #1")')
            .parent().parent()
            .should('have.class', 'completed');
        
        cy.get('label:contains("Walk the dog")')
        .parent().find('.toggle').click();
        cy.get('label:contains("Walk the dog")')
        .parent().parent()
        .should('have.class', 'completed');
    })

    it.only('Test 05: navegar entre paginas', () => {
        // cy.visit('https://cucumber.io/')
        var url = 'https://cucumber.io';
        cy.origin(url, () => {
            cy.visit('/')
                //
        })
    })
})