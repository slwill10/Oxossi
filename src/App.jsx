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
} from "./components/";

function App() {
  return (
    <div>  
      <Navbar></Navbar>
      <Journey></Journey> 
       <Services></Services>
      <About></About>
      <Clients></Clients>
      <Contact></Contact>
      <Technology></Technology>
      <Footer></Footer>  
    </div>
  );
}

export default App;
