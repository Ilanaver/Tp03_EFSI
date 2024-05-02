import './Listado.css';
import React from "react"
import Cita from '../Cita/Cita';

function Listado({citas, setCitas}) {
    return citas.map(c => <Cita nombre_perro={c.nombre_perro} dueño={c.dueño} fecha={c.fecha} hora={c.hora} sintomas={c.sintomas}></Cita>)
}

export default Listado;