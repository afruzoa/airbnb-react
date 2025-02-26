import { useState } from "react";


const Currencies = [
  { label: "Pound sterling", code: "GBP", symbol: "£", value: "GBP" },
  { label: "Australian dollar", code: "AUD", symbol: "$", value: "AUD" },
  { label: "Brazilian real", code: "BRL", symbol: "R$", value: "BRL" },
  { label: "Bulgarian lev", code: "BGN", symbol: "лв.", value: "BGN" },
  { label: "Canadian dollar", code: "CAD", symbol: "$", value: "CAD" },
  { label: "Chilean peso", code: "CLP", symbol: "$", value: "CLP" },
  { label: "Chinese yuan", code: "CNY", symbol: "￥", value: "CNY" },
  { label: "Colombian peso", code: "COP", symbol: "$", value: "COP" },
  { label: "Costa Rican colon", code: "CRC", symbol: "₡", value: "CRC" },
  { label: "Croatian kuna", code: "HRK", symbol: "kn", value: "HRK" },
  { label: "Czech koruna", code: "CZK", symbol: "Kč", value: "CZK" },
  { label: "Danish krone", code: "DKK", symbol: "kr", value: "DKK" },
  { label: "Egyptian pound", code: "EGP", symbol: "ج.م", value: "EGP" },
  { label: "Emirati dirham", code: "AED", symbol: "ﺩ.ﺇ", value: "AED" },
  { label: "Euro", code: "EUR", symbol: "€", value: "EUR" },
  { label: "Ghanaian cedi", code: "GHS", symbol: "GH₵", value: "GHS" },
  { label: "Hong Kong dollar", code: "HKD", symbol: "$", value: "HKD" },
  { label: "Hungarian forint", code: "HUF", symbol: "Ft", value: "HUF" },
  { label: "Indian rupee", code: "INR", symbol: "₹", value: "INR" },
  { label: "Indonesian rupiah", code: "IDR", symbol: "Rp", value: "IDR" },
  { label: "Israeli new shekel", code: "ILS", symbol: "₪", value: "ILS" },
  { label: "Japanese yen", code: "JPY", symbol: "¥", value: "JPY" },
  { label: "Kazakhstani tenge", code: "KZT", symbol: "₸", value: "KZT" },
  { label: "Kenyan shilling", code: "KES", symbol: "KSh", value: "KES" },
  { label: "Malaysian ringgit", code: "MYR", symbol: "RM", value: "MYR" },
  { label: "Mexican peso", code: "MXN", symbol: "$", value: "MXN" },
  { label: "Moroccan dirham", code: "MAD", symbol: "", value: "MAD" },
  { label: "New Taiwan dollar", code: "TWD", symbol: "$", value: "TWD" },
  { label: "New Zealand dollar", code: "NZD", symbol: "$", value: "NZD" },
  { label: "Norwegian krone", code: "NOK", symbol: "kr", value: "NOK" },
  { label: "Peruvian sol", code: "PEN", symbol: "S/", value: "PEN" },
  { label: "Philippine peso", code: "PHP", symbol: "₱", value: "PHP" },
  { label: "Polish zloty", code: "PLN", symbol: "zł", value: "PLN" },
  { label: "Qatari riyal", code: "QAR", symbol: "ر.ق", value: "QAR" },
  { label: "Romanian leu", code: "RON", symbol: "lei", value: "RON" },
  { label: "Saudi Arabian riyal", code: "SAR", symbol: "SR", value: "SAR" },
  { label: "Singapore dollar", code: "SGD", symbol: "$", value: "SGD" },
  { label: "South African rand", code: "ZAR", symbol: "R", value: "ZAR" },
  { label: "South Korean won", code: "KRW", symbol: "₩", value: "KRW" },
  { label: "Swedish krona", code: "SEK", symbol: "kr", value: "SEK" },
  { label: "Swiss franc", code: "CHF", symbol: "", value: "CHF" },
  { label: "Thai baht", code: "THB", symbol: "฿", value: "THB" },
  { label: "Turkish lira", code: "TRY", symbol: "₺", value: "TRY" },
  { label: "Ugandan shilling", code: "UGX", symbol: "USh", value: "UGX" },
  { label: "Ukrainian hryvnia", code: "UAH", symbol: "₴", value: "UAH" },
  { label: "United States dollar", code: "USD", symbol: "$", value: "USD" },
  { label: "Uruguayan peso", code: "UYU", symbol: "$U", value: "UYU" },
  { label: "Vietnamese dong", code: "VND", symbol: "₫", value: "VND" },
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
  const [activeTab, setActiveTab] = useState('language');
  return (
    
    <div className="lan-currency">
        <div className="lan-currency-header">
      <img src="src/assets/icon/close.svg" alt="Close" onClick={closeGlobal} />
    </div>
    <div className="lan-currency-tabs">
      <button onClick={() => setActiveTab('language')}>Language and region</button>
      <button onClick={() => setActiveTab('currency')}>Currency</button>
    </div>
  
    <div className="lan-currency-contents">
      {activeTab === 'currency' && (
        <div className="currency-container">
          <div className="currency-header">Choose a currency</div>
          <div className="currencies">
  {Currencies.map((currency) => (
    <div key={currency.value} className="currency-item">
      <span className="currency-name">{currency.label}</span>
      <span className="currency-symbol">{currency.symbol}</span>
    </div>
  ))}
</div>
          </div>
      )}
      {activeTab === 'language' && (
        <div className="language-container">
          <hr />
          <div className="translation">
            <h1>
              Translation
              <span>
                <img src="src/assets/icon/translation.svg" alt="Translation" />
              </span>
              <p>Automatically translate descriptions and reviews to English.</p>
              <div>
                <button role="switch"></button>
              </div>
            </h1>
          </div>
          <div className="select-language">Suggested language and region</div>
          <div className="select-language">Choose a language and region</div>
          <div className="languages-regions">
  {LanRegion.map((lan) => (
    <div key={lan.value} className="language-item">
      <span className="language-name">{lan.label}</span>
      <span className="language-region">{lan.region}</span>
    </div>
  ))}
</div>
        </div>
      )}
    </div>
  </div>
);

}
export default Language;
