describe("Testing Foundations", () => {
  it("Testing is a Mindset", () => {
    cy.visit("/");
    cy.getByData("lesson-progress-link-0")
      .eq(1)
      .should("contain", "Testing is a Mindset")
      .click();
    cy.location("pathname").should(
      "equal",
      "/testing-foundations/testing-is-a-mindset",
    );
  });
});
