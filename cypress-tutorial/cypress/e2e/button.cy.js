describe("User Journey", () => {
  it("a user can find a course, complete all lessons, and finish the course", () => {
    // Step 1: Find the course on the home page and navigate to it
    cy.visit("/");
    cy.getByData("course-0").find("a").contains("Get started").click();
    cy.location("pathname").should("equal", "/testing-your-first-application");

    // Step 2: Start the course
    cy.getByData("next-lesson-button")
      .should("have.text", "Start Course")
      .click();
    cy.location("pathname").should(
      "equal",
      "/testing-your-first-application/app-install-and-overview",
    );

    // Step 3: Complete the first lesson and move to the next one
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

    // Step 4: Complete the second lesson and move to the next one
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

    // Step 5: Complete the final lesson and finish the course
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
