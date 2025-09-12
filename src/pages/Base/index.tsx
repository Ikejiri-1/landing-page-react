import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { SideIcons } from "../../components/SideIcons";
export function Base() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <SideIcons />
    </>
  );
}
