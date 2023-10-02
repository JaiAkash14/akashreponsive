import logo from './logo.svg';
import './App.css';
import image1 from "./Group 860.png"
import image2 from "./Vector.png"
import { TextField, Button } from '@mui/material';
import image3 from "./landing01.png"
import image4 from "./landing3.png"
import image5 from "./landing5.png"
import image6 from "./landing06.png"
import image7 from "./landing07.png"
import { Typography } from '@mui/material';
import image8 from "./landing09.png"
import HomeCard from './HomeCard';
import image10 from "./landing10.png";
import image9 from "./landing08.png"
import image11 from "./landing11.png"
import image12 from "./landing12.png"
import image13 from "./landing13.png"
import image14 from "./landing14.png"
import image15 from "./landing12.png"
import image16 from "./landing13.png"
import image17 from "./landing14.png"
import image18 from "./landing11.png"
import image19 from "./landing20.png"
import image20 from "./landing21.png"
import image21 from "./landing22.png"






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



    <div style={{ backgroundColor: "#E1E3E9", minHeight: "100vh", paddingTop: 50}}>
      <div style={{ background: "#FFFFFF", borderRadius: "16px", color: "white", height: "52px", width: "492px", flexDirection: "row", display: "flex", justifyContent: "space-between", paddingLeft: "60px", paddingRight: "60px", margin: '0 auto' }}>
        <p style={{ color: "black" }}>Popular Models</p>
        <p style={{ color: "#ABABAB" }}> Apple</p>
        <p style={{ color: "#ABABAB" }}> Samsung</p>
        <p style={{ color: "#ABABAB" }}> Oneplus</p>
      </div>



      <div style={{ width: "100%", flexDirection: "row", display: "flex" }}>
        <div style={{ width: "50%", marginLeft: "60px", marginTop: "62px" }}>
          <h1 >Buy or Sell Used and Refurbished <br />Phones with <span style={{ backgroundImage: 'linear-gradient(45deg, #5641BB, #E87A79, #C24153)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Confidence</span> </h1>
          <p style={{ color: "#59595B", marginTop: "24px" }}>Sell or buy phone in some simple steps</p>
          <div style={{ marginTop: "52px" }}>
            <Button style={{ backgroundColor: "#9A87CE", height: "59px", width: "236px", borderRadius: "16px", color: "white" }}>Download App</Button>
            <Button style={{ backgroundColor: "white", height: "59px", width: "184px", borderRadius: "16px", color: "#9A87CE", marginLeft: "62px" }}>Compare</Button>
          </div>
        </div>
        <div style={{ width: "50%", display: 'flex' }}>
          <img src={image3} style={{ height: "98%", width: '98%', marginRight: 1200, objectFit: 'contain' }}></img>
        </div>
      </div>

<div style={{position:'relative'}}>
      <div style={{ backgroundImage: "url(/landing2.png)", height: 446, width: 1291, margin: '0 auto', flexDirection: "row", display: "flex", zIndex:100, position:'relative' }}>
        <img src={image4} style={{ height: 464, width: 532, zIndex:100, position:'relative' }}></img>
        <div style={{ marginTop: "85px", zIndex:100 }}>
          <p style={{ color: "white", fontFamily: 'Poppins' }}> <ul> <li> Interact directly with the buyers and sellers of latest mobile phones and <br />save yourself the extra commission on ORUphones app.</li></ul></p>
          <p style={{ color: "white", fontFamily: "poppins" }}> <ul> <li> Get a detailed diagnosis of your device and a suitable price you can put <br />on the same to get verified buyers.</li></ul></p>
          <div style={{ flexDirection: "row", display: "flex", alignItems: 'center', marginLeft: 52, marginTop: 74, objectFit: 'contain' }}>
            <img src={image5} style={{ height: 26.67, width: 21.71, objectFit: 'contain' }}></img>
            <p style={{ marginLeft: 22, color: "#FFFFFF" }}>Download on <br /><span style={{ fontWeight: 700 }}>App Store</span></p>
            <img src={image6} style={{ height: 80, width: 80, marginLeft: 20 }}></img>
            <div style={{ flexDirection: "row", display: "flex", alignItems: 'center', marginLeft: 52 }}>
              <img src={image7} style={{ height: 32, marginLeft: 52, width: 32 }}></img>
              <p style={{ marginLeft: "13px", color: "#FFFFFF" }}>Get it on<br /><span style={{ fontWeight: 700 }}>PlayStore</span></p>
              <img src={image6} style={{ height: 80, width: 80, marginLeft: 20 }}></img>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{backgroundColor:'white', position:'absolute', width:'100%', height:'50%', top:0, zIndex:5}}></div> */}
      <div style={{backgroundColor:'white', position:'absolute', width:'100%', height:'50%', top:'50%', zIndex:5}}></div>


      </div>
      <div style={{backgroundColor:'white', paddingBottom: 200 }}>
      <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-evenly", paddingBottom: "30px", flexWrap: 'wrap' }}>

        <HomeCard name={"Apple Iphone 12"} model="apple Iphone 13" condition="good" rupees="Rs 70000" img={image9} location="Chennai" />
        <HomeCard name={"Samsung Z Fold3"} model="apple Iphone 13" condition="good" rupees="Rs 72000" img={image11} location="Delhi" />

        <HomeCard name={"Oppo A12"} model="apple Iphone 13" condition="good" rupees="Rs 30000" img={image12} location="Chennai" />

        <HomeCard name={"Galaxy Note 4"} model="apple Iphone 13" condition="good" rupees="Rs 67000" img={image13} location="Chennai" />
        <HomeCard name={"Oppo A12"} model="apple Iphone 13" condition="good" rupees="Rs 30000" img={image14} location="Delhi" />
        <HomeCard name={"Apple Iphone 12"} model="apple Iphone 13" condition="good" rupees="Rs 60000" img={image9} location="Chennai" />


        <HomeCard name={"Oppo A12"} model="apple Iphone 13" condition="good" rupees="Rs 30000" img={image15} location="Delhi" />
        <HomeCard name={"Galaxy Note 4"} model="apple Iphone 13" condition="good" rupees="Rs 67000" img={image16} location="Chennai" />
        <HomeCard name={"Oppo A12"} model="apple Iphone 13" condition="good" rupees="Rs 30000" img={image17} location="Delhi" />
        <HomeCard name={"Samsung Z Fold3"} model="apple Iphone 13" condition="good" rupees="Rs 72000" img={image18} location="Chennai" />

      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <p style={{ color: "#1F5390" }}>View all</p>
        <p style={{ marginLeft: "10px", color: "#1F5390" }}> > </p>
      </div>
      <div>
        <Typography style={{ fontWeight: "700", marginLeft: 64, fontFamily: 'Poppins' }}>Our Guide</Typography>
      </div>
      <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "54px" }}>
        <div style={{ height: 254, width: 254, borderRadius: 50, boxShadow: "2px 2px 2px #FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", }}>

          <img src={image19} style={{ height: 100, width: 100, marginTop: '25%' }}></img>
          <p style={{ color: "black", marginTop: "20px" }}>How to Sell</p>
        </div>
        <div style={{ height: 254, width: 254, borderRadius: 50, boxShadow: "2px 2px 2px #FFFFFF", alignItems: "center", flexDirection: "column", alignItems: "center", display: "flex" }}>
          <img src={image20} style={{ height: 100, width: 100, marginTop: '25%' }}></img>
          <p style={{ color: "black", marginTop: "20px" }}>How to Buy</p>
        </div>
        <div style={{ height: 254, width: 254, borderRadius: 50, boxShadow: "4px 4px 4px #E4E4E4", alignItems: "center", flexDirection: "column", alignItems: "center", display: "flex" }}>
          <img src={image21} style={{ height: 100, width: 100, marginTop: '25%' }}></img>
          <p style={{ color: "black", marginTop: "20px" }}>Our Guide</p>
        </div>
      </div>
      <div style={{marginTop:54}}>
      <Typography style={{ fontWeight: "700", marginLeft: 64, fontFamily: 'Poppins' }}>Frequently asked Questions... </Typography>
      </div>


      </div>
    </div>
  );
}

export default App;
