import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import Inicio from './components/Inicio';
import Error from './components/Error';
import Contacto from './components/Contacto';
import Detalle from './components/Detalle';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer greeting="Todos nuestros productos" />} />
            <Route path="/item/:itemId" element={<Detalle />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
