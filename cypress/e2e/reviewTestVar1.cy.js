/// <reference types="cypress"/>

describe("Demo QA Multi-tabs", () => {
   
    const expectedMenuItemNames = ["Elements", "Forms", "Alerts, Frame & Windows", "Widgets", "Interactions", "Book Store Application",];

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
    })

  
    it("Form filling", () => {
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