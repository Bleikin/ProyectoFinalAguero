import './App.css'


import {BrowserRouter,Routes,Route} from "react-router-dom";


import Layout from './components/Layout';
import Inicio from './components/Inicio';
import Error from './components/Error';
import Contacto from './components/Contacto';
import Productos from './components/Productos';
import Detalle from './components/Detalle';


function App() {


  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
               <Route index element={<Inicio/>}/>
               <Route path="/Productos" element={<Productos/>}/>
               <Route path="/Productos/:id" element={<Detalle/>}/>
               <Route path="/Contacto" element={<Contacto/>}/>
               <Route path="/*" element={<Error/>}/>
              </Route>
            </Routes>
      </BrowserRouter>

    </>
  )
  
}

export default App
