import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/login';
import Home from './Pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/home" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
