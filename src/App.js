import './App.css';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Form from './components/Form/Form';
import Listado from './components/Listado/Listado';
import { useState } from 'react';

function App() {
  const [citas, setCitas] = useState([]);
  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES"></Titulo>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Subtitulo texto="CREAR MI CITA"></Subtitulo>
            <Form setCitas={setCitas} citas={citas}></Form>
          </div>
          <div className='one-half column'>
            <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
            <Listado citas={citas} setCitas={setCitas}></Listado>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
