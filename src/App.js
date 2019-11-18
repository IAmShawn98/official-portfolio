// Dependencies.
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import ProfilePic from './components/ProfilePic';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

// Component app routing.
function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <ProfilePic />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

// Do export.
export default App;