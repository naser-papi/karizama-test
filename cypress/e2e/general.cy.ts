/// <reference types="Cypress"/>
import generalData from "../fixtures/general-data.json";

describe("general tests", () => {
  context("navigation tests", () => {
    it("should switch between different pages", () => {
      cy.wrap(generalData.pages).each((page: any) => {
        cy.visit(page.url);
        cy.title().should("eq", page.title);
      });
    });
  });

  context("layout tests", () => {
    it("should switch between dark and light theme", () => {
      cy.visit("/");
      cy.get("[data-cy='themeSwitch']").get("[type='checkbox']").as("themeSwitch");
      cy.get("@themeSwitch").should("have.value", "false");
      cy.get("body").should("have.backgroundColor", generalData.theme.lightBackground);
      cy.get("@themeSwitch").click();
      cy.get("body").should("have.backgroundColor", generalData.theme.darkBackground);
    });
  });

  context("auth tests", () => {
    it.only("should redirect to login without authentication", function () {
      cy.visit("/home");
      cy.location("pathname").should("contain", "/login");
    });
  });
});
