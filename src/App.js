import { Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { Home } from './components/Home/Home';
import { Jewellery } from './components/Jewellery/Jewellery';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Cart } from './components/Cart/Cart';
import { Logout } from './components/Logout/Logout';
import { LoginContext } from './context/loginContext';
import { useState } from 'react';

function App() {
  const [loginData, setLoginData] = useState({});
  const userLogin = (userData) => {
    setLoginData(userData);
  };
  const userLogout = () => {
    setLoginData({});
  };
  return (
    <div className="App">
      <LoginContext.Provider value={{ loginData, userLogin, userLogout }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jewellery' element={<Jewellery />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
