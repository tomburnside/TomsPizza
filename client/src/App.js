import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from './Components/Navbar';
import Homescreen from './screens/Homescreen';
import 'bootstrap';
import {BrowserRouter, Route, Link, Switch, Routes, Outlet} from 'react-router-dom'
import Cartscreen from './screens/Cartscreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import OrdersScreen from './screens/OrdersScreen';
import AdminScreen from './screens/AdminScreen';
import Addpizza from "./screens/Addpizza";
import Editpizza from "./screens/EditPizza";
import Orderslist from "./screens/Orderslist";
import Pizzaslist from "./screens/Pizzaslist";
import Userslist from "./screens/Userslist";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/cart" element={<Cartscreen />} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path='/orders' exact element={<OrdersScreen/>}/>
        <Route path='/admin/*' element={<AdminScreen/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
