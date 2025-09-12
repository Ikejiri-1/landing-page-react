import { Route, Routes } from "react-router-dom";
import { Base } from "../pages/Base";
import { Home } from "../pages/Home";
import { AboutMe } from "../pages/AboutMe";
import { Procedures } from "../pages/Procedures";

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route path="/" element={<Home />} />
        <Route path="sobre-mim" element={<AboutMe />} />
        <Route path="procedimentos/:slug" element={<Procedures />} />
      </Route>
    </Routes>
  );
}
