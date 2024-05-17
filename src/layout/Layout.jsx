import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="relative w-screen h-screen box-border">
      <Navbar />
      <Outlet /> {/* Outlet for routed content */}
      <Footer />
    </div>
  );
}
