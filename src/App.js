import { Route, Routes } from 'react-router-dom';
import { About } from './components/about/About';
import { Contacts } from './components/contacts/Contacts';
import { HomePage } from './components/homePage/HomePage';
import { Jewellery } from './components/jewellery/Jewellery';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Logout } from './components/logout/Logout';
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
          <Route path='/' element={<HomePage />} />
          <Route path='/jewellery' element={<Jewellery />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
