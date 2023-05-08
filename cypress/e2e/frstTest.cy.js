///<reference types="cypress"/>

describe("My First Test", () =>{
    beforeEach(()=>{
        cy.visit("https://example.cypress.io/")
    })
    it("veryfi link", () =>{
        cy.contains("next").click()
        cy.url().should("include", "commands/traversal")
        cy.get("div.container h1").should("have.text", "Traversal")
    })
    it.skip("veryfi link2", () =>{
        cy.contains("next").click()
        cy.url().should("include", "commands/traversal")
        cy.get("div.container h1").should("have.text", "Traversal")
    })
    it("veryfi link3", () =>{
        cy.get("a[href='/commands/actions']").contains("select").click()
        cy.url().should("include", "/commands/actions")
    })
})
