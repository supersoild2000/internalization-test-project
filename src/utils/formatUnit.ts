type Unit = "in-cm" | "lb-kg" | "lt-oz";

export const formatUnit = (value: number, unit: Unit): string => {
  let convertedValue: number;
  let unitLabel: string;

  switch (unit) {
    case "in-cm":
      convertedValue = value * 2.54;
      unitLabel = "cm";
      break;
    case "lb-kg":
      convertedValue = value * 0.453592;
      unitLabel = "kg";
      break;
    case "lt-oz":
      convertedValue = value * 33.814;
      unitLabel = "oz";
      break;
    default:
      throw new Error();
  }

  try {
    return `${convertedValue.toFixed(2)} ${unitLabel}`;
  } catch {
    return `${value}`;
  }
};
