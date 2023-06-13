///<reference types="cypress"/>

describe("Dropdown menu tests", () => {

    it("Select State in Practice Form Demo QA", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get("")
    });

    it("Virtual Scroll dropdown menu", () => {
        су.visit("https://primereact.org/dropdown/")
        cy.get(".doc-main .py-3:nth-of-type(8) .p-dropdown").click()

        function searchOption(level=0) {
            if (level>25){
                throw new Error("Exceeded max recursion level")
            }
            cy.get(".doc-main .py-3:nth-of-type(8) .p-dropdown .p-dropdown-label").then(($el => {
                const activeItem = $el.text();
                if (activeItem != "Item #25") {
                    cy.wrap($el).type("{downarrow}")
                    searchOption(++level)
                }
                cy.wrap($el).click()
            }))
        }
        searchOption();
        cy.get(".doc-main .py-3:nth-of-type(8) .p-dropdown .p-dropdown-label")
        .should("have.text", "Item #25")
    });
})