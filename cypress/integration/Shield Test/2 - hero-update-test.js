describe("Updating heroes at S.H.I.E.L.D", function() {
  it("Typing the credentials and logging in", function() {
    cy.visit(
      "http://shield-20191217163424-hostingbucket-dev.s3-website.eu-central-1.amazonaws.com/"
    );
    cy.get("[data-test=username-input]").type("andrew");
    cy.get("[data-test=sign-in-password-input]").type("Andrew1996");
    cy.get("[data-test=sign-in-sign-in-button]").click();
  });

  it("Retrieving Star-Lord at S.H.I.E.L.D", function() {
    cy.get("[data-cy=hero-tile]")
      .contains("[data-cy=hero-tile]", "Star-Lord")
      .first()
      .find("[data-cy=update-hero-button]")
      .click();
    cy.get("[data-cy=update-hero-name-field]")
      .clear()
      .type("Peter Quill");
    cy.get(".modal-footer > [data-cy=update-hero-button]").click();
  });

  it("Checking the updated hero at S.H.I.E.L.D", function() {
    cy.wait(3000);
    cy.get("[data-cy=hero-tile]").should("not.contain", "Star-Lord");
    cy.get("[data-cy=hero-tile]").should("contain", "Peter Quill");
  });

  it("Logging Out", function() {
    cy.get("[data-cy=logout-button]").click();
  });
});
