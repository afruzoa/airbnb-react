import Header from "./components/header";
import "/src/App.css";
import Footer from "./components/footersection/footer";
import Inspiration from "./components/footersection/inspiration";
import Cards from "./components/cards";
const App = () => {
  return (
 <>  
<main>
 <Header />
 <Cards/>
 <Inspiration/>
 </main>
 <Footer/>
 </>
  );
};

export default App;
