import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/1.png';
import cart_icon from '../../assets/shopping-cart.png';
import { Link } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  const {getTotalCartItems} =useContext(HomeContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' className='logo'/>
      </div>
      <ul className='nav-menu'>
        <li className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          {menu === "Home" && <hr />}
        </li>
        <li className={menu === "Men" ? "active" : ""} onClick={() => setMenu("Men")}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
          {menu === "Men" && <hr />}
        </li>
        <li className={menu === "Women" ? "active" : ""} onClick={() => setMenu("Women")}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
          {menu === "Women" && <hr />}
        </li>
        <li className={menu === "Kids" ? "active" : ""} onClick={() => setMenu("Kids")}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
          {menu === "Kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='' className="cart-icon" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems}</div>
      </div>
    </div>
  );
}

export default Navbar;
