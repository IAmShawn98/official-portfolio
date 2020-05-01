// Dependencies.
import React, { Component } from "react";
import "./index.css";

import IntroRibbon from "./components/IntroRibbon";
import Navbar from "./components/Navbar";
import DiveDeep from "./components/DiveDeep";
import AboutMe from "./components/AboutMe";
import TopScroll from "./components/TopScroll";
import ResumePopup from "./components/ResumePopup";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// All Components:
class App extends Component {
  render() {
    return (
      <>
        {/* Site Section1: */}
        <Navbar />
        <IntroRibbon />
        <DiveDeep />

        {/* Site Section2: */}
        <AboutMe />

        {/* Site Section3: */}
        <Projects />
        <Footer />


        {/* Site Partials: */}
        <TopScroll />
        <ResumePopup />
      </>
    );
  }
}

// Do Export.
export default App;
