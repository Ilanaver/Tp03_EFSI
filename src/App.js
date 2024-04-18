import './App.css';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Form from './components/Form/Form';
import Cita from './components/Cita/Cita';

function App() {
  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES"></Titulo>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Subtitulo texto="CREAR MI CITA"></Subtitulo>
            <Form></Form>
          </div>
          <div className='one-half column'>
            <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
            <Cita nombre_perro="Nina" dueño="Martin" fecha = "2021-08-05" hora="08:20" sintomas="Le duele la pierna" ></Cita>
            <Cita nombre_perro = "Sifon" dueño = "Flecha" fecha = "2023-08-05" hora = "09:24" sintomas = "Duerme mucho"></Cita>
            <Cita nombre_perro = "Floki" dueño = "Ari" fecha = "2023-08-05" hora = "16:15" sintomas = "No esta comiendo"></Cita>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
