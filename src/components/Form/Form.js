import './Form.css';
import React from "react"

function Form() {
    return (
        <form>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value="" />
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" class="u-full-width" placeholder="Nombre Mascota" value=""/>
            <label>Fecha</label>
            <input type="date" name="fecha" class="u-full-width" placeholder="Nombre Mascota" value=""/>
            <label>Hora</label>
            <input type="time" name="hora" class="u-full-width" placeholder="Nombre Mascota" value=""/>
            <label>Sintomas</label>
            <textarea name="sintomas" class="u-full-width"></textarea>
            <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </form>
    )
}

export default Form;