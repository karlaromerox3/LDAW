<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Allerta+Stencil&family=Montserrat&family=Sulphur+Point&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: black;
                color: white;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
                font-family: 'Montserrat', sans-serif;
            }

            .title {
                font-size: 84px;
                font-family: 'Allerta Stencil', sans-serif;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            table{
                text-align: left;
                padding: 15px;
            }
            th, td{
                padding: 15px;
                border: 1px solid black;
                border-color: white;
            }

            tr:hover {
                background-color: #c9dbfc;
                color: black;
            }

            thead{
                background-color: #c9dbfc;
                color: black;
            }
        </style>
    </head>
    <body>
         <div class="content">
                <div class="title">
                    NUESTRO EQUIPO
                </div>
                <table class="table table-bordered data-table">
                    <thead>
                        <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Matrícula</th>
                        <th>Experiencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><img height='250px' src="/images/Angi.jpeg" alt="Angie"></th>
                            <th>María de los Angeles Contreras Anaya</th>
                            <th>A01700284</th>
                            <th>La única experiencia que he tenido con desarrollo web fue la que adquirí el semestre pasado en bloque 1, he trabajdo con javascript, html5, css3 y php. De librerías he ocupado jQuery, bootstrap y materialize. </th>
                        </tr>
                        <tr>
                            <th><img height='250px' src="/images/Karla.jpeg" alt="Karly"></th>
                            <th>Karla Daniela Romero Pérez</th>
                            <th>A01704384</th>
                            <th>Mi experiencia con desarrollo web abarca desde bloque 1 con un proyecto para una asociación civíl, donde ocupamos tecnologías como JavaScript, HTML5, CSS3, PHP y MySQL, Bootstrap, Materialize o JQuery. Además tengo un poco de experiencia con Django ya que lo usé para un proyecto en el negocio familiar.</th>
                        </tr>
                        <tr>
                        <th><img height='250px' src="/images/Mariana.jpeg" alt="Mariana"></th>
                            <th>Mariana Favarony Ávila</th>
                            <th>A01704671</th>
                            <th>En cuanto al desarrollo web la única experiencia que he adquirido ha sido en el proyecto de bloque 1 el semestre pasado. He trabajado con html5, javascript,css3 y php. He utilizado las siguientes librerias:  jQuery, bootstrap y materialize.</th>
                        </tr>
                    </tbody>
                </table>
            </div>
    </body>
</html>