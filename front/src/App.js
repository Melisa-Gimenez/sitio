import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import RecetasDulcess from "./pages/RecetasDulces";
import RecetasSaladas from "./pages/RecetasSaladas";
import Subscripcion from "./pages/Subscripcion";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/recetasdulces" element={<RecetasDulcess />} />
          <Route path="/recetassaladas" element={<RecetasSaladas />} />
          <Route path="/subscripcion" element={<Subscripcion />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
