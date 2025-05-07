import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import { ThemeProvider } from "./ThemeContext";
function App() {
  return (
    <ThemeProvider>

<div className="w-full h-auto bg-[var(--bg-primary)] text-[var(--text-primary)] px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        
      </div>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
