import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import './css/header.css'
import { Link } from 'react-router-dom';
import restaurant from '../assets/restaurant.jpg'
import food from '../assets/food.jpg'
import {Container,Row,Col} from 'react-bootstrap'
import cover from '../assets/cover.jpg'
import rest from '../assets/rest.png'
import ingredients from '../assets/ingredients.jpg'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'
import spices from '../assets/spices.jpg'
import indianfood from '../assets/indianfood.jpg'
import tomato from '../assets/tomato.jpg'
import chilli from '../assets/chilli.jpg'
 import './css/header1.css'
// import { NavComponent } from './navbar';
export class Header1Component extends React.Component {

  render()
  {
   return<div className="wrapper2">
    
     <div style={{ maxHeight:'20%',Width:'100vh', paddingTop:'700px',backgroundImage:`url(${food})`,backgroundRepeat:'no-repeat',objectFit:'cover',filter:'brightness(120%)', backgroundPosition: 'center'}}></div>
    
   </div>
    
    
    // <div className="container-fluid"  style={{ maxHeight:'20%',Width:'100vh', paddingTop:'700px',backgroundImage:`url(${food})`,backgroundRepeat:'no-repeat',objectFit:'cover',backgroundSize:'100% 100%',filter:'brightness(120%)', backgroundPosition: 'center center'}}>
    
    // // </div>
    // }
  }
}
