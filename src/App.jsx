import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import InfoBox from "./components/InfoBox";
import Team from "./components/Team";
import Layout from "./layout/Layout";
import Home from "./routes/home";

export default function App() {
  return (
    <Router>
      <>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} /> */}

            {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
        <Navbar />
        <Hero />
        <InfoBox />
        <Team />
        <Footer />
      </>
    </Router>
  );
}
