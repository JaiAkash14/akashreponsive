import {Typography} from '@mui/material';
import image8 from"./landing09.png"
import image9 from "./landing08.png"
import image19 from"./landing16.png"
function HomeCard(props){
  
    return(
        <div style={{ width: 180,marginTop:32,marginLeft:32,marginRight:32}}>
        <div style={{ height: 180, width: 180, borderRadius: "20px", backgroundImage: `url(${props.img})`, margin: '0 auto', marginBottom: 20, backgroundSize: 'contain', backgroundPosition: 'center',justifyContent:"flex-end",display:"flex",alignItems:"flex-end" }}>
          <div style={{height:45,width:180,backgroundColor:"rgba(0,0,0,0.4)",borderBottomLeftRadius:20,borderBottomRightRadius:20,justifyContent:"space-between",display:"flex",alignItems:"center", paddingLeft:16, paddingRight:16}}>
            <div style={{flexDirection:"row",display:"flex",alignItems:"center"}}>
            <img src={image19} style={{height:20,width:16,height:20,width:16}}></img>
            <p style={{color:"#FFFFFF",marginLeft:"2px"}}>{props.location}</p>
            </div>
            <p style={{color:"#FFFFFF"}}>Apr26th</p>


          </div>
        </div>
       <div style={{flexDirection:"row",display:"flex", justifyContent:'space-between', alignItems:'flex-start'}}>
        <div style={{flexDirection:"column",display:"flex",justifyContent:'space-between',alignItems:'flex-start'}}>
        <Typography style={{fontFamily:"Poppins",fontSize:18,fontWeight:"bold"}}>{props.rupees}</Typography> 
        <Typography style={{}}>{props.name}</Typography>
        <Typography style={{color:"#59595B"}}>Condition: {props.condition}</Typography>
        </div>
        <div style={{justifyContent:'flex-end',display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
          <Typography>128GB</Typography>
          <img src={image8} style={{height:24,width:27,marginTop:20}}></img>
        </div>


       </div>


      </div>
      
    )
}

export default HomeCard;