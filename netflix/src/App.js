
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/banner' element={<Banner/>}/>
      </Routes>


    </div>
  );
}

export default App;
