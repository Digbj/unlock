import './App.css';
import{BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

import NavBar from './Components/Nav';
import Regist from './Components/Regi';
import Login from './Components/Login';
import HomePage from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Regist/>}/>
          

        </Routes>
      </Router>
     
    
    </div>
  );
}

export default App;
