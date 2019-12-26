var darken_color = require("./darken_color");

describe("darken_color", function() {
  it("works with word color names", function() {
    expect(darken_color.darken("lightgreen", 0.1)).toEqual("#63e763");
  });

  it("works with 6-digit colors", function() {
    expect(darken_color.darken("#90EE90", 0.1)).toEqual("#63e763");
  });

  it("works with 3-digit colors", function() {
    expect(darken_color.darken("#9E9", 0.1)).toEqual("#6de66d");
  });

  it("accepts percentage amount", function() {
    expect(darken_color.darken("lightgreen", "10%")).toEqual("#8fed8f");
  });

  it("accepts floating-point amount", function() {
    expect(darken_color.darken("lightgreen", 0.1)).toEqual("#63e763");
  });

  it("accepts integer amount", function() {
    expect(darken_color.darken("lightgreen", 10)).toEqual("#63e763");
  });

  it("lightens colors", function() {
    expect(darken_color.lighten("lightgreen", 10)).toEqual("#bcf4bc");
  });

  it("handles incorrect color formats", function() {
    expect(function() {
      darken_color.darken("lightgreen", "Kickapoo");
    }).toThrow();
  });
});
