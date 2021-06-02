import About from "./About";
import Products from "./Products";
// eslint-disable-next-line no-unused-vars
import Catalog from "./Catalog";
import Business from "./Business";

import Application from "./Application";
function Main(props) {
  return (
    <main className="content">
      <About />
      <Products />
      <Catalog togglePopup={props.togglePopup} />
      <Business />
      <Application applicationSubmit={props.applicationSubmit} />
    </main>
  );
}

export default Main;
