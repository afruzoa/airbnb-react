import { useState } from "react";

const Currencies = [
  { label: "Pound sterling", code: "GBP-£", value: "GBP" },
  { label: "Australian dollar", code: "AUD-$", value: "AUD" },
  { label: "Brazilian real", code: "BRL-R$", value: "BRL" },
  { label: "Bulgarian lev", code: "BGN-лв.", value: "BGN" },
  { label: "Canadian dollar", code: "CAD-$", value: "CAD" },
  { label: "Chilean peso", code: "CLP-$", value: "CLP" },
  { label: "Chinese yuan", code: "CNY-￥", value: "CNY" },
  { label: "Colombian peso", code: "COP-$", value: "COP" },
  { label: "Costa Rican colon", code: "CRC-₡", value: "CRC" },
  { label: "Croatian kuna", code: "HRK-kn", value: "HRK" },
  { label: "Czech koruna", code: "CZK-Kč", value: "CZK" },
  { label: "Danish krone", code: "DKK-kr", value: "DKK" },
  { label: "Egyptian pound", code: "EGP-ج.م", value: "EGP" },
  { label: "Emirati dirham", code: "AED-ﺩ.ﺇ", value: "AED" },
  { label: "Euro", code: "EUR-€", value: "EUR" },
  { label: "Ghanaian cedi", code: "GHS-GH₵", value: "GHS" },
  { label: "Hong Kong dollar", code: "HKD-$", value: "HKD" },
  { label: "Hungarian forint", code: "HUF-Ft", value: "HUF" },
  { label: "Indian rupee", code: "INR-₹", value: "INR" },
  { label: "Indonesian rupiah", code: "IDR-Rp", value: "IDR" },
  { label: "Israeli new shekel", code: "ILS-₪", value: "ILS" },
  { label: "Japanese yen", code: "JPY-¥", value: "JPY" },
  { label: "Kazakhstani tenge", code: "KZT-₸", value: "KZT" },
  { label: "Kenyan shilling", code: "KES-KSh", value: "KES" },
  { label: "Malaysian ringgit", code: "MYR-RM", value: "MYR" },
  { label: "Mexican peso", code: "MXN-$", value: "MXN" },
  { label: "Moroccan dirham", code: "MAD-", value: "MAD" },
  { label: "New Taiwan dollar", code: "TWD-$", value: "TWD" },
  { label: "New Zealand dollar", code: "NZD-$", value: "NZD" },
  { label: "Norwegian krone", code: "NOK-kr", value: "NOK" },
  { label: "Peruvian sol", code: "PEN-S/", value: "PEN" },
  { label: "Philippine peso", code: "PHP-₱", value: "PHP" },
  { label: "Polish zloty", code: "PLN-zł", value: "PLN" },
  { label: "Qatari riyal", code: "QAR-ر.ق", value: "QAR" },
  { label: "Romanian leu", code: "RON-lei", value: "RON" },
  { label: "Saudi Arabian riyal", code: "SAR-SR", value: "SAR" },
  { label: "Singapore dollar", code: "SGD-$", value: "SGD" },
  { label: "South African rand", code: "ZAR-R", value: "ZAR" },
  { label: "South Korean won", code: "KRW-₩", value: "KRW" },
  { label: "Swedish krona", code: "SEK-kr", value: "SEK" },
  { label: "Swiss franc", code: "CHF-", value: "CHF" },
  { label: "Thai baht", code: "THB-฿", value: "THB" },
  { label: "Turkish lira", code: "TRY-₺", value: "TRY" },
  { label: "Ugandan shilling", code: "UGX-USh", value: "UGX" },
  { label: "Ukrainian hryvnia", code: "UAH-₴", value: "UAH" },
  { label: "United States dollar", code: "USD-$", value: "USD" },
  { label: "Uruguayan peso", code: "UYU-$U", value: "UYU" },
  { label: "Vietnamese dong", code: "VND-₫", value: "VND" },
];
const LanRegion = [
  { label: "English", region: "United States", value: "English_United States" },
  {
    label: "English",
    region: "United Kingdom",
    value: "English_United Kingdom",
  },
  {
    label: "Azərbaycan dili",
    region: "Azərbaycan",
    value: "Azərbaycan dili_Azerbaijan",
  },
  {
    label: "Bahasa Indonesia",
    region: "Indonesia",
    value: "Bahasa Indonesia_Indonesia",
  },
  {
    label: "Bosanski",
    region: "Bosna i Hercegovina",
    value: "Bosanski_Bosna i Hercegovina",
  },
  { label: "Català", region: "España", value: "Català_España" },
  {
    label: "Čeština",
    region: "Česká republika",
    value: "Čeština_Česká republika",
  },
  { label: "Crnogorski", region: "Crna Gora", value: "Crnogorski_Crna Gora" },
  { label: "Deutsch", region: "Deutschland", value: "Deutsch_Germany" },
  { label: "Deutsch", region: "Österreich", value: "Deutsch_Austria" },
  { label: "Español", region: "España", value: "Español_Spain" },
  { label: "Français", region: "France", value: "Français_France" },
  { label: "Italiano", region: "Italia", value: "Italiano_Italy" },
  { label: "Magyar", region: "Magyarország", value: "Magyar_Hungary" },
  { label: "Nederlands", region: "Nederland", value: "Nederlands_Netherlands" },
  { label: "Polski", region: "Polska", value: "Polski_Poland" },
  { label: "Português", region: "Brasil", value: "Português_Brazil" },
  { label: "Русский", region: "Россия", value: "Русский_Russia" },
  { label: "العربية", region: "العالم", value: "العربية_Arab World" },
  { label: "हिन्दी", region: "भारत", value: "हिन्दी_India" },
  { label: "简体中文", region: "中国", value: "简体中文_China" },
  { label: "繁體中文", region: "台灣", value: "繁體中文_Taiwan" },
];

function Language({ closeGlobal }: { closeGlobal: () => void }) {
  const [activeTab, setActiveTab] = useState("language");
  return (
    <div className="lan-currency">
      <div className="lan-currency-header">
        <img
          src="src/assets/icon/close.svg"
          alt="Close"
          onClick={closeGlobal}
        />
      </div>

      <div className="lan-currency-tabs">
        <button onClick={() => setActiveTab("language")}>
          Language and region
        </button>
        <button onClick={() => setActiveTab("currency")}>Currency</button>
      </div>

      <div className="currency-contents">
        {activeTab === "currency" && (
          <div className="currency-container">
            <div className="currency-header">Choose a currency</div>
            <ul className="currencies-wrapper">
              {Currencies.map((currency) => (
                <li key={currency.value} className="currency-item">
                  <p className="currency-name">{currency.label}</p>
                  <span className="currency-symbol">{currency.code}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="lan-contents">
        {activeTab === "language" && (
          <div className="language-container">
            <div className="laguage-header">
              <div className="translation">
                Translation
                <span>
                  <img
                    src="src/assets/icon/translation.svg"
                    alt="Translation"
                  />
                </span>
                <p>
                  Automatically translate descriptions and reviews to English.
                </p>
              </div>
            </div>
            <div className="language-section">
            <div className="selected">
            <div className="select-language">
                Suggested language and region
              </div>
              <div className="language-item">
                <p className="language-name">English</p>
                <span className="language-region">United States</span>
              </div>
            </div>
              <div className="choosed">
              <div className="select-language">
                Choose a language and region
              </div>
            </div>
            <ul className="language-wrapper">
              {LanRegion.map((lan) => (
                <li key={lan.value} className="language-item">
                  <p className="language-name">{lan.label}</p>
                  <span className="language-region">{lan.region}</span>
                </li>
              ))}
            </ul>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Language;
