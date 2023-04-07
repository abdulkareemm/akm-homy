import { Contact, Copmaines, GetStarted, Header, Hero, Residences, Value } from "./components";
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
      </div>
    </>
  );
}

export default App;
