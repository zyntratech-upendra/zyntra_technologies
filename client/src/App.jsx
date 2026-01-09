import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays on all pages */}
      <Navbar />
      {/* Page Routes */}
      <main>
        <AppRoutes />
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
