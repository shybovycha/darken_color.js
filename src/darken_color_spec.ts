import * as darken_color from "./darken_color";

describe("darken_color", () => {
  it("works with word color names", () => {
    expect(darken_color.darken("lightgreen", "0.1")).toBe("#63e763");
  });

  it("works with 6-digit colors", () => {
    expect(darken_color.darken("#90EE90", "0.1")).toBe("#63e763");
  });

  it("works with 3-digit colors", () => {
    expect(darken_color.darken("#9E9", "0.1")).toBe("#6de66d");
  });

  it("accepts percentage amount", () => {
    expect(darken_color.darken("lightgreen", "10%")).toBe("#8fed8f");
  });

  it("accepts floating-point amount", () => {
    expect(darken_color.darken("lightgreen", "0.1")).toBe("#63e763");
  });

  it("accepts integer amount", () => {
    expect(darken_color.darken("lightgreen", "10")).toBe("#63e763");
  });

  it("lightens colors", () => {
    expect(darken_color.lighten("lightgreen", "10")).toBe("#bcf4bc");
  });

  it("handles incorrect color formats", () => {
    expect(() => {
      darken_color.darken("lightgreen", "Kickapoo");
    }).toThrow();
  });
});
