import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './app/frontEnd/Pages/login';
import Home from './app/frontEnd/Pages/home';
import Produto from './app/frontEnd/Pages/produto';

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
