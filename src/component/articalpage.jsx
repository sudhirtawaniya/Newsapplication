import Box from '@mui/material/Box';
import {TextField,Button} from '@mui/material';
import { useState } from 'react';
import { useRef } from 'react';
import JoditEditor from 'jodit-react'
import "./artical.css"
export default function Articalpage(){
    const editor= useRef(null);
   
    const[data,setdata]=useState({
        cat:'',
        title:'',
        summary:''
    });
    const[content,setcontent]=useState('')
    const senddata=(e)=>{
        e.preventDefault();
        setdata({...data,['cat']:content})
        console.log(content);
        console.log(data);
        
    }
    const setter=(e)=>{
            setdata({...data,[e.target.name]:e.target.value})
    }
    return(<div className='ar_container'>
        <form onSubmit={senddata}>
        <div className="input">
    <TextField id="outlined-basic" name="title"  label="News Title" variant="outlined" 
    onChange={setter}
    /></div>
    <div className="input">
    <TextField id="outlined-basic" name='summary'  label="Summary" variant="outlined" 
    onChange={setter}/>
    </div>
    <div className="post">
        <JoditEditor
        ref={editor}
        value={content}
        onChange={newContent=>{
            setcontent(newContent);
           
           
        }}
        />

    </div>
    <div className="button">
<Button variant="contained" type="submit" className='b1' color="success">
  Success
</Button>
<Button variant="outlined" className="b1" color="error">
  Error
</Button>

</div>
</form>
    </div>)
}