import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { DemoPage } from "./pages/Demo";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/*" element={<DemoPage />} />
      </Routes>

      
      
    </BrowserRouter>
    </>
  );
}

export default App;
