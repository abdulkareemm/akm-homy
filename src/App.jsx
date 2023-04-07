import { Copmaines, Header, Hero } from "./components";
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
      </div>
    </>
  );
}

export default App;
