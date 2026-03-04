/// <reference types="Cypress" />

describe("My first test", () => {
  it("Gets, types, and asserts", () => {
    //Arrange

    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");

    //Act
    cy.get(".action-email").type("fake@email.com");

    //Asserts
    cy.get(".action-email").should("contain.value", "@email.com");
  });
});
describe("My second test", () => {
  it("Localhost", () => {
    cy.log("Testing localhost");
    cy.visit("http://localhost:3000");
    cy.get("[data-test='hero-heading']").contains(
      "Testing Next.js Applications with Cypress",
    );
    //h1[data-test='hero-heading']
  });
  it("the features on the homepage are correct", () => {
    cy.visit("http://localhost:3000");
    cy.get("dt").eq(0).contains("4 Courses");
    cy.get("dt").eq(1).contains("25+ Lessons");
  });
});
