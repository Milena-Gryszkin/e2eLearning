describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Testing invalid email", () => {
    cy.getByData("email-input").type("invalidMail");
    cy.get('[data-test="submit-button"]').click();
  });
  it("Testing valid email", () => {
    cy.getByData("email-input").type("validMail@example.com");
    cy.get('[data-test="submit-button"]').click();
    cy.get('[data-test="success-message"]').should("be.visible");
    cy.get('[data-test="email-input"]').should(
      "have.attr",
      "placeholder",
      "Subscribe for Updates",
    );
  });
});
