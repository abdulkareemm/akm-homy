import { Copmaines, Header, Hero, Residences } from "./components";
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
      </div>
    </>
  );
}

export default App;
