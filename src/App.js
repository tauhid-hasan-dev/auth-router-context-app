import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Register from './components/Register/Register';
import Main from './layout/Main';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {path:'/', 
  element: <Main></Main>,
  children: [
    {path: '/', 
     element: <Home></Home> 
    },
    {path: '/home', 
     element: <PrivateRoute><Home></Home></PrivateRoute> 
    },
    {path: '/login', 
     element: <Login></Login> 
    },
    {path: '/orders', 
     element: <PrivateRoute><Orders></Orders></PrivateRoute>
    },
    {path: '/register', 
     element: <Register></Register> 
    },
  ]
}
])

function App() {
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
        
    </div>
  );
}

export default App;
