/**
 * Description: crud de cliente
 */


$(document).ready(function(){

    //insertar CLIENTE
        // Cuando se haga clic en el botón "Enviar"
/*$("#insertarCliente").on('click', function() {
            // Recoge los valores de los campos de entrada
            console.log($('#codigoCliente').val())
            let clienteData = {
                idNit: $('#codigoCliente').val(),
                nombre: $('#nombrecliente').val(),
                correo: $('#correocliente').val(),
                telefono: $('#telefonocliente').val(),
                administrador: {
                    numDoc: $('#administradorcliente').val()
                }
            };
            $.ajax({

                url: "http://localhost:8080/clientes/insertar",// La URL de tu endpoint de inserción
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(clienteData),
                success: function(response) {
                    // Cliente insertado con éxito
                    alert("Cliente insertado con éxito");
                    // Limpia los campos de entrada
                    console.log(response)
                },
                error: function(xhr,status,error) {
                    // Maneja el error en caso de que falle la inserción
                    alert("no se pudo ingresar el cliente");
                    console.error(error)
                }
            });
        });**/
        $(document).ready(function() {
            // Cuando se haga clic en el botón "Enviar"
            $("#insertarCliente").click(function() {
                // Recoge los valores de los campos de entrada
                var nit = $("#nitcliente").val();
                var nombreCliente = $("#nombrecliente").val();
                var correoCliente = $("#correocliente").val();
                var telefonoCliente = $("#telefonocliente").val();
                var administrador = $("#administradorcliente").val(); // Valor del select

                // Crea un objeto de cliente con los valores recogidos
                var cliente = {
                    "idNit": nit,
                    "nombre": nombreCliente,
                    "correo": correoCliente,
                    "telefono": telefonoCliente,
                    "administrador": {
                        "numDoc": administrador // La llave foránea
                    }
                };

                // Realiza la solicitud AJAX para insertar el cliente
                $.ajax({
                    type: "POST",
                    url: "http://localhost:8080/clientes/insertar",// La URL de tu endpoint de inserción
                    contentType: "application/json",
                    data: JSON.stringify(cliente),
                    success: function(response) {
                        // Cliente insertado con éxito
                        alert("Cliente insertado con éxito");
                        // Limpia los campos de entrada
                        $("#nitcliente").val("");
                        $("#nombrecliente").val("");
                        $("#correocliente").val("");
                        $("#telefonocliente").val("");
                        // Restablece el valor del select
                        $("#administradorcliente").val("");
                    },
                    error: function() {
                        // Maneja el error en caso de que falle la inserción
                        alert("Error al insertar el cliente");
                    }
                });
            });
        });

    //Buscar CLIENTE por ID
    $('#insertarCliente').on('click', function () {
        let idNit = $('#codigoCliente').val();
        $.ajax({
            url: "http://localhost:8080/clientes/" + idNit,
            type: "GET",
            datatype: "JSON",
            success: function (response) {
                $('#tablaCliente').html(''); // Limpia la tabla antes de agregar datos
                if (response != null) {
                    $('#tablaCliente').html('<thead><tr>' +
                    '<th>N° Nit</th>' +
                    '<th>Nombre</th>' +
                    '<th>Correo</th>' +
                    '<th>Telefono</th>' +
                    '</tr></thead><tbody>' +
                    '<tr>' +
                    '<td>' + response.idNit + '</td>' +
                    '<td>' + response.nombre + '</td>' +
                    '<td>' + response.correo + '</td>' +
                    '<td>' + response.telefono + '</td>' +
                    '</tr></tbody>');
                } else {
                    $('tablaCliente').html('');
                    $('#error-message').html('No se encontró ningún CLIENTE con el número de código especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });


    //Listar CLIENTES
    $('#listarCliente').on('click', function()  {
        // Función para cargar y mostrar los clientes en la tabla
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/clientes/listar",
                dataType: "json",
                success: function (respuesta) {
                    $('#tablaCliente').html(''); // Limpia la tabla antes de agregar datos
                    if (respuesta.length > 0) {
                        let tablaHTML = '<thead><tr>' +
                        '<th>N° Nit</th>' +
                        '<th>Nombre</th>' +
                        '<th>Correo</th>' +
                        '<th>Telefono</th>' +
                        '</tr></thead><tbody>' ;
                    for (let i = 0; i < respuesta.length; i++) {
                        let client = respuesta[i];
                        tablaHTML += '<tr>' +
                        '<td>' + client.idNit + '</td>' +
                        '<td>' + client.nombre + '</td>' +
                        '<td>' + client.correo + '</td>' +
                        '<td>' + client.telefono + '</td>' +
                        '</tr>';

                    }

                    tablaHTML += '</tbody>';
                    $('#tablaCliente').html(tablaHTML);
                } else {
                    $('#tablaCliente').html('');
                    $('#error-message').html('No se encontraron clientes.');
                }
                },
                error: function (xhr, status, error) {
                    console.error(xhr.responseText);
                }
            });
        });


    // Actualizar cliente
    $('#actualizarCliente').on('click', function() {
        let codigoCliente = $('#codigoCliente').val();
        let clienteData = {
            idNit: codigoCliente,
            nombre: $('#nombrecliente').val(),
            correo: $('#correocliente').val(),
            telefono: $('#telefonocliente').val(),
            administrador: {
                numDoc: $('#administradorcliente').val()
            }
        };

        $.ajax({
            url: "http://localhost:8080/clientes/actualizar/" + codigoCliente,
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(clienteData),
            success: function(response) {
                alert("Cliente actualizado exitosamente.");
                console.log(response);
            },
            error: function(xhr) {
                if (xhr.status === 404) {
                    alert("No se encontró el cliente con código " + codigoCliente);
                }
                console.error(xhr.responseText);
            }
        });
    });

    //Limpiar campos CLIENTES
    $('#limpiarCliente').on('click', function () {
        $('#nitcliente').val('');
        $('#nombrecliente').val('');
        $('#correocliente').val('');
        $('#telefonocliente').val('');
        $('#administradorcliente').val('');
    });

    // Cargar valores de numDoc de Administrador en el formulario select de la tabla CLIENTE
    $(document).ready(function() {
        $.ajax({
            url: "http://localhost:8080/administradores/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                let select = $('#administradorcliente');

                for (let i = 0; i < respuesta.length; i++) {
                    let administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.numDoc,
                        text: administrador.numDoc
                    }));
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //llamar datos del CLIENTE por el ID en los inputs
    $('#buscarCliente').on('click', function() {
        let idNit = $('#codigoCliente').val();

        $.ajax({
            url: "http://localhost:8080/clientes/" + idNit,
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                if (respuesta != null) {
                    $('#nitcliente').val(respuesta.idNit);
                    $('#nombrecliente').val(respuesta.nombre);
                    $('#correocliente').val(respuesta.correo);
                    $('#telefonocliente').val(respuesta.telefono);
                    // Aquí se establece el valor del select 'administradorcliente'
                    $('#administradorcliente').val(respuesta.administrador.numDoc); // Suponiendo que 'administrador' tiene un campo 'id'
                } else {
                    $('#nitcliente').val('');
                    $('#nombrecliente').val('');
                    $('#correocliente').val('');
                    $('#telefonocliente').val('');
                    $('#administradorcliente').val('');
                    $('#error-message').html('No se encontró ningún cliente especificado.');
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //cargar ID en el SELECT de CLIENTE
    $(document).ready(function() {
        $.ajax({
            url: "http://localhost:8080/clientes/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                let select = $('#codigoCliente');

                for (let i = 0; i < respuesta.length; i++) {
                    let administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.idNit,
                        text: administrador.idNit
                    }));
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    // Eliminar CLIENTE
    $('#eliminarCliente').on('click', function () {
        let codCult = $('#codigoCliente').val();
        $.ajax({
            url: "http://localhost:8080/clientes/eliminar/" + codCult, // Usar codCult en lugar de idNit
            type: "DELETE",
            dataType: "text",
            success: function (response) {
                console.log("Respuesta del servidor: ",response);
                if (response.trim() === "Eliminado") {
                    alert("Cliente eliminado");
                }else{
                    alert("cliente eliminado"+codCult )
                }
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    alert("No se pudo eliminar, no se encontró el código " + codCult);
                }else{
                    alert("Ocurrió un error en la solicitud. Por favor, inténtalo nuevamente.");

                }
                console.error(xhr.responseText);
            }
        });

});
});