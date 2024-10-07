import React from "react";
import { createRoot } from 'react-dom/client';

import 'remixicon/fonts/remixicon.css'
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";
import MiniCart from "./MiniCart";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <MiniCart />
    {/* <Header className='p-5 bg-blue-500 text-white text-3xl font-bold'/> */}
      <CartContent />
    {/* <Footer className='p-5 bg-blue-500 text-white text-3xl font-bold'/> */}
    <Footer />
  </div>
);
// ReactDOM.render(<App />, document.getElementById("app"));
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);