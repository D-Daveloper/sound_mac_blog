import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderComponent from "../components/HeaderComponent";

test("renders the header with logo and navigation links", () => {
  render(<HeaderComponent />);

  // Check if the logo is present
  const logoElement = screen.getByAltText("logo");
  expect(logoElement).toBeInTheDocument();

  // Check if the navigation links are present
  const homeLink = screen.getByLabelText(/Home/i);
  const aboutLink = screen.getByLabelText(/About/i);
  const soundmacLink = screen.getByLabelText(/Soundmac/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(soundmacLink).toBeInTheDocument();
});

test("toggles the mobile menu when hamburger icon is clicked", () => {
  render(<HeaderComponent />);

  // Check if the mobile menu is hidden initially
  const mobileMenu = screen.getByLabelText("navigation");
  expect(mobileMenu).toHaveClass("-translate-x-full");

  // Click the hamburger icon to open the mobile menu
  const hamburgerButton = screen.getByRole("button");
  fireEvent.click(hamburgerButton);
  expect(mobileMenu).not.toHaveClass("-translate-x-full");

  // Click the close icon to close the mobile menu
  fireEvent.click(hamburgerButton);
  expect(mobileMenu).toHaveClass("-translate-x-full");
});

test("has accessible roles for navigation and list items", () => {
  render(<HeaderComponent />);

  // Check if the navigation has the correct role
  const navigation = screen.getAllByRole("navigation");
  expect(navigation.length).toBe(2); // Ensure both nav elements are found

  // Check if the list items have the correct role
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(6); // Ensure all list items are found
});
