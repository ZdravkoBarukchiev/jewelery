import { Route, Routes } from 'react-router-dom';
import { About } from './components/about/About';
import { Contacts } from './components/contacts/Contacts';
import { HomePage } from './components/homePage/HomePage';
import { Jewellery } from './components/jewellery/Jewelery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/jewellery' element={<Jewellery />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />}/>
        </Routes>
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
