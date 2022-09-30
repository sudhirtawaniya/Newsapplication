import React from 'react'
import "./ms.css"
import imgn from "../img/lsg.png"
export default function Mainscreen(props){
return(<>
       
        
            <div className="topic"> <img src={props.img} alt="" className="msi" ></img>
            <p className="stt">{props.title}
         </p>
            
           
        </div>

</>);
}