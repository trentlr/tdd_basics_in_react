import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("does app render", () => {
    render(<App/>)
    expect(screen.getByRole("heading", { level: 1})).toHaveTextContent(/my-test-app/i);
})