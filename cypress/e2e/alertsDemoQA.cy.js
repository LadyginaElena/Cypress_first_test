/// <reference types="cypress"/>

describe("Demo QA Alert window", () => {

    beforeEach(() => {
        cy.visit("https://demoqa.com/alerts/")
    })


    it("Verification of the alert window", () => {
        cy.get("#alertButton").click()
        cy.on("window:alert", (str) => {
            expect(str).to.equal("You clicked a button")
        })
    })


    it("Verification of the confirm windiw", () => {
        cy.get("#confirmButton").click()
        cy.on("window:confirm", (str) => {
            expect(str).to.equal("Do you confirm action?")
            //cy.on("window:confirm",()=> false)
        })
        cy.get("#confirmResult")
            .should("contain", "You selected ")
            .and("contain", "Ok") //("contain", "Cancel") 

    })
})