import { Route, Routes } from "react-router-dom";
import Layout from "./assets/components/Layout";
import Home from "./assets/pages/Home";
import Signup from "./assets/pages/Signup";
import Login from "./assets/pages/Login";
import Cart from "./assets/pages/Cart";
import ProductDetails from "./assets/pages/ProductDetails";
import Error404 from "./assets/pages/Error404";
import Wishlist from "./assets/pages/Wishlist";
import ProtectedRoute from "./assets/components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/cart" element={<ProtectedRoute component={Cart}/>} />
        <Route path="/wishlist" element={<ProtectedRoute component={Wishlist} />} />
        <Route path="/*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default App;
