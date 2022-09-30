import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Mainscreen from './mainscreen';
import { useEffect } from 'react';

export default function Api(){
   const[title,settitle] =useState([]);
   const[img,setimg] =useState([]);
   const[im,setim] =useState();
   useEffect(()=>{
    async function fetch_news(){
   

        var options = {
          method: 'GET',
          url: 'https://api.newscatcherapi.com/v2/latest_headlines',
          params: { lang: 'hi',countries:"IN"},
          headers: {
            'x-api-key': 'sB5BveY3yomhijWQSs67f5CmCQdftltVVsol2cYj4Io'
          }
          
        };
        
        await axios.request(options).then(function (response) {
            console.log(response);
            console.log(response.data.articles[0]);
            response.data.articles.map((t,i)=>{
                if(t.media!=""&&t.media!=null){
                
                settitle(title=>[...title,t.title]);
                setimg(img=>[...img,t.media]);
                console.log(i);
                setim(i);}
            })
            
        }).catch(function (error) {
        	console.error(error);
        });
        
            }
            fetch_news();
   },[])
  
   
    return(<>
    <div className="story">
   { title.map((val,i)=>{
   
    return(
         <Mainscreen title={val} img={img[i]}/>)

})}
   </div>
    </>);
    
}