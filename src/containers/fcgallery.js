import React from 'react';

 import './css/fc.css';


export class FcComponent extends React.Component {

  state={
       menu:"all",
      img:"breakfast",
      images:[{name:require('../assets/breakfast.jpg'),type:"breakfast"},
      {name:require('../assets/breakfast1.jpg'), type:"breakfast"},
      {name:require('../assets/breakfast2.jpg'),type:"breakfast"},
      {name:require('../assets/buffet.jpg'),type:"buffet"},
      {name:require('../assets/dessert.jpg'),type:"dessert"},
      {name:require('../assets/dinner.jpg'),type:"dinner"},
      {name:require('../assets/dinner1.jpg'),type:"dinner"},
      {name:require('../assets/diner2.jpg'),type:"dinner"},
      {name:require('../assets/lunch.jpg'),type:"lunch"},]
   
     

}
onMenuSelect(event)
    { console.log(event.target.id)
    
    this.setState({menu:event.target.id},()=>{
        console.log(this.state.menu)
       
    })
  
    }
  render()
  {
    return(
<div>
  
  <div className="container-fluid"  style={{backgroundColor:'black',height:'auto',padding:'4% 10%'}}  >
  {/* <div  className="container" style={{marginTop:"40px",maxWidth:'auto',display:'block',overflow:'hidden'}}> */}
    <h3 style={{textAlign:'center',fontWeight:'bold',fontSize:'30px',fontFamily:'Impact, Charcoal, sans-serif',color:'white'}}>Food and Customer Gallery</h3>
    <div  className="gallery-area" align="center" style={{marginTop:'50px',paddingBottom:'60px'}}>

 {/* <Row className="menudiv col-lg-12 nopadding" align="center" >
 <Col  style={{}} className="menucol" onClick={this.onMenuSelect.bind(this)} id="all">All</Col>
    <Col className="menucol" onClick={this.onMenuSelect.bind(this)} id="breakfast">Breakfast </Col>
    <Col className="menucol" onClick={this.onMenuSelect.bind(this)} id="lunch">Lunch</Col>
    {/* <Col className="menucol" onClick={this.onMenuSelect.bind(this)}  id="buffet">Buffet</Col> */}
    {/* <Col className="menucol" onClick={this.onMenuSelect.bind(this)} id="dessert">Desserts</Col> */}
    {/* <Col className="menucol"  onClick={this.onMenuSelect.bind(this)} id="dinner">Dinner</Col> */}
{/* </Row>  */}
 {/* <ul className="filter-wrap filters col-lg-12 no-padding" style={{backgroundColor:'white',display:'block'}}>
<li className="active" onClick={this.onMenuSelect.bind(this)}id="all">All</li>
<li className="active" onClick={this.onMenuSelect.bind(this)}id="all">bRE</li>
 </ul> */}




</div>

<ul  style={{}}>

{this.state.menu!=="all" &&(this.state.images.filter(f=>f.type===this.state.menu).map(i=>(

    <li style={{}}>
         
       <img style={{maxWidth:'100%',height:'auto',display:'block'}} src={i.name} alt={i.type}></img>
    </li>
)))}
{this.state.menu==="all" &&(this.state.images.map(i=>(
    
    <li  style={{}}  > 
<img style={{maxWidth:'100%',height:'auto',display:'block'}}  src={i.name} alt={i.type}></img>
   
    </li>
)))} 




</ul> 





</div>
  </div>
  // </div>
  



    );
  }
  
 }
