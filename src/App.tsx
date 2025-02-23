import Header from "./components/header";
import 'react-dates/lib/css/_datepicker.css';
import "/src/App.css";
import Cards from "./components/cards";
const App = () => {
  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
};

export default App;
