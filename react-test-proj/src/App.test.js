import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
    test("my-test-app heading", () => {
        render(<App />)
        expect(screen.getByRole("heading")).toHaveTextContent(/my-test-app/i)
    });

    test("a my-test-app subheading", async () => {
        render(<App />)

        const button = screen.getByRole("button", {name: "Update Heading"})

        await userEvent.click(button)

        expect(screen.getByRole("heading")).toHaveTextContent(/a test-app project/i)
    });
});