import Home from "./pages/home/Home";

import Footer from "components/footer/Footer";
import Header from "components/header/Header";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
