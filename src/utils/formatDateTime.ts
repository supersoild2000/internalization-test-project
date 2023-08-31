type DateTimeFormat = "short" | "medium" | "long" | "full";

export const formatDateTime = (
  date: Date,
  locale: string,
  format: DateTimeFormat
): string => {
  let options: Intl.DateTimeFormatOptions;

  switch (format) {
    case "short":
      options = {
        year: "2-digit",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      break;
    case "medium":
      options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      break;
    case "long":
      options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      break;
    case "full":
      options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      break;
    default:
      throw new Error();
  }

  try {
    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch {
    return date.toString();
  }
};
