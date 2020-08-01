/// <reference types="cypress" />
import React from "react";
import { mount } from "cypress-react-unit-test";
import ProgressBar from "../../src/ProgressBar";
import GlobalStyle from "../../src/globalStyle";

describe("Progress Bar", () => {
  const mockSteps = ["Step 1", "Step 2", "Step 3", "Step 4"];
  it("renders steps", () => {
    mount(
      <ProgressBar steps={mockSteps}>
        <GlobalStyle />
      </ProgressBar>
    );
    cy.get("ul li")
      .first()
      .should("have.text", "Step 1")
      .next()
      .should("have.text", "Step 2")
      .next()
      .should("have.text", "Step 3")
      .next()
      .should("have.text", "Step 4");
    cy.get("ul li")
      .find("span")
      .and("have.css", "background-color", "rgb(255, 255, 255)")
      .and("have.css", "border-color", "rgb(0, 182, 237)");
  });

  it("renders active steps", () => {
    mount(
      <ProgressBar steps={mockSteps} current={3}>
        <GlobalStyle />
      </ProgressBar>
    );
    cy.get("ul li:nth-child(2)")
      .find("span")
      .and("have.css", "background-color", "rgb(0, 182, 237)")
      .and("have.css", "border-color", "rgb(0, 0, 0)");
    cy.get("ul li:nth-child(3)")
      .find("span")
      .and("have.css", "background-color", "rgb(255, 255, 255)")
      .and("have.css", "border-color", "rgb(0, 182, 237)");
    cy.get("ul li:nth-child(4)")
      .find("span")
      .and("have.css", "border", "3px solid rgb(198, 198, 198)");
  });
});
