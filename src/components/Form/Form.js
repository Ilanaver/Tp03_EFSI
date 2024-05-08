import './Form.css';
import React, { useState } from "react"

function Form({setCitas, citas}) {
    const agregarCita = (e) =>{
        e.preventDefault();
        setCitas([
            ...citas,
            {
                mascota: e.target.mascota.value,
                propietario: e.target.propietario.value,
                fecha: e.target.fecha.value,
                hora: e.target.hora.value,
                sintomas: e.target.sintomas.value
            }])
    }
    return (
        <form onSubmit={agregarCita}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" defaultValue="" />
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre Mascota" defaultValue=""/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" placeholder="Nombre Mascota" defaultValue=""/>
            <label>Hora</label>
            <input type="time" name="hora" className="u-full-width" placeholder="Nombre Mascota" defaultValue=""/>
            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width"></textarea>
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
    )
}

export default Form;