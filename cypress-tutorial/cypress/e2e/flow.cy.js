describe("Testing Foundations", () => {
  it("Testing is a Mindset", () => {
    cy.visit("/");
    cy.getByData("lesson-progress-link-0")
      .should("contain", "Testing is a Mindset")
      .eq(1)
      .click();
    cy.location("pathname").should(
      "equal",
      "/testing-foundations/testing-is-a-mindset",
    );
  });
});
