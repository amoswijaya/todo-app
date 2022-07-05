import Home from './components/home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import { AuthContextProvider } from './context/authContext';
import ProtectedRoute from './components/protectRoute';
import Register from './components/register';
export default function App() {
  return (
    <div data-theme='light' className='h-screen'>
      <AuthContextProvider>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
