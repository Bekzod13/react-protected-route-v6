import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';

// import pages
import Login from './pages/Login';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route element={<Home/>} path='/'/>
          <Route element={<Products/>} path='/products'/>
        </Route>
          <Route element={<Login/>} path='/login'/>
      </Routes>
    </Router>
  );
}

export default App;
