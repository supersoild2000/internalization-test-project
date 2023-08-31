import { formatNumber } from "../formatNumber";

describe("formatNumber", () => {
  // Test for integer format
  it("should format number as integer", () => {
    const result = formatNumber(1234.567, "en-US", "integer");
    expect(result).toBe("1,235"); // Rounds to nearest integer
  });

  // Test for decimal format
  it("should format number as decimal", () => {
    const result = formatNumber(1234.567, "en-US", "decimal");
    expect(result).toBe("1,234.57"); // Rounds to 2 decimal places
  });

  // Test for currency format
  it("should format number as currency", () => {
    const result = formatNumber(1234.567, "en-US", "currency");
    expect(result).toBe("$1,234.57"); // Assumes USD as the currency
  });

  // Test for percent format
  it("should format number as percent", () => {
    const result = formatNumber(0.1234, "en-US", "percent");
    expect(result).toBe("12.34%"); // Multiplies by 100 and rounds to 2 decimal places
  });

  // Test for unsupported format
  it("should throw an error for unsupported format", () => {
    expect(() =>
      formatNumber(1234.567, "en-US", "unsupported" as any)
    ).toThrow();
  });

  // Test for handling errors in Intl.NumberFormat
  it("should gracefully handle Intl.NumberFormat errors", () => {
    // Mock Intl.NumberFormat to throw an error
    const originalIntl = Intl;
    global.Intl = {
      ...originalIntl,
      NumberFormat: jest.fn().mockImplementation(() => {
        throw new Error("Formatting failed");
      }),
    } as any;

    const result = formatNumber(1234.567, "en-US", "integer");
    expect(result).toBe("1234.567");

    // Restore original Intl
    global.Intl = originalIntl;
  });
});
