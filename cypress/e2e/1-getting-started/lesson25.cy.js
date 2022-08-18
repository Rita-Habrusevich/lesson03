const HomePage = require('../../pageObjects/homePage.cy');
const home = new HomePage();

describe('Fourth part of application', () => {
    beforeEach(() => {
        cy.visit('example-4');
    });


    it('Option One should highlight after click', () => {
        cy.get('.box-1-list-item:nth-child(1)')
            .click();

        cy.get('.lgSOuT.box-1-list-item:nth-child(1)')
            .should('be.visible');
    });

    it('Option Two should highlight after click', () => {
        cy.get('.box-1-list-item:nth-child(2)')
            .click();

        cy.get('.lgSOuT.box-1-list-item:nth-child(2)')
            .should('be.visible');
    });

    it('Option Three should highlight after click', () => {
        cy.get('.box-1-list-item:nth-child(3)')
            .click();

        cy.get('.lgSOuT.box-1-list-item:nth-child(3)')
            .should('be.visible');
    });

    it('Option One should be selected after double click', () => {
        cy.get('.box-1-list-item:nth-child(1)')
            .dblclick();

        cy.get('[data-cy=box-1-selected-name]')
            .invoke('text')
            .should('equal', 'Option One');
    });

    it('Option Two should be selected after double click', () => {
        cy.get('.box-1-list-item:nth-child(2)')
            .dblclick();

        cy.get('[data-cy=box-1-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two');
    });

    it('Option Three should be selected after double click', () => {
        cy.get('.box-1-list-item:nth-child(3)')
            .dblclick();

        cy.get('[data-cy=box-1-selected-name]')
            .invoke('text')
            .should('equal', 'Option Three');
    });



    it('One option should be checked after check', () => {
        home.checkOneCheckboxAndCheck(0)
    });

    it('Two options should be checked after check', () => {
        home.checkTwoCheckboxAndCheck(0, 2)
    });

    it('Three options should be checked after check', () => {
        home.checkThreeCheckboxAndCheck(0, 1, 2)
    });

    it('Zero options should be checked after uncheck', () => {
        home.uncheckCheckboxAndCheck(0, 1, 2)
    });



    it('Option One should be selected after click in dropdown', () => {
        cy.selectValueAndCheck('Option One');
    });

    it('Option Two should be selected after click in dropdown', () => {
        cy.selectValueAndCheck('Option Three');
    });

    it('Option Three should be selected after click in dropdown', () => {
        cy.selectValueAndCheck('Option Two');
    });
});