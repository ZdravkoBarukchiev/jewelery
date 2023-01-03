import { Route, Routes } from 'react-router-dom';
import { About } from './components/about/About';
import { Contacts } from './components/contacts/Contacts';
import { HomePage } from './components/homePage/HomePage';
import { Jewellery } from './components/jewellery/Jewellery';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/jewellery' element={<Jewellery />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
