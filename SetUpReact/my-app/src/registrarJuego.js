import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import TitleDrop from "./components/TitleDrop"

//Importing Icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas,far)


export default function RegistrarJuego() {
    return (
<div className="container">
    <h3>REGISTRAR JUEGO</h3>
    <h5><span className="badge badge-light">Todos los campos son obligatorios.</span></h5>
    <form>
        <div className="form-group">
            <FontAwesomeIcon icon={['fas', 'gamepad']} color="white"/>
            &nbsp;
            <label for="tituloJuego">Título:</label>
            <TitleDrop/>
        </div>
        
        <div className="form-group">
            <FontAwesomeIcon icon={['fas', 'user']} color="white"/>
            &nbsp;
            <label for="nombreDueño">Nombre completo:</label>
            <input type="text" className="form-control" id="nombreDueño" placeholder="Maria Sandoval Arrieta"></input>
        </div>

        <div className="row">
            <div className="col-6">
                <div className="form-group">
                    <FontAwesomeIcon icon={['fas', 'phone-alt']} color="white"/>
                    &nbsp;
                    <label for="exampleInputEmail1">Teléfono:</label>
                    <input type="text" className="form-control" id="hospital" aria-describedby="emailHelp" placeholder="4423674523"></input>
                </div>
            </div>
            <div className="col-6">
                <div className="form-group">
                    <FontAwesomeIcon icon={['fas', 'mobile']} color="white"/>
                    &nbsp;
                    <label>Celular:</label>
                    <input type="text" className="form-control" placeholder="4427003542" aria-label="busquedaNombre" aria-describedby="magGlass"></input>
                </div>
            </div>
        </div>

        <div className="form-group">
            <FontAwesomeIcon icon={['fas', 'envelope']} color="white"/>
            &nbsp;
            <label for="exampleInputEmail1">Correo:</label>
            <input type="mail" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mariaSandoval@gmail.com"></input>
        </div>

        <div className="form-group">
            <FontAwesomeIcon icon={['fas', 'comment']} color="white"/>
            &nbsp;
            <label>Condiciones:</label>
            <div className="input-group">
  		        <textarea className="form-control" aria-label="With textarea"></textarea>
	       </div>
	    </div>

        <div className="row text-center">
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Registrar</button>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <Link to="/registrado">
                <button className="btn btn-primary float-left"><FontAwesomeIcon icon={['fas', 'arrow-circle-left']}/> Regresar</button>
                </Link>
            </div>
        </div>

    </form> 
</div>
    )
}
