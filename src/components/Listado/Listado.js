import './Listado.css';
import React from "react"
import Cita from '../Cita/Cita';

function Listado({citas, setCitas}) {
    {return citas.map(c => (<Cita id={c.id} mascota={c.mascota} propietario={c.propietario} fecha={c.fecha} hora={c.hora} sintomas={c.sintomas} citas={citas} setCitas={setCitas}></Cita>))}
}

export default Listado;