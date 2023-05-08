///<reference types="cypress"/>

describe("element",()=>{
    before(()=>{
        cy.visit("https://demoqa.com/")
    })
    it("testElements",()=>{
        cy.get("div.category-cards .card-body h5").contains("Elements").click()
        cy.get("#item-0").contains("Text Box").click()
        cy.get("#userName").type("Elena")
    })
})