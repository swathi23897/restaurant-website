import React from 'react';


import './css/menu.css'

import {Row,Col} from 'react-bootstrap'

export class MenuComponent extends React.Component {

  state={
    showMenu:false,
    menu:"all",
    items:[{id:1,name:"Cappuccion",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"breakfast"},
    {id:2,name:"Americano",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"breakfast"},
    {id:3,name:"Macchiato",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"lunch"},
    {id:3,name:"Piccolo Latte",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"lunch"},
    {id:4,name:"Mocha",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"dinner"},
    {id:5,name:"Piccolo Latte",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"dinner"},
    {id:5,name:"Piccolo Latte",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"buffet"},
    {id:6,name:"Ristretto",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"buffet"},
    {id:7,name:"Coldcoffee",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"desserts"},
    {id:8,name:"Americano",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"desserts"},
    {id:9,name:"Mojito",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"desserts"},
    {id:2,name:"Americano",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"breakfast"},
    {id:3,name:"Macchiato",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"lunch"},
    {id:3,name:"Piccolo Latte",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"lunch"},
    {id:4,name:"Mocha",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"dinner"},
    {id:5,name:"Piccolo Latte",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"dinner"},
    {id:5,name:"Piccolo Latte",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"buffet"},
    {id:6,name:"Ristretto",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"buffet"},
    {id:7,name:"Coldcoffee",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"desserts"},
    {id:8,name:"Americano",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"desserts"},
    {id:9,name:"Mojito",desc:"Usage of the Internet is becoming more common due to rapid advance.",price:"49",type:"desserts"}
],
     

}
onMenuSelect(event)
    {  var list=["all","breakfast","lunch","dinner"]
     list.map(i=>{
       if(i===event.target.id)
       {
       event.target.style.backgroundColor="black"
       event.target.style.color="white"
       }
       else
       {
         document.getElementById(i).style.backgroundColor="white"
         document.getElementById(i).style.color="black"
       }
     })
      // console.log(event.target.id)
     
    this.setState({menu:event.target.id,showMenu:true},()=>{
        // console.log(this.state.menu)


    })
  
    }
  render()
  {
    return(
<div>
  
  <div className="container-fluid"  style={{backgroundColor:'#f1f1f1',height:'auto',width:"100vw",marginBottom:'0em',overflow:'hidden'}}  >
  <div  className="container" style={{display:'block',width:"90vw",height:'auto'}}>
    <h3 style={{fontFamily:'Impact, Charcoal, sans-serif',textAlign:"center",fontWeight:'bold',paddingTop:'5%',paddingBottom:'3%'}}>Our Menu</h3>
    <div class="row" style={{justifyContent:'center',textAlign:'center',borderRadius:'10px',marginBottom:'3em',height:'auto', boxShadow:'0px 10px 30px 0px rgba(153,153,153,0.2)'}}>
    <div class="col-sm-3"  onClick={this.onMenuSelect.bind(this)} id="all" style={{backgroundColor:'black',color:'white',fontSize:'20px',padding:'2% 2% 2% 2%',border:'2px solid white'}}>All</div>
    <div class="col-sm-3" onClick={this.onMenuSelect.bind(this)} id="breakfast" style={{backgroundColor:'white',color:'black',fontSize:'20px',padding:'2% 2% 2% 2%'}} >Breakfast</div>
    <div class="col-sm-3" onClick={this.onMenuSelect.bind(this)} id="lunch" style={{backgroundColor:'white',color:'black',fontSize:'20px',padding:'2% 2% 2% 2%'}} >Lunch</div>
    <div class="col-sm-3" onClick={this.onMenuSelect.bind(this)} id="dinner" style={{backgroundColor:'white',color:'black',fontSize:'20px',padding:'2% 2% 2% 2%'}}>Dinner</div>
  </div>


<div className="wrapper flex" > 
{this.state.menu!=="all" &&(this.state.items.filter(f=>f.type===this.state.menu).map(i=>(
    
    <div   > 
       <Row>
  <Col><h6  style={{fontFamily:'"Lucida Console", Monaco, monospace',fontWeight:'bold'}}>{i.name}</h6></Col>
  <Col><h6 style={{float:'right',color:'red'}}>&#8377;{i.price}</h6></Col>
       </Row>
      
        <p >{i.desc}</p>
    </div>
)))} 

{this.state.menu==="all" &&(this.state.items.map(i=>(
    
 <div>
  <Row >   
  <Col><h6 style={{fontFamily:'"Lucida Console", Monaco, monospace',color:'black',fontWeight:'bold'}}>{i.name}</h6></Col>
  <Col><h6 style={{float:'right',color:'red'}}>&#8377;{i.price}</h6></Col>
  </Row> 
      
        <p >{i.desc}</p>
        </div>
)))}
</div>
 



 </div>
</div>
  </div>
 
  



    );
  }
  
 }
