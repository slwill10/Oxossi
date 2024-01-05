import geo from './img/geometric.png';
import './App.css';
import { Navbar, Home, Services, About, Clients, Contact, Footer, Technology } from './components/';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar> 
      <header className="App-header">
        <img src={geo} className="App-geometric" alt="geo" />
        <p className='textheadertitle'>Eleve Seu Código, Impulsione <span>seu Negócio.</span></p>
        
        <p className='textheader'>Sua visão, nossa experiência. Acelere o <br/>cronograma do seu projeto com nossos   
        <br/>engenheiros qualificados. 
          Experimente a<br/> 
          diferença em qualidade e eficiência.</p>
        <button className='button'>Comece sua jornada em direção à excelência tecnológica agora</button>      
      </header>
      <Home></Home>
      {/* <header className="App-header">
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
      </header> */}
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
    </div>
  );
}

export default App;
