class HomePage {
    constructor() {
        this.numberOfSelectedCheckboxes = () => cy.get(`[data-cy="box-2-selected-count"]`);
        this.returnCheckboxByNumber = (number) => cy.get(`[data-cy="box-2-checkboxes"] input`).eq(number);
    }

    checkOneCheckboxAndCheck(number) {
        this.returnCheckboxByNumber(number)
            .check();
        this.numberOfSelectedCheckboxes()
            .invoke('text')
            .should('equal', '1');
    }

    checkTwoCheckboxAndCheck(numberOne, numberTwo) {
        this.returnCheckboxByNumber(numberOne)
            .check();
        this.returnCheckboxByNumber(numberTwo)
            .check();
        this.numberOfSelectedCheckboxes()
            .invoke('text')
            .should('equal', '2');
    }

    checkThreeCheckboxAndCheck(numberOne, numberTwo, numberThree) {
        this.returnCheckboxByNumber(numberOne)
            .check();
        this.returnCheckboxByNumber(numberTwo)
            .check();
        this.returnCheckboxByNumber(numberThree)
            .check();
        this.numberOfSelectedCheckboxes()
            .invoke('text')
            .should('equal', '3');
    }

    uncheckCheckboxAndCheck(numberOne, numberTwo, numberThree) {
        this.returnCheckboxByNumber(numberOne)
            .check();
        this.returnCheckboxByNumber(numberTwo)
            .check();
        this.returnCheckboxByNumber(numberThree)
            .check();
        this.returnCheckboxByNumber(numberOne)
            .uncheck();
        this.returnCheckboxByNumber(numberTwo)
            .uncheck();
        this.returnCheckboxByNumber(numberThree)
            .uncheck();
        this.numberOfSelectedCheckboxes()
            .invoke('text')
            .should('equal', '0');
    }
}

module.exports = HomePage;