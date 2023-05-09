///<reference types="cypress"/>

describe("Test Open Weather", ()=>{
    before(()=>{
        cy.viewport(1920,1000)
        cy.visit("https://openweathermap.org")
    })

    it("verify link", ()=>{
        cy.get("a[href='/price']").contains("Pricing").click()
        cy.get("h1.breadcrumb-title").should("have.text", "Pricing")
    })
})