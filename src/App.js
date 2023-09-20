import './App.css';
import Home from './screens/home';
import Login from './screens/login';
import ARscene from './screens/arscene';
import { Route, Routes } from 'react-router-dom';
import { Addmodel } from './components/addmodel';
import BrandHeader from './components/Header';
import Profile from './screens/profile';
import Footer from './components/footer';

function App() {

  return (
      <><div className='App'>
      <BrandHeader/>
    </div>
      <Routes>
        <Route path='/' index element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/arscene' element={<ARscene/>}/>
        <Route path='/add-model' element={<Addmodel/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </>
  );
}
 
export default App;
