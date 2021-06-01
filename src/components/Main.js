import About from "./About";
import Products from "./Products";
// eslint-disable-next-line no-unused-vars
import Catalog from "./Catalog";
import Business from "./Business";

import Application from "./Application";
function Main() {
  return (
    <main className="content">
      <About />
      <Products />
      <Catalog />
      <Business />
      <Application />
    </main>
  );
}

export default Main;
