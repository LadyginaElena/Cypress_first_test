/// <reference types="cypress"/>

describe("Demo QA Alert window", () => {

    beforeEach(() => {
        //cy.intercept('GET','https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
        //cy.intercept('POST','https://stats.g.doubleclick.net*')
        cy.visit("https://demoqa.com/alerts")
    })


    it("Verification of the alert window ", () => {
        cy.get("#alertButton").click()
        cy.on("window:alert", (str) => {
            expect(str).to.equal("You clicked a button")
        })
    })


    it("Verification of the confirm window (click OK)", () => {
        cy.get("#confirmButton").click()
        cy.on("window:confirm", (str) => {
            expect(str).to.equal("Do you confirm action?")
        //cy.on("window:confirm",()=> false)
        })
        cy.get("#confirmResult")
            .should("contain", "You selected ")
            .and("contain", "Ok") //("contain", "Cancel") 
    })

    it("Verification of the prompt window", () => {
        cy.window().then((inputData)=>{
            cy.get("#promtButton").click()
            cy.stub(inputData, "prompt").returns("JavaScript")
            cy.get("#promptResult")
            .should("contain", "You entered ")
            .and("contain", "JavaScript")
        })
        
    })
})