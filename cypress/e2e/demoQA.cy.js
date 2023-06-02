///<reference types="cypress"/>

describe("Demo QA tests", () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com');
    })
    const expectedMenuItemNames = ["Elements", "Forms", "Alerts, Frame & Windows", "Widgets", "Interactions", "Book Store Application",]
    it("Verification menu item names", () => {
        cy.get('.card').should("have.length", expectedMenuItemNames.length).each(($el, idx) => {
            expect($el.text()).to.be.equal(expectedMenuItemNames[idx]);
        });

    })
    it("Verification menu item names Variant 2", () => {
        cy.get('.card')
            .should("have.length", expectedMenuItemNames.length)
            .then(($els) => {
                return Cypress.$.makeArray($els).map($el => $el.innerText)
            })
            .should("deep.equal", expectedMenuItemNames)
    });

    it("Verification menu item names Variant 3", () => {
        cy.get('.card')
            .should("have.length", expectedMenuItemNames.length)
            .then(($els) => {
                let actual = Cypress.$.makeArray($els).map($el => $el.innerText)
                expect(actual).to.be.deep.equal(expectedMenuItemNames)
            })
    });

    it("Verification menu item names Variant 4", () => {
        cy.get('.card')
            .should("have.length", expectedMenuItemNames.length)
            .then(($els) => {
                return Cypress._.map($els, "innerText")
            })
            .should("deep.equal", expectedMenuItemNames)
    });
    it.only("Form filling", () => {
        cy.get('.card').contains("Forms").click()
        cy.get(".element-group:nth-child(2)>div").click()
        cy.get("#firstName")
            .should("have.text", "")
            .type("Stan")
            .should("have.value", "Stan")
        cy.get("#submit").click()
        cy.get("#firstName").should("have.css", "border-color", "rgb(40, 167, 69)")
    });
})