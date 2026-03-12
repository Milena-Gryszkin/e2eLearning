describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Course:Testing Your First Next.js Application", () => {
    cy.getByData("course-0").find("a").eq(3).click();
    cy.location("pathname").should("equal", "/testing-your-first-application");
    cy.location("host").should("eq", "localhost:3000");
  });
});
describe("User Journey 2", () => {
  it("a user can find a course on the home page and navigate to it", () => {
    cy.visit("http://localhost:3000");
    cy.getByData("course-0").find("a").contains("Get started").click();
    cy.location("pathname").should("equal", "/testing-your-first-application");
    cy.location("host").should("eq", "localhost:3000");
  });
});
describe("User Journey 3", () => {
  it("a user can start a course", () => {
    cy.visit("http://localhost:3000/testing-your-first-application");
    cy.get('[data-test="next-lesson-button"]')
      .should("have.text", "Start Course")
      .click();
    cy.location("pathname").should(
      "equal",
      "/testing-your-first-application/app-install-and-overview",
    );
    cy.location("host").should("eq", "localhost:3000");
  });
});
describe("User Journey 4", () => {
  it("a user can complete the first lesson and move to the second one", () => {
    cy.visit(
      "http://localhost:3000/testing-your-first-application/app-install-and-overview",
    );
    cy.get('[data-test="multiple-choice-challenge"]').contains(
      "Vestibulum congue consectetur quam in mattis?",
    );
    cy.getByData("challenge-answer-0").click();
    cy.getByData("next-lesson-button").contains("Next Lesson").click();
    cy.location("pathname").should(
      "equal",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test",
    );
    cy.location("host").should("eq", "localhost:3000");
  });
});
describe("User Journey 5", () => {
  it("a user can complete the second lesson and move to the third one", () => {
    cy.visit(
      "http://localhost:3000/testing-your-first-application/installing-cypress-and-writing-our-first-test",
    );
    cy.get('[data-test="multiple-choice-challenge"]').contains(
      "Vestibulum congue consectetur quam in mattis?",
    );
    cy.getByData("challenge-answer-0").click();
    cy.getByData("next-lesson-button")
      .contains("Next Lesson")
      .should("be.visible")
      .click();
    cy.location("pathname").should(
      "equal",
      "/testing-your-first-application/setting-up-data-before-each-test",
    );
    cy.location("host").should("eq", "localhost:3000");
  });
});
describe("User Journey 6", () => {
  it("a user can complete a course", () => {
    cy.visit(
      "http://localhost:3000/testing-your-first-application/setting-up-data-before-each-test",
    );
    cy.get('[data-test="multiple-choice-challenge"]').contains(
      "Vestibulum congue consectetur quam in mattis?",
    );
    cy.getByData("challenge-answer-0").click();
    cy.getByData("next-lesson-button").contains("Complete Course").click();
    cy.location("host").should("eq", "localhost:3000");
  });
});
