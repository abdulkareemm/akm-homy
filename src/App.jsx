import { Contact, Copmaines, Footer, GetStarted, Header, Hero, Residences, Value } from "./components";
import "./App.css";
function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient"></div>
          <Header />
          <Hero />
        </div>
        <Copmaines />
        <Residences />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default App;
