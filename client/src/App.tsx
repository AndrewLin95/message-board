import {FC} from 'react';
import Home from './Components/Pages/Home'
import NewMessage from './Components/Pages/NewMessage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: FC = () => {
  return(
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path='/new' element={<NewMessage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;