import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the Nawy starter heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "ابدأ مشروع ناوي من هنا" }),
    ).toBeTruthy();
  });
});
