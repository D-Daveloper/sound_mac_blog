import { Routes, Route, ScrollRestoration } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ScrollToTop from "./components/scrollTop";
function App() {
  return (
    <div className="">
      <ScrollToTop/>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
