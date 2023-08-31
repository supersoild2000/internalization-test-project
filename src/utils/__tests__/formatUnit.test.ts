import { formatUnit } from "../formatUnit";

describe("formatUnit", () => {
  afterAll(() => jest.restoreAllMocks());

  // Test for inches to cm conversion
  it("should convert inches to cm", () => {
    const result = formatUnit(10, "in-cm");
    expect(result).toBe("25.40 cm");
  });

  // Test for pounds to kg conversion
  it("should convert pounds to kg", () => {
    const result = formatUnit(10, "lb-kg");
    expect(result).toBe("4.54 kg");
  });

  // Test for liters to oz conversion
  it("should convert liters to oz", () => {
    const result = formatUnit(1, "lt-oz");
    expect(result).toBe("33.81 oz");
  });

  // Test for an unsupported unit
  it("should throw an error for unsupported units", () => {
    expect(() => formatUnit(1, "unsupported-unit" as any)).toThrow();
  });

  // Test for when toFixed fails (very unlikely in this case, but let's test it)
  it("should gracefully handle toFixed failures", () => {
    // To simulate a failure in toFixed, mock it to throw an error
    jest.spyOn(Number.prototype, "toFixed").mockImplementation(function () {
      throw new Error("Failed");
    });

    const result = formatUnit(10, "in-cm");
    expect(result).toBe("10");
  });
});
