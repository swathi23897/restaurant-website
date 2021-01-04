import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HeaderComponent } from "./header";

import { HomeComponent } from './home';

import { Header1Component } from './header1';
import {AboutComponent} from './about'
import {MenuComponent} from './menu'
import {FcComponent} from './fcgallery'
export class RoutesComponent extends React.Component{

    render(){
      
      return  <Switch>
              <Route exact path="/" component={()=><HomeComponent />} ></Route>
            
              <Route path="/home" component={()=><HomeComponent />}></Route>
              
              <Route path="/header1" component={()=><Header1Component {...this.props}/>}></Route>  
              <Route path="/about" component={()=><AboutComponent />}></Route>
              <Route path="/menu" component={()=><MenuComponent />}></Route>
              <Route path="/fc" component={()=><FcComponent />}></Route>
          </Switch>
        
    }
}