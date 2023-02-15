import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './formular/Dashboard';
import FormContainer from './formular/FormContainer';
import Home from './formular/Home';
import UserGuide from './formular/UserGuide';
// import Wiki from './formular/Wiki';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<FormContainer />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/wiki' element={<Wiki />} /> */}
        <Route path='/user-guide' element={<UserGuide />} />
    </Routes>
  );
};

export default App;
