import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./components/Basic Tasks/ThemeSlice";
import { addToCart, removeFromCart, clearCart } from "./components/Basic Tasks/CartSlice";
import { toggleLanguage } from "./components/Basic Tasks/LanguageSlice";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense ,lazy } from "react";

// Components
import NavBar from "./components/PageDesign/NavBar";
import Footer from "./components/PageDesign/Footer";
import Menu from "./components/PageDesign/Menu";
import SelectInput from "./components/Selection/SelectInput";
import Table from "./components/Basic Tasks/Table";
import TableComponent from "./components/TableCrud/Table";
import Owners from "./components/PageDesign/Owners";
import LoginForm from "./components/CustomHook/Login";
import LoginCustomHook from "./components/Register Login Custom Hook/LoginCustomHook";
import RegisterCustomHook from "./components/Register Login Custom Hook/RegisterCustomHook";
import { MessageProvider } from "./components/Register Login Custom Hook/MessageContext";



const Shop = lazy(() => import("./components/PageDesign/Shop"));
function Counter() {


  return (
    <div>
      

      <NavBar />
      <Routes>
        <Route path="/" element={<Menu />} />
       <Route
          path="/shop"
          element={<Suspense fallback={<div className="text-white"> Loading... </div> } >
      <Shop />
    </Suspense>
  } 
/>

        <Route path="/owners" element={<Owners />} />
        
        <Route path="/login" element={<LoginCustomHook />} />
        <Route path="/register" element={<RegisterCustomHook />} />
        
        {/* <Route path="/select" element={<SelectInput />} /> */}
      </Routes>
    
      <Footer /> 
      
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MessageProvider>
      <Counter />
      </MessageProvider>
    </Router>
  );
}
