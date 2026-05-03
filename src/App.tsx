import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Menu from "./pages/Menu";
import Sides from "./pages/Sides";
import Order from "./pages/Order";
import Visit from "./pages/Visit";

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sides" element={<Sides />} />
          <Route path="/order" element={<Order />} />
          <Route path="/visit" element={<Visit />} />
        </Routes>
      </Layout>
    </Router>
  );
}
