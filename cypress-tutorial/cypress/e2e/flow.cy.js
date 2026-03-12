describe("Testing Foundations", () => {
  it("Testing is a Mindset", () => {
    cy.visit("/");
    cy.getByData("lesson-0").should("contain", "Testing is a Mindset");
    cy.getByData("lesson-upcoming-0").eq(0).click();
    cy.get('[data-test="course-0"]').find("a").contains("Get started").click();
    cy.location("pathname").should(
      "equal",
      "/testing-foundations/testing-is-a-mindset",
    );
  });
});
