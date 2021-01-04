import React from 'react';
import './css/home.css'
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { Header1Component } from './header1';
import {AboutComponent} from './about'
import {MenuComponent} from './menu'
import {FcComponent} from './fcgallery'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
export class HomeComponent extends React.Component {
  scroll(id,event)
  {
    var pos=document.getElementById(id)
    console.log(pos.offsetTop)
   window.scrollTo(0,pos.offsetTop)
  }
  render() {
   
    return <div >
     <Navbar id="home" fixed="top" expand="lg" style={{color:'white',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
      <Navbar.Brand href="/" style={{color:'white'}}><span></span>MAA RESTAURANT</Navbar.Brand>
      <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style={{cursor:'pointer'}} id="basic-navbar-nav">
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'home')}>Home</Navbar.Text>
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'about')}>About</Navbar.Text>
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'menu')}>Menu</Navbar.Text>
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'fc')}>Gallery</Navbar.Text>
        <Navbar.Text className="ml-5" style={{color:'white'}} onClick={this.scroll.bind(this,'footer')}>Contact</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
      <main  role="main" height="100%" 
    width="100%" >
    <div   id="home">
   <Header1Component ></Header1Component>
   </div>
  <div id="about">
  <AboutComponent ></AboutComponent> 
  </div>
  <div id="menu">
  <MenuComponent></MenuComponent> 
  </div>
  <div id="fc">
  <FcComponent></FcComponent> 
  </div>
      </main>
      <div id="footer">
      <FooterComponent></FooterComponent>
      </div>
    </div>



  }
}