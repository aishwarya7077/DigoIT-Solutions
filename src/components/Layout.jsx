import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import BackToTop from "./BackToTop.jsx";
import CustomCursor from "./CustomCursor.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

export default function Layout() {
  useScrollReveal();

  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
