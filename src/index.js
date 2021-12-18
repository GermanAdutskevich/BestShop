import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles/main.scss'
import reportWebVitals from './reportWebVitals';
import Navigation from "./Navigation/navigation";
import Section from "./Section/section";
import Statistic from "./Statistic/statistic";
import Pricing from "./Pricing/pricing"
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Section/>
    <Statistic/>
    <Pricing/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
