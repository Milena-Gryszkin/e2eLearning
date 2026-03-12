describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Course: Testing Your First Next.js Application", () => {
    cy.getByData("course-0").find("a").contains("Get started").click();
    cy.location("pathname").should("equal", "/testing-your-first-application");
  });
});
describe("User Journey 2", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("a user can find a course on the home page and complete the courses lessons", () => {
    cy.getByData("course-0").find("a").contains("Get started").click();
    cy.location("pathname").should("equal", "/testing-your-first-application");
  });
});
describe("User Journey 3", () => {
  it("a user can start a course", () => {
    cy.visit("/testing-your-first-application");
    cy.getByData("next-lesson-button")
      .should("have.text", "Start Course")
      .click();
    cy.location("pathname").should(
      "equal",
      "/testing-your-first-application/app-install-and-overview",
    );
  });
});
describe("User Journey 4", () => {
  it("a user can complete the first lesson and move to the next one", () => {
    cy.visit("/testing-your-first-application/app-install-and-overview");
    cy.getByData("multiple-choice-challenge").contains(
      "Vestibulum congue consectetur quam in mattis?",
    );
    cy.getByData("challenge-answer-0").click();
    cy.getByData("next-lesson-button")
      .contains("Next Lesson")
      .should("be.visible")
      .click();
    cy.location("pathname").should(
      "equal",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test",
    );
  });
});
describe("User Journey 5", () => {
  it("a user can complete the second lesson and move to the next one", () => {
    cy.visit(
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test",
    );
    cy.getByData("multiple-choice-challenge").contains(
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
  });
});
describe("User Journey 6", () => {
  it("a user can complete a course", () => {
    cy.visit(
      "/testing-your-first-application/setting-up-data-before-each-test",
    );
    cy.getByData("multiple-choice-challenge").contains(
      "Vestibulum congue consectetur quam in mattis?",
    );
    cy.getByData("challenge-answer-0").click();
    cy.getByData("next-lesson-button")
      .contains("Complete Course")
      .should("be.visible")
      .click();
    cy.location("pathname").should("equal", "/");
  });
});
