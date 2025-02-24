import Header from "./components/header";
import 'react-dates/lib/css/_datepicker.css';
import "/src/App.css";
import Footer from "./components/footersection/footer";
import Inspiration from "./components/footersection/inspiration";
const App = () => {
  return (
 <>  
<main>
 <Header />
 <Inspiration/>
 </main>
 <Footer/>
 </>
  );
};

export default App;
