import Header from "./components/header";
import "/src/App.css";
import Footer from "./components/footersection/footer";
import Inspiration from "./components/footersection/inspiration";
import Cards from "./components/cards";
import Map from "./components/modals/map";
const App = () => {
  return (
 <>  
<main>
 <Header />
 <Cards/>
 <Inspiration/>
 </main>
 <Footer/>
 <Map/>
 </>
  );
};

export default App;
