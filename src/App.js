import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/login';
import Home from './Pages/home';
import Produto from './Pages/produto';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/home" element={ <Home /> } />
        <Route exact path="/produto" element={ <Produto /> } />
      </Routes>
    </div>
  );
}

export default App;
