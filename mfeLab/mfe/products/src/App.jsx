import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import "./index.scss";
import 'remixicon/fonts/remixicon.css'

import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    {/* <Header className='p-5 bg-blue-500 text-white text-3xl font-bold'/> */}
      <PDPContent />  
    {/* <Footer className='p-5 bg-blue-500 text-white text-3xl font-bold'/> */}
    <Footer />
  </div>
);
// ReactDOM.render(<App />, document.getElementById("app"));
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);