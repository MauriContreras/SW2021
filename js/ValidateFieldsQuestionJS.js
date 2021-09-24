'use strict'

var formulario;
window.addEventListener('load', function () {

    // recogemos el formulario del html en una variable
    formulario = document.querySelector("#fquestion");
    mostrarImagenPrevisualizada();
    // añadimos un evento de escucha para cuando en el formulario se haga click en el boton submit
    formulario.addEventListener('submit', function () {

        // recogemos los valores que ha introducido el usuario en el formulario, con trim() eliminamos los espacios en blanco
        var email = document.querySelector("#textEmail").value.trim();
        var enunciado = document.querySelector("#textEnunciado").value.trim();
        var correcta = document.querySelector("#textCorrecta").value.trim();
        var incorrecta1 = document.querySelector("#textIncorrecta1").value.trim();
        var incorrecta2 = document.querySelector("#textIncorrecta2").value.trim();
        var incorrecta3 = document.querySelector("#textIncorrecta3").value.trim();
        var complejidad = document.querySelector("#selectComplejidad").value;
        var tema = document.querySelector("#textTema").value.trim();

        // inicializamos a false una variable de control por cada input que tiene el formulario, se usaran para validaciones
        var controlEmail = false;
        var controlEnunciado = false;
        var controlCorrecta = false;
        var controlIncorrecta1 = false;
        var controlIncorrecta2 = false;
        var controlIncorrecta3 = false;
        var controlTema = false;

        // si el email, enunciado, respuestas y tema son correctos, sus variables de control pasan a true
        // las validaciones de estos campos se hacen individualmente en funciones independientes (mas abajo)

        if (validarEmail(email)) {
            controlEmail = true;
        }

        if (validarPregunta(enunciado)) {
            controlEnunciado = true;
        }

        if (validarRespuestas(correcta, incorrecta1, incorrecta2, incorrecta3)) {

            controlCorrecta = true;
            controlIncorrecta1 = true;
            controlIncorrecta2 = true;
            controlIncorrecta3 = true;
        }
        if (validarTema(tema)) {
            controlTema = true;
        }


        // cuando todas las variables de control sean true, todos los datos (campos) del form son correctos
        // se le pide confirmacion al usuario mediante una ventana, si confirma, se muestran los datos en consola
        // en caso de que no confirme, no ocurrira nada, puede modificar los campos, los cuales no se limpiaran al no confirmar
        if (controlEmail && controlEnunciado && controlCorrecta && controlIncorrecta1 && controlIncorrecta2
            && controlIncorrecta2 && controlIncorrecta3 && controlTema) {

            var confirmacion = confirm("Estás seguro de que quieres insertar la pregunta?");
            if (confirmacion) {

                console.clear();
                console.log("Email: " + email);
                console.log("Pregunta: " + enunciado);
                console.log("Correcta: " + correcta);
                console.log("Incorrecta 1: " + incorrecta1);
                console.log("Incorrecta 2: " + incorrecta2);
                console.log("Incorrecta 3: " + incorrecta3);
                console.log("Complejidad: " + complejidad);
                console.log("Tema de la pregunta: " + tema);
            }


        }






    });
});



// funcion para validar email, hay cuatro tipos de email validos, pueden ser de alumno o profesor
function validarEmail(email) {

    var regex_email_prof1 = /^[a-zA-Z]+(\.?[a-zA-Z]+)?\@ehu\.eus$/; // profesor, acabado en @ehu.eus
    var regex_email_prof2 = /^[a-zA-Z]+(\.?[a-zA-Z]+)?\@ehu\.es$/;  // profesor, acabado en @ehu.es
    var regex_email_estd1 = /^[a-zA-Z]+[0-9]{3}\@ikasle\.ehu\.eus$/;    // alumno, acabado en @ikasle.ehu.eus
    var regex_email_estd2 = /^[a-zA-Z]+[0-9]{3}\@ikasle\.ehu\.es$/;     // alumno, acabado en @ikasle.ehu.es

    if (email.length < 1) {                 // si el email es vacio, muestra alerta y devuelve false
        alert("El email es obligatorio");
        return false;
    } else {                                // si el email no es vacio, comprueba si pertenece a alguno de los cuatro tipos validos
        if (email.match(regex_email_prof1) || email.match(regex_email_prof2) || email.match(regex_email_estd1) || email.match(regex_email_estd2)) {
            return true;
        } else {
            alert('No es un email válido');
            return false;
        }
    }
}

// funcion para validar la pregunta (enunciado)
function validarPregunta(pregunta) {
    if (pregunta.length < 10) {                              // si el enunciado es menor a 10 caracteres muestra alerta y devuelve false
        alert("La pregunta debe tener mínimo 10 caracteres")
        return false;
    }
    else {
        return true;
    }
}


// funcion para validar las respuestas, tanto la correcta como las tres incorrectas
// las respuestas solo tienen como restriccion que no sean vacias, ya que son obligatorias
// se comprueba si alguna de las cuatro respuestas es vacia y si lo es, se muestra alerta y se devuelve false
function validarRespuestas(correcta, incorrecta1, incorrecta2, incorrecta3) {
    if (correcta.length == 0 || incorrecta1.length == 0 || incorrecta2.length == 0 || incorrecta3.length == 0) {
        alert("Todas las respuestas son obligatorias");
        return false;
    }
    else {
        return true;
    }
}


// funcion para validar el tema de la pregunta, unica restriccion: no ser vacia, ya que es obligatorio
function validarTema(tema) {
    if (tema.length == 0) {                                 // si el tema es vacio, se muestra alerta y se devuelve false
        alert("El tema de la pregunta es obligatorio");
        return false;
    }
    else {
        return true;
    }
}


// funcion que crea una etiqueta img en el DOM y le inserta la imagen que selecciona el usuario 
// a la imagen se le da un tamaño y una posicion en la pagina html
function mostrarImagenPrevisualizada() {

    var fotocreada = document.createElement('img');
    fotocreada.id = "imagenSeleccionada";

    var inputFile = document.querySelector("#textFichero");
    fotocreada.setAttribute("style", "margin-right: 200px;");
    // fotocreada.setAttribute("height", "120px");
    fotocreada.height="120";
    inputFile.addEventListener('change', () => {

        var archivo = inputFile.files;

        if (!archivo || !archivo.length) {
            fotocreada.src = "";
            return false;
        }

        var imagensubida = archivo[0];
        var objectURL = URL.createObjectURL(imagensubida);
        fotocreada.src = objectURL;
        var espacioImagen = document.querySelector("#espacioImagen");
        espacioImagen.appendChild(fotocreada);
    });



}