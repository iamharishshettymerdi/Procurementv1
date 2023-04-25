import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import UserLogin from './components/user/login';
import Header from './components/Layout/Header';
import Navbar from './components/Layout/Navbar';
import HomeComponent from './components/Home';
import Livebidding from './components/Livebidding';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='' element={<HomeComponent/>}/>
        <Route exact path='userlogin' element={<UserLogin/>}/>
        <Route exact path='livebidding' element={<Livebidding/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
