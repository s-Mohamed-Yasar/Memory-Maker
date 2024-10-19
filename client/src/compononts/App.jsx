import GallaryHomePage from "../pages/GallaryHomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreaterPage from "../pages/CreaterPage";
import AlbumPage from "../pages/AlbumPage";
import AlbumCard from "./AlbumCard";
import EditCardPage from "../pages/EditCardPage";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GallaryHomePage />} />
          <Route path="/home" element={<GallaryHomePage />} />
          <Route path="/creater" element={<CreaterPage />} />
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/edit" element={<EditCardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
