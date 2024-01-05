import geo from './img/geometric.png';
import './App.css';
import { Navbar, Home, Services, About, Clients, Contact, Footer, Technology, Journey } from './components/';

function App() {
  return (
    <div>
      <Navbar></Navbar>   
      <Journey></Journey>
      {/* {/* <header className="App-header">
        <img src={geo} className="App-geometric" alt="geo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      <Services></Services>
      <h1>OLA</h1>
      <About></About>
      <h1>OLA</h1>
      <Clients></Clients>
      <h1>OLA</h1>
      <Contact></Contact>
      <h1>OLA</h1>
      <Footer></Footer>
      <h1>OLA</h1>
      <Technology></Technology>
      <h1>ola</h1>
      <Journey></Journey> */}
    </div>
  );
}

export default App;
