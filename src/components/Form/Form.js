import './Form.css';
import React from "react"

function Form({setCitas, citas}) {
    const agregarCita = (e) =>{
        e.preventDefault();
        
        let agregar = window.confirm("Estas seguro de agregar la cita?");
        if(agregar){
            let mascota = e.target.mascota.value
            let propietario = e.target.propietario.value
            let fecha = e.target.fecha.value
            let hora = e.target.hora.value;
            let sintomas = e.target.sintomas.value;
            let id = Date.now();
            let contieneSoloLetras = validarDatos(mascota);
            let contieneSoloLetras2 = validarDatos(propietario);
            let contieneSoloLetras3 = validarDatos(sintomas);

            if (contieneSoloLetras && contieneSoloLetras2 && contieneSoloLetras3) {
                setCitas([
                    ...citas,
                    {
                        mascota,
                        propietario,
                        fecha,
                        hora,
                        sintomas,
                        id
                    }])        
            } else {
                alert("Datos invalidos, cambiar")
            }
            
        }
    }
    function validarDatos(nombre){
        const regex = /^[a-zA-Z\s]*$/;
        return regex.test(nombre);
    }
    return (
        <form onSubmit={agregarCita}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" defaultValue=""/>
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