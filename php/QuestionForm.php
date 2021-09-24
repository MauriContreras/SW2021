<!DOCTYPE html>
<html>

<head>
    <?php include '../html/Head.html'?>
</head>

<body>
    <?php include '../php/Menus.php' ?>
    <section class="main" id="s1">
        <div style="background: rgb(221, 194, 41)">
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
            </style>
            <b>
                <p style="font-size:25pt">DATOS DE LA PREGUNTA</p>
            </b><br>
            <form id='fquestion' name='fquestion' action=’AddQuestion.php’ type="POST" enctype="multipart/form-data">
                <table style="margin-left: 500px">
                    <tr>
                        <td align="right">
                            <label for="textEmail">Email*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textEmail" name="textEmail"><br>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textEnunciado">Enunciado de la pregunta*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textEnunciado" name="textEnunciado">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textCorrecta">Respuesta correcta*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textCorrecta" name="textCorrecta">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textIncorrecta1">Respuesta incorrecta*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textIncorrecta1" name="textIncorrecta1">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textIncorrecta2">Respuesta incorrecta*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textIncorrecta2" name="textIncorrecta2">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textIncorrecta3">Respuesta incorrecta*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textIncorrecta3" name="textIncorrecta3">
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textComplejidad">Complejidad*:</label>
                        </td>
                        <td align="left">
                            <select name="selectComplejidad" id="selectComplejidad">
                                <option value="1">1-Baja</option>
                                <option value="2">2-Media</option>
                                <option value="3">3-Alta</option>

                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            <label for="textTema">Tema de la pregunta*:</label>
                        </td>
                        <td align="left">
                            <input type="text" id="textTema" name="textTema">
                        </td>
                    </tr>

                    <tr>
                        <td align="right">
                            <label for="textFichero">Imagen relacionada:</label>
                        </td>
                        <td width="600px" align="left">
                            <input type="file" id="textFichero" name="textFichero"
                                accept="image/png, .jpeg, .jpg, image/gif">
                        </td>
                    </tr>

                </table>


               <br><input type="submit" id="botonSubmit" value="Enviar solicitud">


            </form>
        </div>
    </section>
    <?php include '../html/Footer.html' ?>
</body>

</html>