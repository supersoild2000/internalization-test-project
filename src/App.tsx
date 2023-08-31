import { useTranslation } from "react-i18next";
import useLanguageSwitcher from "./hooks/useLanguageSwitcher";
import { formatDateTime } from "./utils/formatDateTime";
import { formatNumber } from "./utils/formatNumber";
import { formatUnit } from "./utils/formatUnit";
import "./App.css";

function App() {
  const { t } = useTranslation();
  const { currentLang, changeLanguage, languageOptions } =
    useLanguageSwitcher();

  const currentDate = new Date();
  const exampleNumber = 123456789;

  return (
    <div className="App">
      <h1>{t("title")}</h1>
      <h2>{t("subtitle")}</h2>
      <p>{t("description")}</p>

      <div>
        <label htmlFor="languageSelect">{t("choose_language")} </label>
        <select
          id="languageSelect"
          value={currentLang}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <h3>{t("current_date_time")}</h3>
      <p>
        {t("short")}: {formatDateTime(currentDate, currentLang, "short")}
      </p>
      <p>
        {t("medium")}: {formatDateTime(currentDate, currentLang, "medium")}
      </p>
      <p>
        {t("long")}: {formatDateTime(currentDate, currentLang, "long")}
      </p>
      <p>
        {t("full")}: {formatDateTime(currentDate, currentLang, "full")}
      </p>

      <h3>{t("formatted_numbers")}</h3>
      <p>
        {t("integer")}: {formatNumber(exampleNumber, currentLang, "integer")}
      </p>
      <p>
        {t("decimal")}: {formatNumber(exampleNumber, currentLang, "decimal")}
      </p>
      <p>
        {t("currency")}: {formatNumber(exampleNumber, currentLang, "currency")}
      </p>
      <p>
        {t("percent")}: {formatNumber(0.123, currentLang, "percent")}
      </p>

      <h3>{t("unit_conversion")}</h3>
      <p>
        {t("inches_to_cm")}: {formatUnit(10, "in-cm")}
      </p>
      <p>
        {t("pounds_to_kg")}: {formatUnit(50, "lb-kg")}
      </p>
      <p>
        {t("liters_to_oz")}: {formatUnit(1, "lt-oz")}
      </p>
    </div>
  );
}

export default App;
