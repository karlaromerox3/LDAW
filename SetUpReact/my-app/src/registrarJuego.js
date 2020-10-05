import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

//Importing Icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas,far)


export default function registrarJuego() {
    return (
<div class="container">
    <h3>REGISTRAR JUEGO</h3>
    <h5><span class="badge badge-light">Todos los campos son obligatorios.</span></h5>
    <form>
        <div class="form-group">
            <FontAwesomeIcon icon={['fas', 'gamepad']} color="white"/>
            &nbsp;
            <label for="tituloJuego">Título:</label>
            <input type="" class="form-control" id="tituloJuego" aria-de scribedby="" placeholder=""></input>
        </div>
        
        <div class="form-group">
            <FontAwesomeIcon icon={['fas', 'user']} color="white"/>
            &nbsp;
            <label for="nombreDueño">Nombre completo:</label>
            <input type="text" class="form-control" id="nombreDueño" placeholder="Maria Sandoval Arrieta"></input>
        </div>

        <div class="row">
            <div class="col-6">
                <div class="form-group">
                    <FontAwesomeIcon icon={['fas', 'phone-alt']} color="white"/>
                    &nbsp;
                    <label for="exampleInputEmail1">Teléfono:</label>
                    <input type="text" class="form-control" id="hospital" aria-describedby="emailHelp" placeholder="4423674523"></input>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <FontAwesomeIcon icon={['fas', 'mobile']} color="white"/>
                    &nbsp;
                    <label>Celular:</label>
                    <input type="text" class="form-control" placeholder="4427003542" aria-label="busquedaNombre" aria-describedby="magGlass"></input>
                </div>
            </div>
        </div>

        <div class="form-group">
            <FontAwesomeIcon icon={['fas', 'envelope']} color="white"/>
            &nbsp;
            <label for="exampleInputEmail1">Correo:</label>
            <input type="mail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mariaSandoval@gmail.com"></input>
        </div>

        <div class="form-group">
            <FontAwesomeIcon icon={['fas', 'comment']} color="white"/>
            &nbsp;
            <label>Condiciones:</label>
            <div class="input-group">
  		        <textarea class="form-control" aria-label="With textarea"></textarea>
	       </div>
	    </div>

        <div class="row text-center">
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Registrar</button>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <button type="submit" class="btn btn-primary float-left"><FontAwesomeIcon icon={['fas', 'arrow-circle-left']}/> Regresar</button>
            </div>
        </div>

    </form> 
</div>
    )
}
