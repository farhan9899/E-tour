import { padding } from "@mui/system";

 export const Morquee = () => {
    const mystyle = {
      marginRight:"13px",
         borderRadius:"47px", 
         width:"250px",
          height:"150px",
          marginTop: "21px"
      };
    return(

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '50%', overflow: 'hidden' }}>
    <marquee behavior="scroll" direction="left" scrollamount="8">
    <img src="/Images/kashmir3.jpg" alt="img1" style={mystyle} />
   <img src="/Images/amritsar.jpg" alt="img1" width="270px" height="179px" style={mystyle}/>
   <img src="/Images/flyover.jpg" alt="img1"width="270px" height="179px" style={mystyle}/>
   <img src="/Images/beach.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   <img src="/Images/tajmahal.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   <img src="/Images/palace1.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   <img src="/Images/maldives.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
    </marquee>
  </div>
  <div style={{ width: '50%', overflow: 'hidden' }}>
  <marquee behavior="scroll" direction="right" scrollamount="8">
  <img src="/Images/kerla.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   <img src="/Images/kashmir.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   <img src="/Images/amritsar2.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   <img src="/Images/indiagate.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   <img src="/Images/himalaya.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   <img src="/Images/kerla6.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   <img src="/Images/mahal.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
    </marquee>
  </div>
</div>
    );
 }

//     <div class=" container-fluid d-flex  text-white text-center myelement" id="scrollbar" style={{marginTop:"10px"}}>

//    <marquee behavior="scroll" direction="left" scrollamount="10">
 
   // <img src="/Images/kashmir3.jpg" alt="img1" style={mystyle} />
   // <img src="/Images/amritsar.jpg" alt="img1" width="270px" height="179px" style={mystyle}/>
   // <img src="/Images/flyover.jpg" alt="img1"width="270px" height="179px" style={mystyle}/>
   // <img src="/Images/beach.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   // <img src="/Images/tajmahal.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   // <img src="/Images/palace1.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   // <img src="/Images/maldives.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   // <img src="/Images/kerla.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   // <img src="/Images/kashmir.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   // <img src="/Images/amritsar2.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   // <img src="/Images/indiagate.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   // <img src="/Images/himalaya.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   // <img src="/Images/kerla6.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   // <img src="/Images/mahal.jpg" alt="img1" width="270px" height="179px"style={mystyle}/>
   
//    </marquee>
//  </div>