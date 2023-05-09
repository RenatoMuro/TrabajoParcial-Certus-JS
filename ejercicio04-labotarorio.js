$("document").ready(function () {
    $("#registroUsuario").submit(function () {
        return function () {
            let response = confirm("seguro que deseas enviar? ");
            if (response) { //Caso preciosa aceptar

                /* Obtener un campo */
                let txtNombre = $("#txtNombre").value;
                let txtCorreo = $("#txtCorreo").value;

                /* Validar el valor del campo Nombre */
                if (txtNombre.lenght > 50 || txtNombre.lenght < 2) {
                    alert("Su nombre no es aceptado...")
                    return false;
                }

                /* Validar el valor del campo correo */
                if (txtCorreo.matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
                    alert("Correo incorrecto. ");
                    return false;
                }
            }
            else { //Caso preciosa cancelar
                return false;
            }
        };
    })
})