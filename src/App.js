import { About } from './components/about/About';
import { Contacts } from './components/contacts/Contacts';
import { Jewellery } from './components/jewellery/Jewelery';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Jewellery />
        <About />
        <Contacts/>
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
