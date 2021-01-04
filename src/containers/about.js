import React from 'react';

import './css/about.css'

import about from '../assets/about.jpg'
export class AboutComponent extends React.Component {
  render()
  {
    return(
<div>
  
  <div  className="container-fluid"  style={{backgroundColor:'#ffffff',padding:'2%'}}  >
  <div  className="container" style={{marginTop:"3%",display:'block'}}>
    <div className="wrappera">
     <div className="wrapper flex">
    <div>

    <h3 style={{textAlign:'center',fontWeight:'bold',fontFamily:'Impact, Charcoal, sans-serif'}}>About Our Story</h3>
    <p style={{textAlign:'center',marginTop:"25px",fontSize:'20px'}}>Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
     </div>
       
    

     
  <div style={{justifyContent:'center'}} className="wrapper flex">
  <div className="col-md-12 col-sm-8 col-lg-3"> <img  width="100%" src={about} alt="" style={{marginBottom:'25px'}}></img></div>
  <div className="col-md-12 col-sm-8 col-lg-3"><img  width="100%"  src={about} alt=""></img></div>
  <div className="col-md-12 col-sm-8 col-lg-3"> <img  width="100%" src={about} alt=""></img></div>
  
</div>
</div> 
</div>

 </div>

    
    

    

   
  
  </div>




    );
  }
  }
