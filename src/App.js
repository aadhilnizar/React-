import React, { use, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "./components/ProductSlice";
import { toggleTheme } from "./components/ThemeSlice";
import { addToCart, removeFromCart, clearCart } from "./components/CartSlice";
import { toggleLanguage } from "./components/LanguageSlice";
import i18n from "./components/i18n";
import { useTranslation } from "react-i18next";
import NavBar from "./components/PageDesign/NavBar";
import Styling from "./components/Styling";
import Menu from "./components/PageDesign/Menu";
import Footer from "./components/PageDesign/Footer";
import SelectInput from "./components/Selection/SelectInput";



function Counter() {
  // const { loading, items: products, error } = useSelector((state) => state.products);
  // const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);
    const language = useSelector((state) => state.language.lang);
    const {t, i18n} = useTranslation();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  useEffect(() => {
    i18n.changeLanguage(language);
  },[language, i18n]);  


  return (
    <div>
       {/* <NavBar />
       < Menu />
       <Footer /> */}
       <SelectInput />
    </div>
   
    // <div
    //   className={`min-h-screen flex flex-col items-center justify-center 
    //   ${mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    // >
    //   <h1 className="text-3xl font-bold">Redux Dark Mode Example</h1>
    //   <button
    //     onClick={() => dispatch(toggleTheme())}
    //     className="mt-4 px-4 py-2 rounded bg-blue-500 text-white"
    //   >
    //     Switch to {mode === "dark" ? "Light" : "Dark"} Mode
    //   </button>

    //   <h1 className="text-2xl font-bold">{t("welcome")}</h1><p>{t("description")}</p>
    //             <h2 className="mt-2 text-lg">{t("language")}: {language.toUpperCase()}</h2>

    //   <div className="mt-4 flex gap-2">
    //     <button
    //       onClick={() => dispatch(toggleLanguage("en"))}
    //       className="px-3 py-2 bg-blue-500 text-white rounded"
    //     >
    //       English
    //     </button>
    //     <button
    //       onClick={() => dispatch(toggleLanguage("fr"))}
    //       className="px-3 py-2 bg-green-500 text-white rounded"
    //     >
    //       French
    //     </button>
    //     <button
    //       onClick={() => dispatch(toggleLanguage("es"))}
    //       className="px-3 py-2 bg-red-500 text-white rounded"
    //     >
    //       Spanish
    //     </button>
    //   </div>

    // </div>
    // <div style={{ display: "flex", gap: "2rem" }}>
    //   {/* Products */}
    //   <div>
    //     <h1>Products</h1>
    //     {loading && <p>Loading...</p>}
    //     {error && <p style={{ color: "red" }}>{error}</p>}
    //     {products.map((p) => (
    //       <div
    //         key={p.id}
    //         style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    //       >
    //         <h3>{p.title}</h3>
    //         <p>${p.price}</p>
    //         <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
    //       </div>
    //     ))}
    //   </div>

    
    //   <div>
    //     <h1>Cart</h1>
    //     {cart.length === 0 && <p>Cart is empty</p>} 
    //     <ul>
    //       {cart.map((c) => (
    //         <li key={c.id}>
    //           {c.title} (x{c.qty}) - ${c.price * c.qty}
    //           <button
    //             style={{ marginLeft: "10px" }}   
    //             onClick={() => dispatch(removeFromCart(c.id))}
    //           >
    //             Remove
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //     {cart.length > 0 && (
    //       <button
    //         onClick={() => dispatch(clearCart())}
    //         style={{ marginTop: "10px" }}
    //       >
    //         Clear Cart
    //       </button>
    //     )}
    //   </div>
    // </div>
 
  );
}

export default function App() {
  return <Counter />;
}
