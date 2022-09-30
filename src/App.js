
import './App.css';
import Api from './component/Api.jsx'
import Mainscreen from './component/mainscreen';
import Maintopic from './component/maintopic';

import Nav from './component/nav';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Articalpage from './component/articalpage';

function App() {
  
  
  return (
   <>
   
  <Nav/>

<BrowserRouter basename='/'>
<Routes>
<Route path='/' element={<Api/>}/>
<Route path='/search' element={<Articalpage/>}/>
</Routes>
</BrowserRouter>

   </>
  );
}

export default App;
