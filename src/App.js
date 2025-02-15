import HomeSection from "./home.js";
import AboutSection from "./about.js";
import Contact from "./contact.js";
import " ./style.css";

function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <Contact />
    </div>
  );
}

export default App;
