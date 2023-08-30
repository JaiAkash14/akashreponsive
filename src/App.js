import logo from './logo.svg';
import './App.css';
import image1 from "./Group 860.png"
import image2 from "./Vector.png"
import { TextField, Button } from '@mui/material';
import 



function App() {
  return (
    // <div style={{flexDirection:"row",display:"flex",justifyContent:"space-evenly"}}> 
    //   <img src={image1} style ={{height:"28px",width:"62px",marginTop:"37PX",marginLeft:"60px"}}></img>
    //   <img src={image2} style ={{height:"26.67px",width:"21.33",marginTop:"37PX",marginLeft:"119px"}}></img>
    //   <p style={{marginLeft:"20px",marginTop:"42px",color:"#59595B"}}>India</p>
    //   <p>Blogs</p>
    //   <p>Services</p>
    //   <Button style={{backgroundColor:"#FAFAFC",height:"38px",width:"280px",color:"#ABABAB",borderRadius:"10px" }}>Search</Button>
    //   <Button style={{backgroundColor:"#A492D0",height:"42px",width:"110px",color:"white",borderRadius:"10px"}}>Sellnow</Button>




    // </div>



    <div style={{ backgroundColor: "#E1E3E9", minHeight: "100vh", paddingTop: 50 }}>
      <div style={{ background: "#FFFFFF", borderRadius: "16px", color: "white", height: "52px", width: "492px", flexDirection: "row", display: "flex", justifyContent: "space-between", paddingLeft: "60px", paddingRight: "60px", margin: '0 auto' }}>
        <p style={{ color: "black" }}>Popular Models</p>
        <p style={{ color: "#ABABAB" }}> Apple</p>
        <p style={{ color: "#ABABAB" }}> Samsung</p>
        <p style={{ color: "#ABABAB" }}> Oneplus</p>
      </div>



      <div style={{width:"100%"}}>
        <div style={{width:"50%",marginLeft:"60px",marginTop:"62px"}}>
        <h1 >Buy or Sell Used and Refurbished <br/>Phones with <span style={{backgroundImage:'linear-gradient(45deg, #5641BB, #E87A79, #C24153)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>Confidence</span> </h1>
        <p style={{ color: "#59595B",marginTop:"24px" }}>Sell or buy phone in some simple steps</p>
        <div style={{marginTop:"52px"}}>
        <Button style={{backgroundColor:"#9A87CE",height:"59px",width:"236px",borderRadius:"16px",color:"white"}}>Download App</Button>
        <Button style={{backgroundColor:"white",height:"59px",width:"184px",borderRadius:"16px",color:"#9A87CE",marginLeft:"62px"}}>Compare</Button>
        </div>
        </div>
        <div style={{width:"50%"}}>

        </div>


      </div>
    </div>
  );
}

export default App;
