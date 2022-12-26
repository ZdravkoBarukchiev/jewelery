import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Jewellery } from './components/jewellery/Jewelery';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Jewellery />
        <About />
        <Contact/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
