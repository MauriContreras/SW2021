
var formulario;         // declaracion de variable que contendra el formulario

$(document).ready(function () {         // ejecutar la funcion cuando se haya cargado completamente el DOM
    formulario = $("#fquestion");       // obtener el formulario del DOM

    $("#textFichero").change(function () {      // cuando el usuario seleccione una foto se llama a filePreview, que creara un <img> y cargara la imagen
        filePreview(this);
    });
    
    formulario.submit(function () {        // ejecutar la funcion cuando se pulse el boton submit del formulario


        // comprobar si las validaciones han sido correctas, en ese caso imprimir por consola un mensaje
        if (sonVacios() && validarCorreo() && validarEnunciado()) {
            console.log("TODOS CORRECTOS");
            alert("DATOS INTRODUCIDOS CORRECTAMENTE!");
        }

    });



    formulario.bind("reset", function(event){       // cuando el usuario pulse el boton Limpiar, ademas de vaciarse los campos del formulario
                                                    // tambien se eliminara la previsualizacion de la imagen, eliminando la etiqueta img creada
        $('#espacioImagen + img').remove();



    });


});


// funcion que comprueba que los campos obligatorios del formulario (*) no son vacios, al clicar el boton submit
// en caso de que ninguno sea vacio, la funcion devuelve true
// en caso de que algun campo sea vacio, se muestra una alerta indicando el campo en concreto
// en caso de que haya mas de un campo vacio, solo se mostrara una alerta, la correspondiente al primer campo vacio
// se utiliza un diccionario para recorrer todos los campos y comprobar uno a uno si estan vacios o no
function sonVacios() {

    var coleccionCampos = {
        "textEmail": "Email", "textEnunciado": "Enunciado", "textCorrecta": "Respuesta correcta",
        "textIncorrecta1": "Respuesta incorrecta 1", "textIncorrecta2": "Respuesta incorrecta 2",
        "textIncorrecta3": "Respuesta incorrecta 3", "selectComplejidad": "Complejidad", "textTema": "Tema de la pregunta"
    };
    var res = true;
    $.each(coleccionCampos, function (key, value) {

        if ($("#" + key).val().trim().length == 0) {

            alert("El campo " + value + " es vacio!");
            res = false;
            return false;
        }

    });

    if (res) {
        return true;
    }

}


// funcion que valida el email, con cuatro posibilidades de ser correcto, comprobados mediante expresiones regulares
function validarCorreo() {

    var correo = $("#textEmail").val().trim();      // se obtiene el valor introducido en el campo Email del formulario para comprobarlo

    var regex_email_prof1 = /^[a-zA-Z]+(\.?[a-zA-Z]+)?\@ehu\.eus$/; // profesor, acabado en @ehu.eus
    var regex_email_prof2 = /^[a-zA-Z]+(\.?[a-zA-Z]+)?\@ehu\.es$/;  // profesor, acabado en @ehu.es
    var regex_email_estd1 = /^[a-zA-Z]+[0-9]{3}\@ikasle\.ehu\.eus$/;    // alumno, acabado en @ikasle.ehu.eus
    var regex_email_estd2 = /^[a-zA-Z]+[0-9]{3}\@ikasle\.ehu\.es$/;     // alumno, acabado en @ikasle.ehu.es

    if (correo.length < 1) {                 // si el email es vacio, muestra alerta y devuelve false
        alert("El email es obligatorio");
        return false;
    } else {                                // si el email no es vacio, comprueba si pertenece a alguno de los cuatro tipos validos
        if (correo.match(regex_email_prof1) || correo.match(regex_email_prof2) || correo.match(regex_email_estd1) || correo.match(regex_email_estd2)) {
            return true;
        } else {
            alert('No es un email válido');
            return false;
        }
    }


}


// funcion que valida el enunciado de la pregunta, que no puede ser menor de 10 caracteres
function validarEnunciado() {

    var enunciado_pregunta = $("#textEnunciado").val().trim();

    if (enunciado_pregunta.length < 10) {
        alert("El enunciado debe tener 10 caracteres minimo");
        return false;
    }
    else {
        return true;
    }
}




// funcion que crea una etiqueta <img> dentro del <div> ya creado en el DOM para su fin, y dentro de dicha etiqueta <img> carga
// la imagen que el usuario selecciona, para previsualizarla en la pantalla

function filePreview(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#espacioImagen + img').remove();
            $('#espacioImagen').after('<img src="'+e.target.result+'"  height="120"/>');

        }
        reader.readAsDataURL(input.files[0]);
    }
}