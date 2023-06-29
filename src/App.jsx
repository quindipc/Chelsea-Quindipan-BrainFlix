import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.scss";

// Pages
import Homepage from "./pages/HomePage/Homepage";
import UploadPage from "./pages/UploadPage/UploadPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/video/:id" element={<Homepage/>} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
