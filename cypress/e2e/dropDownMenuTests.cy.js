///<reference types="cypress"/>

describe("Dropdown menu tests", () => {
    const itemForSearch = "Item #25";

    it.skip("Select State in Practice Form Demo QA", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.get("")
    });

    it("Virtual Scroll dropdown menu", () => {
        су.visit("https://primereact.org/dropdown/")
        cy.get(".doc-main .py-3:nth-of-type(8) .p-dropdown").click()

        function searchOption(item, level=0) {
            if (level>25){
                throw new Error("Exceeded max recursion level")
            }
            cy.get(".doc-main .py-3:nth-of-type(8) .p-dropdown .p-dropdown-label").then(($el => {
                const activeItem = $el.text();
                if (activeItem != item) {
                    cy.wrap($el).type("{downarrow}")
                    searchOption(++level)
                }
                cy.wrap($el).click()
            }))
        }
        searchOption(itemForSearch);
        cy.get(".doc-main .py-3:nth-of-type(8) .p-dropdown .p-dropdown-label")
        .should("have.text", itemForSearch)
    });
})