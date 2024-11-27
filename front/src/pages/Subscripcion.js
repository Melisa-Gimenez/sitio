import '../styles/components/pages/Subscripcion.css';
import React from "react";

const Subscripcion = (props) => {
    return(
<subscripcion>

<main className="holder contacto">

<div>

<h2>Contacto Rápido</h2>

<form className="formulario" action=""

method="">

<p>

<label for="nombre">Nombre</label>

<input type="text" />

</p>

<p>

<label for="email">Email</label>

<input type="text" />

</p>

<label for="telefono">Telefono</label>

<p>

<input type="text" />

</p>

<p>

<label for="mensaje">Mensaje</label>

<textarea></textarea>

</p>

<p className="acciones"><input type="submit"

value="Enviar" /></p>

</form>

</div>

<div className="datos">

<h2>Otras vias de comunicación</h2>

<p>También puede contactarse con nosotros

usando los siguintes medios</p>

<ul>

<li>Teléfono: 43242388</li>

<li>Email:

contacto@transportesx.com.ar</li>

<li>Facebook:</li>

<li>Twitter:</li>

<li>Skype:</li>

</ul>

</div>

</main>

</subscripcion>
    );
    }

export default Subscripcion