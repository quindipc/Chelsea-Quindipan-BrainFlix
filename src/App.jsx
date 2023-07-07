import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

// Pages
import Homepage from "./pages/HomePage/Homepage";
import UploadPage from "./pages/UploadPage/UploadPage";
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/video/:id" element={<Homepage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
