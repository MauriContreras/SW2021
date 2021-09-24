<!DOCTYPE html>
<html>

<head>
    <?php include '../html/Head.html'?>
    <meta charset="utf-8" />
    <!-- <script type="text/javascript" src="../js/ValidateFieldsQuestionJS.js"></script> -->
    <script src="../js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="../js/ValidateFieldsQuestionJQ.js"></script>


</head>

<body>

    <?php include '../php/Menus.php' ?>
    <section class="main" id="s1">
        <!-- caja que engloba todo el formulario -->
        <div style="background: rgb(14, 216, 155); border: solid rgb(80, 9, 247)">
            <!-- estilos para el tamaño de letra de los textos, los input y el desplegable -->
            <style type="text/css">
            td {
                font-size: 14pt
            }

            input {
                font-size: 12pt
            }

            select {
                font-size: 12pt
            }

            #botonSubmit {
                font-weight: bold;
                cursor: pointer;
                padding: 5px;
                margin: 0 10px 20px 0;
                border: 1px solid #ccc;
                background: #eee;
                border-radius: 8px 8px 8px 8px;
            }

            #botonSubmit:hover {
                background: #ddd;
            }

            #botonReset {
                font-weight: bold;
                cursor: pointer;
                padding: 5px;
                margin: 0 10px 20px 0;
                border: 1px solid #ccc;
                background: #eee;
                border-radius: 8px 8px 8px 8px;
            }

            #botonReset:hover {
                background: #ddd;
            }
            </style>
            <!-- Titulo del formulario -->
            <b>
                <p style="font-size:25pt">DATOS DE LA PREGUNTA</p>
            </b><br>
            <!-- formulario que, por ahora, solo se envia a un JS para validacion -->
            <form id='fquestion' name='fquestion' action="’AddQuestionWithImage.php’" type="POST"
                enctype="multipart/form-data" onsubmit="return false;">
                <!-- tabla dentro del formulario para alinear los elementos del formulario y centrar la tabla
                     se alinean los textos (labels) a la derecha de la celda y los input text a la izquierda de la celda
                     cada etiqueta (label) esta asociada a su respectivo input con el atributo for -->
                <table style="margin-left: 450px">
                    <tr>
                        <td align="right">
                            <label id="labelEmail" for="textEmail">Email*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textEmail" name="textEmail" size="30"><br>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textEnunciado">Enunciado de la pregunta*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textEnunciado" name="textEnunciado" size="30">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textCorrecta">Respuesta correcta*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textCorrecta" name="textCorrecta" size="30">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textIncorrecta1">Respuesta incorrecta 1*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textIncorrecta1" name="textIncorrecta1" size="30">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textIncorrecta2">Respuesta incorrecta 2*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textIncorrecta2" name="textIncorrecta2" size="30">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textIncorrecta3">Respuesta incorrecta 3*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textIncorrecta3" name="textIncorrecta3" size="30">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textComplejidad">Complejidad*:</label>
                        </td>
                        <td align="left">
                            <!-- menu desplegable, id para identificar cada opcion con un numero -->
                            <select name="selectComplejidad" id="selectComplejidad">
                                <option value="1" id="1" name="Baja">Baja</option>
                                <option value="2" id="2" name="Media">Media</option>
                                <option value="3" id="3" name="Alta">Alta</option>

                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textTema">Tema de la pregunta*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textTema" name="textTema" size="30">
                        </td>
                    </tr>

                    <tr>
                        <td align="right">
                            <label for="textFichero">Imagen relacionada:</label>
                        </td>
                        <!-- se ensancha la columna para que quede alineado todo ya que el input file
                             es ancho, se admite subida de imagenes en formatos png, jpeg, jpg y gif -->
                        <td width="600px" align="left">
                            <input type="file" id="textFichero" name="textFichero"
                                accept="image/png, .jpeg, .jpg, image/gif">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div id="espacioImagen"></div>
                            <!--div para insertar la etiqueta img dinamicamente-->
                        </td>

                    </tr>

                    <tr>
                        <td colspan="2">
                            <center>
                                <input type="reset" id="botonReset" value="Limpiar" style="margin-left:-200px">
                                <!--boton reset-->
                                <input type="submit" id="botonSubmit" value="Enviar solicitud" style="margin-left:50px">
                                <!--boton submit-->
                            </center>
                        </td>

                    </tr>


                </table>




            </form>

            <br>
            <p align="right" style="font-size:12pt; font-weight:bold">*Campo obligatorio</p>
        </div>
    </section>
    <?php include '../html/Footer.html' ?>
</body>

</html>