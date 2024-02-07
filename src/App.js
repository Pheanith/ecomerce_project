// install route
// npm install react-router-dom
// import in order to use router 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Blogs from "./pages/Blogs";
import SProduct from "./pages/SProduct";
import Cart from "./pages/Cart";
import LayoutLogin from "./pages/auth/LayoutLogin";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import MainLayout from "./pages/admin/ALayout";
import AProduct from "./pages/admin/AProduct";
import ALoginPage from "./pages/admin/ALoginPage";
import ARegisterPage from "./pages/admin/ARegisterPage";
import AEmployeePage from "./pages/admin/AEmployeePage";

function App() {
  return (

    // make connect between others js page
    // or making route path
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout/>}>
          {/* Branch Page */}
          <Route path="" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="sproduct" element={<SProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        {/* create new layout for login and register only */}
        <Route path="/" element={<LayoutLogin />} >
          <Route path="login" element={<LoginPage />}/>
          <Route path="register" element={<RegisterPage />}/>
        </Route>

        <Route path="/admin" element={<MainLayout/>}>
          {/* Branch Page */}
          <Route path="product" element={<AProduct />} />
          <Route path="employee" element={<AEmployeePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        {/* create new layout for login and register only */}
        <Route path="/admin" element={<LayoutLogin />} >
          <Route path="login" element={<ALoginPage />}/>
          <Route path="register" element={<ARegisterPage />}/>
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
