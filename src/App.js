import React, {useState} from "react";
import { useTranslation, Trans } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  const [booksCount, setBooksCount] = useState(0)
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h2>{t("welcome", { name: "Sanjeev" })}</h2>
        <button onClick={() => changeLanguage("hi")}>hi</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>

      <Trans values={{ name: "Tinku" }}>
        welcome
      </Trans>

      <h2><button onClick={() => setBooksCount(bookCount => bookCount+1)}>{booksCount}</button></h2>

      <h2>{t("count", { count: booksCount })}</h2>

    </div>
  );
}
