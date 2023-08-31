import { formatDateTime } from "../formatDateTime";

describe("formatDateTime", () => {
  const testDate = new Date("2023-08-31T12:34:56");

  // Test for short format
  it("should format date-time in short format", () => {
    const result = formatDateTime(testDate, "en-US", "short");
    expect(result).toBe("8/31/23, 12:34 PM");
  });

  // Test for medium format
  it("should format date-time in medium format", () => {
    const result = formatDateTime(testDate, "en-US", "medium");
    expect(result).toBe("Aug 31, 2023, 12:34 PM");
  });

  // Test for long format
  it("should format date-time in long format", () => {
    const result = formatDateTime(testDate, "en-US", "long");
    expect(result).toBe("Thursday, August 31, 2023 at 12:34 PM");
  });

  // Test for full format
  it("should format date-time in full format", () => {
    const result = formatDateTime(testDate, "en-US", "full");
    expect(result).toBe("Thursday, August 31, 2023 at 12:34:56 PM");
  });

  // Test for full format
  it("should format date-time in full format for france", () => {
    const result = formatDateTime(testDate, "fr-FR", "full");
    expect(result).toBe("jeudi 31 août 2023 à 12:34:56");
  });

  // Test for unsupported format
  it("should throw an error for unsupported format", () => {
    expect(() =>
      formatDateTime(testDate, "en-US", "unsupported" as any)
    ).toThrow();
  });

  // Test for handling errors in Intl.DateTimeFormat
  it("should gracefully handle Intl.DateTimeFormat errors", () => {
    // Mock Intl.DateTimeFormat to throw an error
    const originalIntl = Intl;
    global.Intl = {
      ...originalIntl,
      DateTimeFormat: jest.fn().mockImplementation(() => {
        throw new Error("Formatting failed");
      }),
    } as any;

    const result = formatDateTime(testDate, "en-US", "short");
    expect(result).toBe(testDate.toString());

    // Restore original Intl
    global.Intl = originalIntl;
  });
});
