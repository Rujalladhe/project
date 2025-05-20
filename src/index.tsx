import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Frame } from "./screens/Frame";
import ContactUs from "./components/contactform";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame/>} />
        <Route path="/contact" element={<ContactUs />} />
       
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);