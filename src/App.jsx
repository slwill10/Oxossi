import "./App.css";
import {
  Navbar,
  Services,
  About,
  Clients,
  Contact,
  Footer,
  Technology,
  Journey,
  Products
} from "./components/";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Journey></Journey>
      <Technology></Technology>
      <About></About>
      <Services></Services>
      <Clients></Clients>
      <Contact></Contact>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;