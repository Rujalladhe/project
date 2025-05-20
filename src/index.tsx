import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Frame } from "./screens/Frame";
import ContactUs from "./components/contactform";
import AboutUs from "./components/about";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame/>} />
        <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<AboutUs />} />
        
       
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);