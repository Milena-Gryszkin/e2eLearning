describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  context("Button", () => {
    it.only("Course:Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).click();
      cy.location("pathname").should(
        "equal",
        "/testing-your-first-application",
      );
      cy.location("host").should("eq", "localhost:3000");
    });
  });
});
