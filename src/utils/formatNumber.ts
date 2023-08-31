type NumberFormat = "integer" | "decimal" | "currency" | "percent";

export const formatNumber = (
  num: number,
  locale: string,
  format: NumberFormat
): string => {
  let options: Intl.NumberFormatOptions;

  switch (format) {
    case "integer":
      options = { style: "decimal", maximumFractionDigits: 0 };
      break;
    case "decimal":
      options = { style: "decimal", maximumFractionDigits: 2 };
      break;
    case "currency":
      options = { style: "currency", currency: "USD" };
      break;
    case "percent":
      options = { style: "percent", maximumFractionDigits: 2 };
      break;
    default:
      throw new Error();
  }

  try {
    return new Intl.NumberFormat(locale, options).format(num);
  } catch {
    return num.toString();
  }
};
