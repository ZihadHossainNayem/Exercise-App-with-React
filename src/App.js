import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Exercises } from "./pages/Exercises";
import { Footer } from "./components/Footer";

function App() {
  /* state for darkMode */
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white text-[#18191a] dark:bg-[#18191a] dark:text-white  min-h-screen">
        {/* components here */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<Exercises />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
