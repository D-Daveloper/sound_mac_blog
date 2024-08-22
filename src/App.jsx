import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
function App() {
  return (
    <div className="">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BlogPost" element={<BlogPost />} />
        <Route path="/post/:id" element={<About />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
