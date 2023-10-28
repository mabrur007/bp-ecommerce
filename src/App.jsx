import { SnackbarProvider } from "notistack";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import SingleProduct from "./pages/SingleProduct";
import TechStore from "./pages/TechStore";

const App = () => {
  return (
    <div className="bg-[#f7fafc]">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/techstore" element={<TechStore />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <SnackbarProvider
        autoHideDuration
        maxSnack={3}
        preventDuplicate
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />
    </div>
  );
};

export default App;
