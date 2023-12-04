
$(document).ready(function () {

    //---------------  ADMINISTRADOR  -----------------------------
    //llamar datos del Administrador por el ID en los inputs
    $('#llamarAdmin').on('click', function () {
        var numDoc = $('#codigo').val(); // Cambiado el ID a 'ndocumentoAdmin' para obtener el valor del número de documento.

        $.ajax({
            url: "http://localhost:8080/administradores/" + numDoc,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                if (respuesta != null) {
                    $('#ndocumentoAdmin').val(respuesta.numDoc);
                    $('#nombreAdmin').val(respuesta.nombre);
                    $('#apellidoAdmin').val(respuesta.apellido);
                    $('#tdocumentoAdmin').val(respuesta.tipo_doc);
                    $('#correoAdmin').val(respuesta.email);
                    $('#telefonoAdmin').val(respuesta.telefono);
                } else {
                    $('#nombreAdmin').val('');
                    $('#apellidoAdmin').val('');
                    $('#tdocumentoAdmin').val('');
                    $('#correoAdmin').val('');
                    $('#telefonoAdmin').val('');
                    $('#error-message').html('No se encontró ninguna persona con el número de documento especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //buscar por Numero documento ID
    $('#buscarAdmin').on('click', function () {
        var numDoc = $('#codigo').val();

        $.ajax({
            url: "http://localhost:8080/administradores/" + numDoc,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                $('#tablaAdmin').html('');
                if (respuesta != null) {
                    $('#tablaAdmin').html('<thead><tr>' +
                        '<th>N° documento</th>' +
                        '<th>Apellido</th>' +
                        '<th>Nombre</th>' +
                        '<th>Tipo documento</th>' +
                        '<th>Correo</th>' +
                        '<th>Telefono</th>' +
                        '</tr></thead><tbody>' +
                        '<tr>' +
                        '<td>' + respuesta.numDoc + '</td>' +
                        '<td>' + respuesta.apellido + '</td>' +
                        '<td>' + respuesta.nombre + '</td>' +
                        '<td>' + respuesta.tipo_doc + '</td>' +
                        '<td>' + respuesta.email + '</td>' +
                        '<td>' + respuesta.telefono + '</td>' +
                        '</tr></tbody>');
                } else {
                    $('#tablaAdmin').html('');
                    $('#error-message').html('No se encontró ninguna persona con el número de documento especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    // Insertar administrador
    $('#insertarAdmin').on('click', function () {
        var adminData = {
            numDoc: $('#ndocumentoAdmin').val(),
            tipo_doc: $('#tdocumentoAdmin').val(),
            apellido: $('#apellidoAdmin').val(),
            email: $('#correoAdmin').val(),
            nombre: $('#nombreAdmin').val(),
            telefono: $('#telefonoAdmin').val()
        };

        $.ajax({
            url: "http://localhost:8080/administradores/insertar",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(adminData),
            success: function (response) {
                alert("Administrador ingresado exitosamente.");
                console.log(response);
            },
            error: function (xhr, status, error) {
                alert("No se pudo ingresar el administrador.");
                console.error(error);
            }
        });
    });

    // Eliminar por número de documento
    $('#eliminarAdmin').on('click', function () {
        var numDoc = $('#codigo').val();
        $.ajax({
            url: "http://localhost:8080/administradores/eliminar/" + numDoc,
            type: "DELETE",
            dataType: "text",
            success: function (response) {
                console.log("Respuesta del servidor:", response);
                if (response.trim() === "Eliminado") {
                    alert("Administrador eliminado exitosamente.");
                } else {
                    alert("Eliminado el administrador " + numDoc);
                }
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    alert("No se encontró el número de documento " + numDoc);
                } else {
                    alert("Ocurrió un error en la solicitud. Por favor, inténtalo nuevamente.");
                }
                console.error(xhr.responseText);
            }
        });
    });

    // Actualizar administrador
    $('#actualizarAdmin').on('click', function () {
        var numDoc = $('#codigo').val();
        var adminData = {
            numDoc: $('#ndocumentoAdmin').val(),
            tipo_doc: $('#tdocumentoAdmin').val(),
            apellido: $('#apellidoAdmin').val(),
            email: $('#correoAdmin').val(),
            nombre: $('#nombreAdmin').val(),
            telefono: $('#telefonoAdmin').val()
        };

        $.ajax({
            url: "http://localhost:8080/administradores/actualizar/" + numDoc,
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(adminData),
            success: function (response) {
                alert("Administrador actualizado exitosamente.");
                console.log(response);
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    alert("No se encontró el número de documento " + numDoc);
                }
                console.error(xhr.responseText);
            }
        });
    });

    //Listar administradores
    $('#listarAdmin').on('click', function () {
        $.ajax({
            url: "http://localhost:8080/administradores/listar",
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                $('#tablaAdmin').html('');
                if (respuesta.length > 0) {
                    var tablaHTML = '<thead><tr>' +
                        '<th>N° documento</th>' +
                        '<th>Apellido</th>' +
                        '<th>Nombre</th>' +
                        '<th>Tipo documento</th>' +
                        '<th>Correo</th>' +
                        '<th>Telefono</th>' +
                        '</tr></thead><tbody>';

                    for (var i = 0; i < respuesta.length; i++) {
                        var admin = respuesta[i];
                        tablaHTML += '<tr>' +
                            '<td>' + admin.numDoc + '</td>' +
                            '<td>' + admin.apellido + '</td>' +
                            '<td>' + admin.nombre + '</td>' +
                            '<td>' + admin.tipo_doc + '</td>' +
                            '<td>' + admin.email + '</td>' +
                            '<td>' + admin.telefono + '</td>' +
                            '</tr>';
                    }

                    tablaHTML += '</tbody>';
                    $('#tablaAdmin').html(tablaHTML);
                } else {
                    $('#tablaAdmin').html('');
                    $('#error-message').html('No se encontraron administradores.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //Limpiar campos de Administrado
    $('#limpiarAdmin').on('click', function () {
        $('#ndocumentoAdmin').val('');
        $('#tdocumentoAdmin').val('');
        $('#apellidoAdmin').val('');
        $('#correoAdmin').val('');
        $('#nombreAdmin').val('');
        $('#telefonoAdmin').val('');
    });

    //PRUEBA
    // Cargar valores de numDoc de Administrador en el formulario select
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/administradores/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigo');

                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.numDoc,
                        text: administrador.numDoc
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });


    //---------------  CULTIVO  -----------------------------
    //buscar codigo ID cltivo
    $('#buscarCultivo').on('click', function () {
        var codCult = $('#codigoCultivo').val();
        $.ajax({
            url: "http://localhost:8080/cultivos/" + codCult,
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                $('#tablaCultivo').html('');
                if (respuesta != null) {
                    $('#tablaCultivo').html('<thead><tr>' +
                        '<th>codcultivo</th>' +
                        '<th>dircultivo</th>' +
                        '<th>hectareascultivo</th>' +
                        '<th>terrenocultivo</th>' +
                        '<tr>' +
                        '<td>' + respuesta.codCult + '</td>' +
                        '<td>' + respuesta.direccion + '</td>' +
                        '<td>' + respuesta.hectareas + '</td>' +
                        '<td>' + respuesta.terreno + '</td>' +
                        '</tr></tbody>');
                } else {
                    $('#tablaCultivo').html('');
                    $('#error-message').html('No se encontró ningun cultivo con el Numero de codigo especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });

    // Insertar cultivo
    $('#insertarCultivo').on('click', function () {
        var adminData = {
            codCult: $('#codcultivo').val(),
            direccion: $('#dircultivo').val(),
            hectareas: $('#hectareascultivo').val(),
            terreno: $('#terrenocultivo').val(),
        };

        $.ajax({
            url: "http://localhost:8080/cultivos/insertar",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(adminData),
            success: function (response) {
                alert("Cultivo ingresado exitosamente.");
                console.log(response);
            },
            error: function (xhr, status, error) {
                alert("No se pudo ingresar el cultivo.");
                console.error(error);
            }
        });
    });

    // Eliminar cultivo
    $('#eliminarCultivo').on('click', function () {
        var codCult = $('#codigoCultivo').val();
        $.ajax({
            url: "http://localhost:8080/cultivos/eliminar/" + codCult,
            type: "DELETE",
            dataType: "text",
            success: function (respuesta) {
                console.log(respuesta);
                if (respuesta === "Eliminado") {
                    alert("Cultivo eliminado");
                } else {
                    alert("Eliminado el Cultivo " + codCult);
                }
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    alert("No se pudo eliminar, no se encontró el codigo " + codCult);
                }
                console.error(xhr.responseText);
            }
        });
    });

    // Actualizar cultivo
    $('#actualizarCultivo').on('click', function () {
        var codCult = $('#codigoCultivo').val();
        var direccion = $('#dircultivo').val();
        var hectareas = $('#hectareascultivo').val();
        var terreno = $('#terrenocultivo').val();

        var cultivoData = {
            codCult: codCult,
            direccion: direccion,
            hectareas: hectareas,
            terreno: terreno
        };

        $.ajax({
            url: "http://localhost:8080/cultivos/actualizar/" + codCult,
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(cultivoData),
            success: function (respuesta) {
                console.log(respuesta);
                alert("Cultivo actualizado correctamente");
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    alert("No se pudo actualizar, no se encontró el código " + codCult);
                }
                console.error(xhr.responseText);
            }
        });
    });

    //Listar cultivos
    $(document).ready(function () {
        // Función para cargar y mostrar los clientes en la tabla
        function cargarCultivo() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/cultivos/listar",
                success: function (data) {
                    $("#tablaCultivo tbody").empty(); // Limpia la tabla antes de agregar datos
                    $.each(data, function (index, cultivo) {
                        var row = $("<tr>");
                        row.append($("<td>").text(cultivo.codCult));
                        row.append($("<td>").text(cultivo.direccion));
                        row.append($("<td>").text(cultivo.hectareas));
                        row.append($("<td>").text(cultivo.terreno));
                        $("#tablaCultivo tbody").append(row);
                    });
                },
                error: function () {
                    alert("Error al obtener los cultivos");
                }
            });
        }

        // Cargar los clientes al cargar la página
        cargarCultivo();

        // Cuando se haga clic en el botón "Listar"
        $("#listarCultivo").click(function () {
            cargarCultivo();
        });
    });


    //Limpiar campos CULTIVO
    $('#limpiarCultivo').on('click', function () {
        $('#codcultivo').val('');
        $('#dircultivo').val('');
        $('#hectareascultivo').val('');
        $('#terrenocultivo').val('');
    });
    //PRUEBA
    // Cargar valores de codCult de Cultivos en el formulario select
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/cultivos/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoCultivo');

                for (var i = 0; i < respuesta.length; i++) {
                    var cultivos = respuesta[i];
                    select.append($('<option>', {
                        value: cultivos.codCult,
                        text: cultivos.codCult
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //llamar datos de los CULTIVOS por el ID en los inputs
    $('#llamarCultivo').on('click', function () {
        var codCult = $('#codigoCultivo').val(); // Cambiado el ID

        $.ajax({
            url: "http://localhost:8080/cultivos/" + codCult,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                if (respuesta != null) {
                    $('#codcultivo').val(respuesta.codCult);
                    $('#dircultivo').val(respuesta.direccion);
                    $('#hectareascultivo').val(respuesta.hectareas);
                    $('#terrenocultivo').val(respuesta.terreno);
                } else {
                    $('#codcultivo').val('');
                    $('#dircultivo').val('');
                    $('#hectareascultivo').val('');
                    $('#terrenocultivo').val('');
                    $('#error-message').html('No se encontró ninguna persona con el número de documento especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //  -------------------  CLIENTE  -----------------------------

    //insertar CLIENTE
    $(document).ready(function () {
        // Cuando se haga clic en el botón "Enviar"
        $("#insertarCliente").click(function () {
            // Recoge los valores de los campos de entrada
            var nit = $("#nitcliente").val();
            var nombreCliente = $("#nombrecliente").val();
            var correoCliente = $("#correocliente").val();
            var telefonoCliente = $("#telefonocliente").val();
            var administrador = $("#administradorcliente").val(); // Valor del select

            // Crea un objeto de cliente con los valores recogidos
            var cliente = {
                "numDoc": nit,
                "nombre": nombreCliente,
                "email": correoCliente,
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
                success: function (response) {
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
                error: function () {
                    // Maneja el error en caso de que falle la inserción
                    alert("Error al insertar el cliente");
                }
            });
        });
    });
    //Buscar CLIENTE por ID
    $('#buscarCliente').on('click', function () {
        var numDoc = $('#codigoCliente').val();
        $.ajax({
            url: "http://localhost:8080/clientes/" + numDoc,
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                $('#tablaCliente tbody').empty(); // Limpia la tabla antes de agregar datos
                if (respuesta != null) {
                    var row = $("<tr>");
                    row.append($("<td>").text(respuesta.numDoc));
                    row.append($("<td>").text(respuesta.nombre));
                    row.append($("<td>").text(respuesta.email));
                    row.append($("<td>").text(respuesta.telefono));
                    row.append($("<td>").text(respuesta.administrador.nombre));
                    $('#tablaCliente tbody').append(row);
                } else {
                    $('#error-message').html('No se encontró ningún CLIENTE con el número de código especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });

    //limpiar tabla CLIENTES
    $("#limpiarTablaCliente").click(function () {
        // Elimina todas las filas de la tabla
        $("#tablaCliente tbody").empty();
    });

    //Listar CLIENTES
    $(document).ready(function () {
        // Función para cargar y mostrar los clientes en la tabla
        function cargarClientes() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/clientes/listar",
                success: function (data) {
                    $("#tablaCliente tbody").empty(); // Limpia la tabla antes de agregar datos
                    $.each(data, function (index, cliente) {
                        var row = $("<tr>");
                        row.append($("<td>").text(cliente.numDoc));
                        row.append($("<td>").text(cliente.nombre));
                        row.append($("<td>").text(cliente.email));
                        row.append($("<td>").text(cliente.telefono));
                        row.append($("<td>").text(cliente.administrador.nombre));
                        $("#tablaCliente tbody").append(row);
                    });
                },
                error: function () {
                    alert("Error al obtener los clientes");
                }
            });
        }

        // Cargar los clientes al cargar la página
        cargarClientes();

        // Cuando se haga clic en el botón "Listar"
        $("#listarCliente").click(function () {
            cargarClientes();
        });
    });

    // Actualizar cliente
    $('#actualizarCliente').on('click', function () {
        var codigoCliente = $('#codigoCliente').val();
        var clienteData = {
            numDoc: codigoCliente,
            nombre: $('#nombrecliente').val(),
            email: $('#correocliente').val(),
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
            success: function (response) {
                alert("Cliente actualizado exitosamente.");
                console.log(response);
            },
            error: function (xhr) {
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
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/administradores/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#administradorcliente');

                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.numDoc,
                        text: administrador.numDoc
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //llamar datos del CLIENTE por el ID en los inputs
    $('#llamarCliente').on('click', function () {
        var numDoc = $('#codigoCliente').val();

        $.ajax({
            url: "http://localhost:8080/clientes/" + numDoc,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                if (respuesta != null) {
                    $('#nitcliente').val(respuesta.numDoc);
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
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //cargar ID en el SELECT de CLIENTE
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/clientes/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoCliente');

                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.numDoc,
                        text: administrador.numDoc
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    // Eliminar CLIENTE
    $('#eliminarCliente').on('click', function () {
        var numDoc = $('#codigoCliente').val();
        $.ajax({
            url: "http://localhost:8080/clientes/eliminar/" + numDoc, // Usar codCult en lugar de idNit
            type: "DELETE",
            dataType: "text",
            success: function (respuesta) {
                console.log(respuesta);
                if (respuesta === "Eliminado") {
                    alert("Cliente eliminado");
                }
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    alert("No se pudo eliminar, no se encontró el código " + numDoc);
                }
                console.error(xhr.responseText);
            }
        });
    });




    //---------------  EMPLEADOS  -----------------------------
    // Cargar valores de numDoc de Administrador en el formulario select de la tabla EMPLEADOS
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/administradores/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#administradorempleados');

                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.numDoc,
                        text: administrador.numDoc
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //Limpiar campos EMPLEADOS
    $('#limpiarEmpleados').on('click', function () {
        $('#codempleados').val('');
        $('#nombreempleados').val('');
        $('#apellidoempleados').val('');
        $('#tdocumentoempleados').val('');
        $('#ndocumentoempleados').val('');
        $('#administradorempleados').val('');
    });

    //cargar ID en el SELECT de EMPLEADOS
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/empleados/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoEmpleados');

                for (var i = 0; i < respuesta.length; i++) {
                    var data = respuesta[i];
                    select.append($('<option>', {
                        value: data.numDoc,
                        text: data.numDoc
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //llamar datos del EMPLEADO por el ID en los inputs
    $('#llamarEmpleados').on('click', function () {
        var numDoc = $('#codigoEmpleados').val();

        $.ajax({
            url: "http://localhost:8080/empleados/" + numDoc,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                if (respuesta != null) {
                    $('#codempleados').val(respuesta.numDoc);
                    $('#nombreempleados').val(respuesta.nombre);
                    $('#apellidoempleados').val(respuesta.apellido);
                    $('#tdocumentoempleados').val(respuesta.tipo_doc);
                    $('#ndocumentoempleados').val(respuesta.email);
                    // Aquí se establece el valor del select 'administradorempleados'
                    $('#administradorempleados').val(respuesta.administrador.numDoc); // Suponiendo que 'administrador' tiene un campo 'id'
                } else {
                    $('#codempleados').val('');
                    $('#nombreempleados').val('');
                    $('#apellidoempleados').val('');
                    $('#tdocumentoempleados').val('');
                    $('#ndocumentoempleados').val('');
                    $('#administradorempleados').val('');
                    $('#error-message').html('No se encontró ningún empleado especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //limpiar tabla EMPLEADOS
    $("#limpiarTablaEmpleados").click(function () {
        // Elimina todas las filas de la tabla
        $("#tablaEmpleados tbody").empty();
    });

    $("#insertarEmpleados").click(function () {
        var codempleados = $("#codempleados").val();
        var nombreempleados = $("#nombreempleados").val();
        var apellidoempleados = $("#apellidoempleados").val();
        var tdocumentoempleados = $("#tdocumentoempleados").val();
        var ndocumentoempleados = $("#ndocumentoempleados").val();
        var administradorempleados = $("#administradorempleados").val();

        var empleadoData = {
            numDoc: codempleados,
            nombre: nombreempleados,
            apellido: apellidoempleados,
            tipo_doc: tdocumentoempleados,
            email: ndocumentoempleados,
            administrador: { numDoc: administradorempleados }
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/empleados/insertar",
            contentType: "application/json",
            data: JSON.stringify(empleadoData),
            success: function (data) {
                alert("Empleado insertado con éxito");
                // Limpiar los campos después de la inserción
                $("#codempleados, #nombreempleados, #apellidoempleados, #tdocumentoempleados, #ndocumentoempleados, #administradorempleados").val("");
            },
            error: function (error) {
                alert("Error al insertar empleado");
            }
        });
    });

    //Listar
    $(document).ready(function () {
        // Función para cargar y mostrar los clientes en la tabla
        function cargarEmpleados() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/empleados/listar",
                success: function (data) {
                    $("#tablaEmpleados tbody").empty(); // Limpia la tabla antes de agregar datos
                    $.each(data, function (index, empleado) {
                        var row = $("<tr>");
                        row.append($("<td>").text(empleado.numDoc));
                        row.append($("<td>").text(empleado.apellido));
                        row.append($("<td>").text(empleado.nombre));
                        row.append($("<td>").text(empleado.email));
                        row.append($("<td>").text(empleado.tipo_doc));
                        row.append($("<td>").text(empleado.administrador.numDoc));
                        $("#tablaEmpleados tbody").append(row);
                    });
                },
                error: function () {
                    alert("Error al obtener los empleados");
                }
            });
        }

        // Cargar los clientes al cargar la página
        cargarEmpleados();

        // Cuando se haga clic en el botón "Listar"
        $("#listarEmpleados").click(function () {
            cargarEmpleados();
        });
    });

    //Actualizar Empleados
    $("#actualizarEmpleados").click(function () {
        var codempleados = $("#codempleados").val();
        var nombreempleados = $("#nombreempleados").val();
        var apellidoempleados = $("#apellidoempleados").val();
        var tdocumentoempleados = $("#tdocumentoempleados").val();
        var ndocumentoempleados = $("#ndocumentoempleados").val();
        var administradorempleados = $("#administradorempleados").val();

        var empleadoData = {
            numDoc: codempleados,
            nombre: nombreempleados,
            apellido: apellidoempleados,
            tipo_doc: tdocumentoempleados,
            email: ndocumentoempleados,
            administrador: { numDoc: administradorempleados }
        };

        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/empleados/actualizar/" + codempleados,
            contentType: "application/json",
            data: JSON.stringify(empleadoData),
            success: function (data) {
                alert("Empleado actualizado con éxito");
            },
            error: function (error) {
                alert("Error al actualizar empleado");
            }
        });
    });

    //ELIMINAR
    $("#eliminarEmpleados").click(function () {
        var numDoc = $("#codigoEmpleados").val();

        $.ajax({
            type: "DELETE",
            url: "http://localhost:8080/empleados/eliminar/" + numDoc,
            success: function (data) {
                alert("Empleado eliminado con éxito");
            },
            error: function (error) {
                alert("Error al eliminar empleado");
            }
        });
    });

    //Buscar por ID
    $('#buscarEmpleados').on('click', function () {
        var numDoc = $('#codigoEmpleados').val();
        $.ajax({
            url: "http://localhost:8080/empleados/" + numDoc,
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                $('#tablaEmpleados tbody').empty(); // Limpia la tabla antes de agregar datos
                if (respuesta != null) {
                    var row = $("<tr>");
                    row.append($("<td>").text(respuesta.numDoc));
                    row.append($("<td>").text(respuesta.nombre));
                    row.append($("<td>").text(respuesta.apellido));
                    row.append($("<td>").text(respuesta.tipo_doc));
                    row.append($("<td>").text(respuesta.email));
                    row.append($("<td>").text(respuesta.administrador.numDoc));
                    $('#tablaEmpleados tbody').append(row);
                } else {
                    $('#error-message').html('No se encontró ningún empleado con el número de código especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });

    //---------------  VISITA  -----------------------------

    // Cargar valores de cod_emp de empleados en el formulario select de la tabla VISITA
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/empleados/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoempleadovisita');

                for (var i = 0; i < respuesta.length; i++) {
                    var empleados = respuesta[i];
                    select.append($('<option>', {
                        value: empleados.codEmp,
                        text: empleados.codEmp
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    // Cargar valores de cod_cult de cultivo en el formulario select de la tabla VISITA
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/cultivos/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigocultivovisita');

                for (var i = 0; i < respuesta.length; i++) {
                    var cultivo = respuesta[i];
                    select.append($('<option>', {
                        value: cultivo.codCult,
                        text: cultivo.codCult
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    // Función para insertar una visita
    $(document).ready(function () {
        // Función para insertar una visita
        $("#insertarVisita").click(function () {
            var nuevaVisita = {
                numVisita: $("#codvisita").val(),
                nom_finca: $("#nombrefincavisita").val(),
                direc_visit: $("#direccionvisita").val(),
                fecha: $("#fechavisita").val(),
                empleados: { numDoc: $("#codigoempleadovisita").val() },
                cultivo: { codCult: $("#codigocultivovisita").val() }
            };

            $.ajax({
                type: "POST",
                url: "http://localhost:8080/visita/insertar",  // Reemplaza la URL con la ruta correcta de tu API
                data: JSON.stringify(nuevaVisita),
                contentType: "application/json",
                success: function (response) {
                    // Manejar la respuesta del servidor si es necesario
                }
            });
        });
    });
    //Listar
    $(document).ready(function () {
        // Función para cargar y mostrar los clientes en la tabla
        function cargarVisita() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/visita/listar",
                success: function (data) {
                    $("#tablaVisita tbody").empty(); // Limpia la tabla antes de agregar datos
                    $.each(data, function (index, visita) {
                        var row = $("<tr>");
                        row.append($("<td>").text(visita.numVisita));
                        row.append($("<td>").text(visita.nom_finca));
                        row.append($("<td>").text(visita.direc_visit));
                        row.append($("<td>").text(visita.fecha));
                        row.append($("<td>").text(visita.empleados.numDoc));
                        row.append($("<td>").text(visita.cultivo.codCult));
                        $("#tablaVisita tbody").append(row);
                    });
                },
                error: function () {
                    alert("Error al obtener las visitas");
                }
            });
        }

        // Cargar los clientes al cargar la página
        cargarVisita();

        // Cuando se haga clic en el botón "Listar"
        $("#listarVisita").click(function () {
            cargarVisita();
        });
    });

    //Limpiar campos VISITA
    $('#limpiarVisita').on('click', function () {
        $('#codvisita').val('');
        $('#nombrefincavisita').val('');
        $('#direccionvisita').val('');
        $('#fechavisita').val('');
        $('#codigoempleadovisita').val('');
        $('#codigocultivovisita').val('');
    });

    //limpiar tabla
    $("#limpiarTablaVisita").click(function () {
        // Elimina todas las filas de la tabla
        $("#tablaVisita tbody").empty();
    });

    //cargar ID en el SELECT de VISITA
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/visita/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoVisita');

                for (var i = 0; i < respuesta.length; i++) {
                    var visita = respuesta[i];
                    select.append($('<option>', {
                        value: visita.numVisita,
                        text: visita.numVisita
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    })

    //Buscar por ID
    $('#buscarVisita').on('click', function () {
        var numVisita = $('#codigoVisita').val();
        $.ajax({
            url: "http://localhost:8080/visita/" + numVisita,
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                $('#tablaVisita tbody').empty(); // Limpia la tabla antes de agregar datos
                if (respuesta != null) {
                    var row = $("<tr>");
                    row.append($("<td>").text(respuesta.numVisita));
                    row.append($("<td>").text(respuesta.nom_finca));
                    row.append($("<td>").text(respuesta.direc_visit));
                    row.append($("<td>").text(respuesta.fecha));
                    row.append($("<td>").text(respuesta.empleados.numDoc));
                    row.append($("<td>").text(respuesta.cultivo.codCult));
                    $('#tablaVisita tbody').append(row);
                } else {
                    $('#error-message').html('No se encontró ningúna visita con el número de código especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });

    //eliminar
    $("#eliminarVisita").click(function () {
        var numVisita = $("#codigoVisita").val();

        $.ajax({
            type: "DELETE",
            url: "http://localhost:8080/visita/eliminar/" + numVisita,
            success: function (response) {
                alert("Visita eliminada con exitosamente.");
                console.log(response);
                console.log("Visita eliminada con éxito");
            },
            error: function (error) {
                console.error("Error al eliminar Visita:", error);
            }
        });
    });

    //llamar datos del VISITA por el ID en los inputs
    $('#llamarVisita').on('click', function () {
        var numVisita = $('#codigoVisita').val();

        $.ajax({
            url: "http://localhost:8080/visita/" + numVisita,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                if (respuesta != null) {
                    $('#codvisita').val(respuesta.numVisita);
                    $('#nombrefincavisita').val(respuesta.nom_finca);
                    $('#direccionvisita').val(respuesta.direc_visit);
                    $('#fechavisita').val(respuesta.fecha);
                    $('#codigoempleadovisita').val(respuesta.empleados.numDoc);
                    // Aquí se establece el valor del select
                    $('#codigocultivovisita').val(respuesta.cultivo.codCult); // Suponiendo que 'administrador' tiene un campo 'id'
                } else {
                    $('#codvisita').val('');
                    $('#nombrefincavisita').val('');
                    $('#direccionvisita').val('');
                    $('#fechavisita').val('');
                    $('#codigoempleadovisita').val('');
                    $('#codigocultivovisita').val('');
                    $('#error-message').html('No se encontró ningúna visita especificada.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    // Actualización Visita
    function actualizarVisita() {
        const numVisita = $("#codvisita").val();
        const nomFinca = $("#nombrefincavisita").val();
        const direcVisit = $("#direccionvisita").val();
        const fecha = $("#fechavisita").val();
        const codEmpleado = $("#codigoempleadovisita").val();
        const codCultivo = $("#codigocultivovisita").val();

        const visitaData = {
            numVisita: numVisita,
            nom_finca: nomFinca,
            direc_visit: direcVisit,
            fecha: fecha,
            empleados: {
                numDoc: codEmpleado
            },
            cultivo: {
                codCult: codCultivo
            }
        };

        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/visita/actualizar/" + numVisita,
            contentType: "application/json",
            data: JSON.stringify(visitaData),
            success: function (response) {
                console.log("Visita actualizada con éxito:", response);
            },
            error: function (error) {
                console.error("Error al actualizar visita:", error);
            }
        });
    }

    $("#actualizarVisita").on("click", function () {
        actualizarVisita();
    });

    //---------------  FACTURACION  -----------------------------

    // Cargar valores de ID de Cultivo en el formulario select de la tabla FACTURACION
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/cultivos/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#cultivofacturacion');

                for (var i = 0; i < respuesta.length; i++) {
                    var cultivos = respuesta[i];
                    select.append($('<option>', {
                        value: cultivos.codCult,
                        text: cultivos.codCult
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //Limpiar campos FACTURACION
    $('#limpiarFacturacion').on('click', function () {
        $('#numerofacturacion').val('');
        $('#cuentaclientefacturacion').val('');
        $('#formapagofacturacion').val('');
        $('#valorfacturacion').val('');
        $('#fechapagofacturacion').val('');
        $('#cultivofacturacion').val('');
    });

    //limpiar tabla CLIENTES
    $("#limpiarTablaFacturacion").click(function () {
        // Elimina todas las filas de la tabla
        $("#tablaFacturacion tbody").empty();
    });

    //cargar ID en el SELECT de FACTURACION
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/facturacion/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoFacturacion');

                for (var i = 0; i < respuesta.length; i++) {
                    var valor = respuesta[i];
                    select.append($('<option>', {
                        value: valor.numFac,
                        text: valor.numFac
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //llamar datos del FACTURACION por el ID en los inputs
    $('#llamarFacturacion').on('click', function () {
        var numFac = $('#codigoFacturacion').val();

        $.ajax({
            url: "http://localhost:8080/facturacion/" + numFac,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                if (respuesta != null) {
                    $('#numerofacturacion').val(respuesta.numFac);
                    $('#cuentaclientefacturacion').val(respuesta.cuentClien);
                    $('#formapagofacturacion').val(respuesta.formaPag);
                    $('#valorfacturacion').val(respuesta.valor);
                    $('#fechapagofacturacion').val(respuesta.fechPago);
                    // Aquí se establece el valor del select
                    $('#cultivofacturacion').val(respuesta.cultivo.codCult); // Suponiendo que 'administrador' tiene un campo 'id'
                } else {
                    $('#numerofacturacion').val('');
                    $('#cuentaclientefacturacion').val('');
                    $('#formapagofacturacion').val('');
                    $('#valorfacturacion').val('');
                    $('#fechapagofacturacion').val('');
                    $('#cultivofacturacion').val('');
                    $('#error-message').html('No se encontró ningúna factura especificada.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //insertar FACTURACION
    $("#insertarFacturacion").click(function () {
        var numFac = $("#numerofacturacion").val();
        var cuentClien = $("#cuentaclientefacturacion").val();
        var formaPag = $("#formapagofacturacion").val();
        var valor = $("#valorfacturacion").val();
        var fechPago = $("#fechapagofacturacion").val();
        var cultivo = $("#cultivofacturacion").val();

        var data = {
            numFac: numFac,
            cuentClien: cuentClien,
            formaPag: formaPag,
            valor: valor,
            fechPago: fechPago,
            cultivo: {
                codCult: cultivo
            }
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/facturacion/insertar",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                alert("Facturacion ingresado exitosamente.");
                console.log(response);
            },
            error: function (xhr, status, error) {
                console.error("Error al insertar Facturación:");
                console.log("Estado (status): " + status);
                console.log("Error (error): " + error);
                console.log("Respuesta (responseText): " + xhr.responseText);
            }
        });
    });


    //Listar FACTURACION
    $(document).ready(function () {
        function cargarFacturacion() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/facturacion/listar",
                success: function (data) {
                    $("#tablaFacturacion tbody").empty();
                    $.each(data, function (index, facturacion) {
                        var row = $("<tr>");
                        row.append($("<td>").text(facturacion.numFac));
                        row.append($("<td>").text(facturacion.cuentClien));
                        row.append($("<td>").text(facturacion.formaPag));
                        row.append($("<td>").text(facturacion.valor));
                        row.append($("<td>").text(facturacion.fechPago));
                        row.append($("<td>").text(facturacion.cultivo.codCult));
                        $("#tablaFacturacion tbody").append(row);
                    });
                },
                error: function () {
                    alert("Error al obtener la facturación");
                }
            });
        }

        cargarFacturacion();

        $("#listarFacturacion").click(function () {
            cargarFacturacion();
        });
    });


    //Actualizar FACTURACION
    $("#actualizarFacturacion").click(function () {
        var numFac = $("#numerofacturacion").val();
        var cuentClien = $("#cuentaclientefacturacion").val();
        var formaPag = $("#formapagofacturacion").val();
        var valor = $("#valorfacturacion").val();
        var fechPago = $("#fechapagofacturacion").val();
        var cultivo = $("#cultivofacturacion").val();

        var data = {
            numFac: numFac,
            cuentClien: cuentClien,
            formaPag: formaPag,
            valor: valor,
            fechPago: fechPago,
            cultivo: {
                codCult: cultivo
            }
        };

        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/facturacion/actualizar/" + numFac,
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                alert("Facturacion actualizada con exitosamente.");
                console.log(response);
                // Actualizar la tabla o mostrar un mensaje de éxito
                //console.log("Facturación actualizada con éxito");
            },
            error: function (error) {
                // Manejar el error, mostrar un mensaje de error, etc.
                console.error("Error al actualizar Facturación:", error);
            }
        });
    });
    //eliminar FACTURACION
    $("#eliminarFacturacion").click(function () {
        var numFac = $("#codigoFacturacion").val();

        $.ajax({
            type: "DELETE",
            url: "http://localhost:8080/facturacion/eliminar/" + numFac,
            success: function (response) {
                alert("Facturacion eliminada con exitosamente.");
                console.log(response);
                console.log("Facturación eliminada con éxito");
            },
            error: function (error) {
                // Manejar el error, mostrar un mensaje de error, etc.
                console.error("Error al eliminar Facturación:", error);
            }
        });
    });
    //Buscar CLIENTE por ID
    $('#buscarFacturacion').on('click', function () {
        var numFac = $('#codigoFacturacion').val();
        $.ajax({
            url: "http://localhost:8080/facturacion/" + numFac,
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                $('#tablaFacturacion tbody').empty(); // Limpia la tabla antes de agregar datos
                if (respuesta != null) {
                    var row = $("<tr>");
                    row.append($("<td>").text(respuesta.numFac));
                    row.append($("<td>").text(respuesta.cuentClien));
                    row.append($("<td>").text(respuesta.formaPag));
                    row.append($("<td>").text(respuesta.valor));
                    row.append($("<td>").text(respuesta.fechPago));
                    row.append($("<td>").text(respuesta.cultivo.codCult));
                    $('#tablaFacturacion tbody').append(row);
                } else {
                    $('#error-message').html('No se encontró ningúnA Factura con el número de código especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });

    //---------------  DRON  -----------------------------

    // Cargar valores del ID de DRON en el formulario select
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/dron/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoDron');

                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.codDron,
                        text: administrador.codDron
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //Limpiar campos de Administrado
    $('#limpiarDron').on('click', function () {
        $('#coddron').val('');
        $('#numeroserialdron').val('');
        $('#marcadron').val('');
    });

    // Insertar DRON
    $('#insertarDron').on('click', function () {
        var Data = {
            codDron: $('#coddron').val(),
            numSerial: $('#numeroserialdron').val(),
            marca: $('#marcadron').val()
        };

        $.ajax({
            url: "http://localhost:8080/dron/insertar",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(Data),
            success: function (response) {
                alert("Dron ingresado exitosamente.");
                console.log(response);
            },
            error: function (xhr, status, error) {
                alert("No se pudo ingresar el dron.");
                console.error(error);
            }
        });
    });

    //Buscar CLIENTE por ID
    $('#buscarDron').on('click', function () {
        var codDron = $('#codigoDron').val();
        $.ajax({
            url: "http://localhost:8080/dron/" + codDron,
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                $('#tablaDron tbody').empty(); // Limpia la tabla antes de agregar datos
                if (respuesta != null) {
                    var row = $("<tr>");
                    row.append($("<td>").text(respuesta.codDron));
                    row.append($("<td>").text(respuesta.numSerial));
                    row.append($("<td>").text(respuesta.marca));
                    $('#tablaDron tbody').append(row);
                } else {
                    $('#error-message').html('No se encontró ningún Dron con el número de código especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });

    //llamar datos del DRON por el ID en los inputs
    $('#llamarDron').on('click', function () {
        var codDron = $('#codigoDron').val(); // Cambiado el ID a 'ndocumentoAdmin' para obtener el valor del número de documento.

        $.ajax({
            url: "http://localhost:8080/dron/" + codDron,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                if (respuesta != null) {
                    $('#coddron').val(respuesta.codDron);
                    $('#numeroserialdron').val(respuesta.numSerial);
                    $('#marcadron').val(respuesta.marca);
                } else {
                    $('#numeroserialdron').val('');
                    $('#marcadron').val('');
                    $('#error-message').html('No se encontró ningun DRON con el número especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //Listar Dron
    $(document).ready(function () {
        // Función para cargar y mostrar los clientes en la tabla
        function cargarDron() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/dron/listar",
                success: function (data) {
                    $("#tablaDron tbody").empty(); // Limpia la tabla antes de agregar datos
                    $.each(data, function (index, dron) {
                        var row = $("<tr>");
                        row.append($("<td>").text(dron.codDron));
                        row.append($("<td>").text(dron.numSerial));
                        row.append($("<td>").text(dron.marca));
                        $("#tablaDron tbody").append(row);
                    });
                },
                error: function () {
                    alert("Error al obtener dron");
                }
            });
        }

        // Cargar los clientes al cargar la página
        cargarDron();

        // Cuando se haga clic en el botón "Listar"
        $("#listarDron").click(function () {
            cargarDron();
        });
    });

    // Actualizar DRON
    $('#actualizarDron').on('click', function () {
        var codDron = $('#codigoDron').val();
        var DataDRON = {
            //codDron: $('#coddron').val(),
            numSerial: $('#numeroserialdron').val(),
            marca: $('#apellimarcadrondoAdmin').val()
        };

        $.ajax({
            url: "http://localhost:8080/dron/actualizar/" + codDron,
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(DataDRON),
            success: function (response) {
                alert("Dron actualizado exitosamente.");
                console.log(response);
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    alert("No se encontró el número  " + codDron);
                }
                console.error(xhr.responseText);
            }
        });
    });

    // Eliminar por número de ID
    $('#eliminarDron').on('click', function () {
        var codDron = $('#codigoDron').val();
        $.ajax({
            url: "http://localhost:8080/dron/eliminar/" + codDron,
            type: "DELETE",
            dataType: "text",
            success: function (response) {
                console.log("Respuesta del servidor:", response);
                if (response.trim() === "Eliminado") {
                    alert("dron eliminado exitosamente.");
                } else {
                    alert("Eliminado el dron " + codDron);
                }
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    alert("No se encontró el número " + codDron);
                } else {
                    alert("Ocurrió un error en la solicitud. Por favor, inténtalo nuevamente.");
                }
                console.error(xhr.responseText);
            }
        });
    });

    //limpiar tabla
    $("#limpiarTablaDron").click(function () {
        // Elimina todas las filas de la tabla
        $("#tablaDron tbody").empty();
    });

    //---------------  DIAGNOSTICO  -----------------------------
    // Cargar valores de IDnumDoc de Administrador en el formulario select de la tabla CLIENTE
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/dron/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigodrondiagnostico');

                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.codDron,
                        text: administrador.codDron
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
    // Cargar valores de IDnumDoc de Administrador en el formulario select de la tabla CLIENTE
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/cultivos/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigocultivodiagnostico');

                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.codCult,
                        text: administrador.codCult
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
    //Limpiar campos DIAGNOSTICO
    $('#limpiarDiagnostico').on('click', function () {
        $('#numeroDiagnostico').val('');
        $('#observacionesdiagnostico').val('');
        $('#fechasolicitadadiagnostico').val('');
        $('#fechadiagnostico').val('');
        $('#fechaentregadiagnostico').val('');
        $('#tipodañodiagnostico').val('');
        $('#codigodrondiagnostico').val('');
        $('#codigocultivodiagnostico').val('');
    });

    //limpiar tabla DIAGNOSTICO
    $("#limpiarTablaDiagnostico").click(function () {
        // Elimina todas las filas de la tabla
        $("#tablaDiagnostico tbody").empty();
    });

    //cargar ID en el SELECT de DIAGNOSTICO
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/diagnostico/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoDiagnostico');

                for (var i = 0; i < respuesta.length; i++) {
                    var valor = respuesta[i];
                    select.append($('<option>', {
                        value: valor.numDiag,
                        text: valor.numDiag
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //llamar datos del DIAGNOSTICO por el ID en los inputs
    $('#llamarDiagnostico').on('click', function () {
        var numDiag = $('#codigoDiagnostico').val();

        $.ajax({
            url: "http://localhost:8080/diagnostico/" + numDiag,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                if (respuesta != null) {
                    $('#numeroDiagnostico').val(respuesta.numDiag);
                    $('#observacionesdiagnostico').val(respuesta.observaciones);
                    $('#fechasolicitadadiagnostico').val(respuesta.fechaSolicit);
                    $('#fechadiagnostico').val(respuesta.fechaDiag);
                    $('#fechaentregadiagnostico').val(respuesta.fechaEntreg);
                    $('#tipodañodiagnostico').val(respuesta.tipoDaño);
                    // Aquí se establece el valor del select
                    $('#codigodrondiagnostico').val(respuesta.dron.codDron); // Suponiendo que 'administrador' tiene un campo 'id'
                    $('#codigocultivodiagnostico').val(respuesta.cultivo.codCult);
                } else {
                    $('#numeroDiagnostico').val('');
                    $('#observacionesdiagnostico').val('');
                    $('#fechasolicitadadiagnostico').val('');
                    $('#fechadiagnostico').val('');
                    $('#fechaentregadiagnostico').val('');
                    $('#tipodañodiagnostico').val('');
                    $('#codigodrondiagnostico').val('');
                    $('#codigocultivodiagnostico').val('');
                    $('#error-message').html('No se encontró ningún diagnostico especificada.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //Listar DIAGNOSTICO
    $(document).ready(function () {
        // Función para cargar y mostrar los clientes en la tabla
        function cargarDiagnostico() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/diagnostico/listar",
                success: function (data) {
                    $("#tablaDiagnostico tbody").empty(); // Limpia la tabla antes de agregar datos
                    $.each(data, function (index, diagnostico) {
                        var row = $("<tr>");
                        row.append($("<td>").text(diagnostico.numDiag));
                        row.append($("<td>").text(diagnostico.observaciones));
                        row.append($("<td>").text(diagnostico.fechaSolicit));
                        row.append($("<td>").text(diagnostico.fechaDiag));
                        row.append($("<td>").text(diagnostico.fechaEntreg));
                        row.append($("<td>").text(diagnostico.tipoDaño));
                        row.append($("<td>").text(diagnostico.dron.codDron));
                        row.append($("<td>").text(diagnostico.cultivo.codCult));
                        $("#tablaDiagnostico tbody").append(row);
                    });
                },
                error: function () {
                    alert("Error al obtener los diagnosticos");
                }
            });
        }

        // Cargar los clientes al cargar la página
        cargarDiagnostico();

        // Cuando se haga clic en el botón "Listar"
        $("#listarDiagnostico").click(function () {
            cargarDiagnostico();
        });
    });

    //insertar
    $("#insertarDiagnostico").click(function () {
        var numDiag = $("#numeroDiagnostico").val();
        var observaciones = $("#observacionesdiagnostico").val();
        var fechaSolicit = $("#fechasolicitadadiagnostico").val();
        var fechaDiag = $("#fechadiagnostico").val();
        var fechaEntreg = $("#fechaentregadiagnostico").val();
        var tipoDaño = $("#tipodañodiagnostico").val();
        var dron = $("#codigodrondiagnostico").val();
        var cultivo = $("#codigocultivodiagnostico").val();

        var data = {
            numDiag: numDiag,
            observaciones: observaciones,
            fechaSolicit: fechaSolicit,
            fechaDiag: fechaDiag,
            fechaEntreg: fechaEntreg,
            tipoDaño: tipoDaño,
            dron: {
                codDron: dron
            },
            cultivo: {
                codCult: cultivo
            }
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/diagnostico/insertar",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                alert("Diagnostico ingresado exitosamente.");
                console.log(response);
            },
        });
    });

    //Actualizar
    $("#actualizarDiagnostico").click(function () {
        var numDiag = $("#numeroDiagnostico").val();
        var observaciones = $("#observacionesdiagnostico").val();
        var fechaSolicit = $("#fechasolicitadadiagnostico").val();
        var fechaDiag = $("#fechadiagnostico").val();
        var fechaEntreg = $("#fechaentregadiagnostico").val();
        var tipoDaño = $("#tipodañodiagnostico").val();
        var dron = $("#codigodrondiagnostico").val();
        var cultivo = $("#codigocultivodiagnostico").val();

        var data = {
            numDiag: numDiag,
            observaciones: observaciones,
            fechaSolicit: fechaSolicit,
            fechaDiag: fechaDiag,
            fechaEntreg: fechaEntreg,
            tipoDaño: tipoDaño,
            dron: {
                codDron: dron
            },
            cultivo: {
                codCult: cultivo
            }
        };

        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/diagnostico/actualizar/" + numDiag,
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                alert("Diagnostico actualizado con exitosamente.");
                console.log(response);
                // Actualizar la tabla o mostrar un mensaje de éxito
                //console.log("Facturación actualizada con éxito");
            },
            error: function (error) {
                // Manejar el error, mostrar un mensaje de error, etc.
                console.error("Error al actualizar diagnostico:", error);
            }
        });
    });

    //eliminar FACTURACION
    $("#eliminarDiagnostico").click(function () {
        var numDiag = $("#codigoDiagnostico").val();

        $.ajax({
            type: "DELETE",
            url: "http://localhost:8080/diagnostico/eliminar/" + numDiag,
            success: function (response) {
                alert("Diagnostico eliminado exitosamente.");
                console.log(response);
                console.log("Diagnostico eliminado con éxito");
            },
            error: function (error) {
                // Manejar el error, mostrar un mensaje de error, etc.
                console.error("Error al eliminar diagnostico:", error);
            }
        });
    });


    //---------------  MULTIMEDIA  -----------------------------
    // Cargar valores de ID de DIAGNOSTICO en el formulario select de la tabla MULTIM
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/diagnostico/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#numerodiagnosticomultimedia');

                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.numDiag,
                        text: administrador.numDiag
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //Limpiar campos MULTIMEDIA
    $('#limpiarMultimedia').on('click', function () {
        $('#codmultimedia').val('');
        $('#nombremultimedia').val('');
        $('#tamañomultimedia').val('');
        $('#numerodiagnosticomultimedia').val('');
    });

    //limpiar tabla
    $("#limpiarTablaMultimedia").click(function () {
        // Elimina todas las filas de la tabla
        $("#tablaMultimedia tbody").empty();
    });

    //cargar ID en el SELECT de MULTIMEDIA
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/multimedia/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoMultimedia');

                for (var i = 0; i < respuesta.length; i++) {
                    var valor = respuesta[i];
                    select.append($('<option>', {
                        value: valor.codMult,
                        text: valor.codMult
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //llamar datos del MULTIMEDIA por el ID en los inputs
    $('#llamarMultimedia').on('click', function () {
        var codMult = $('#codigoMultimedia').val();

        $.ajax({
            url: "http://localhost:8080/multimedia/" + codMult,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                if (respuesta != null) {
                    $('#codmultimedia').val(respuesta.codMult);
                    $('#nombremultimedia').val(respuesta.cuentClien);
                    $('#tamañomultimedia').val(respuesta.formaPag);
                    // Aquí se establece el valor del select
                    $('#numerodiagnosticomultimedia').val(respuesta.cultivo.codCult); // Suponiendo que 'administrador' tiene un campo 'id'
                } else {
                    $('#codmultimedia').val('');
                    $('#nombremultimedia').val('');
                    $('#tamañomultimedia').val('');
                    $('#numerodiagnosticomultimedia').val('');
                    $('#error-message').html('No se encontró ningúna multimedia especificada.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });


    //insertar
    $(document).ready(function () {
        // Cuando se haga clic en el botón "Enviar"
        $("#insertarMultimedia").click(function () {
            // Recoge los valores de los campos de entrada
            var nmulti = $("#codmultimedia").val();
            var nombreMultimedia = $("#nombremultimedia").val();
            var tamañoMulti = $("#tamañomultimedia").val();
            var diagnostico = $("#numerodiagnosticomultimedia").val(); // Valor del select

            // Crea un objeto de cliente con los valores recogidos
            var data = {
                "codMult": nmulti,
                "nombArchivo": nombreMultimedia,
                "tamaño": tamañoMulti,
                "diagnostico": {
                    "numDiag": diagnostico // La llave foránea
                }
            };

            // Realiza la solicitud AJAX para insertar el cliente
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/multimedia/insertar",// La URL de tu endpoint de inserción
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function (response) {
                    // Cliente insertado con éxito
                    alert("Multimedia insertado con éxito");
                    // Limpia los campos de entrada
                    $("#codmultimedia").val("");
                    $("#nombremultimedia").val("");
                    $("#tamañomultimedia").val("");
                    $("#numerodiagnosticomultimedia").val("");
                    // Restablece el valor del select
                },
                error: function () {
                    // Maneja el error en caso de que falle la inserción
                    alert("Error al insertar el multimedia");
                }
            });
        });
    });

    //Listar MULTIMEDIA
    $(document).ready(function () {
        // Función para cargar y mostrar los clientes en la tabla
        function cargarMultimedia() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/multimedia/listar",
                success: function (data) {
                    $("#tablaMultimedia tbody").empty(); // Limpia la tabla antes de agregar datos
                    $.each(data, function (index, multimedia) {
                        var row = $("<tr>");
                        row.append($("<td>").text(multimedia.codMult));
                        row.append($("<td>").text(multimedia.nombArchivo));
                        row.append($("<td>").text(multimedia.tamaño));
                        row.append($("<td>").text(multimedia.diagnostico.numDiag));
                        $("#tablaMultimedia tbody").append(row);
                    });
                },
                error: function () {
                    alert("Error al obtener los multimedia");
                }
            });
        }

        // Cargar los clientes al cargar la página
        cargarMultimedia();

        // Cuando se haga clic en el botón "Listar"
        $("#listarMultimedia").click(function () {
            cargarMultimedia();
        });
    });

    //Actualizar MULTIMEDIA
    $("#actualizarMultimedia").click(function () {
        var codMult = $("#codmultimedia").val();
        var nombArchivo = $("#nombremultimedia").val();
        var tamaño = $("#tamañomultimedia").val();
        var diagnostico = $("#numerodiagnosticomultimedia").val();

        var data = {
            codMult: codMult,
            nombArchivo: nombArchivo,
            tamaño: tamaño,
            diagnostico: {
                numDiag: diagnostico
            }
        };

        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/multimedia/actualizar/" + codMult,
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                alert("Multimedia actualizada con exitosamente.");
                console.log(response);
                // Actualizar la tabla o mostrar un mensaje de éxito
                //console.log("Facturación actualizada con éxito");
            },
            error: function (error) {
                // Manejar el error, mostrar un mensaje de error, etc.
                console.error("Error al actualizar multimedia:", error);
            }
        });
    });

    //eliminar
    $("#eliminarMultimedia").click(function () {
        var codMult = $("#codigoMultimedia").val();

        $.ajax({
            type: "DELETE",
            url: "http://localhost:8080/multimedia/eliminar/" + codMult,
            success: function (response) {
                alert("Multimedia eliminada con exitosamente.");
                console.log(response);
                console.log("Multimedia eliminada con éxito");
            },
            error: function (error) {
                // Manejar el error, mostrar un mensaje de error, etc.
                console.error("Error al eliminar multimedia:", error);
            }
        });
    });

    //Buscar CLIENTE por ID
    $('#buscarMultimedia').on('click', function () {
        var codMult = $('#codigoMultimedia').val();
        $.ajax({
            url: "http://localhost:8080/multimedia/" + codMult,
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                $('#tablaMultimedia tbody').empty(); // Limpia la tabla antes de agregar datos
                if (respuesta != null) {
                    var row = $("<tr>");
                    row.append($("<td>").text(respuesta.codMult));
                    row.append($("<td>").text(respuesta.nombArchivo));
                    row.append($("<td>").text(respuesta.tamaño));
                    row.append($("<td>").text(respuesta.diagnostico.numDiag));
                    $('#tablaMultimedia tbody').append(row);
                } else {
                    $('#error-message').html('No se encontró ningúna multimedia con el número de código especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    });



    //---------------  VIRUS  -----------------------------
    // Cargar valores del ID de VIRUS en el formulario select
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/virus/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoVirus');

                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.codVirus,
                        text: administrador.codVirus
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //Limpiar campos de VIRUS
    $('#limpiarVirus').on('click', function () {
        $('#codvirus').val('');
        $('#nombrevirus').val('');
    });

    // Insertar VIRUS
    $('#insertarVirus').on('click', function () {
        var Data = {
            codVirus: $('#codvirus').val(),
            nomVirus: $('#nombrevirus').val()
        };

        $.ajax({
            url: "http://localhost:8080/virus/insertar",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(Data),
            success: function (response) {
                alert("Virus ingresado exitosamente.");
                console.log(response);
            },
            error: function (xhr, status, error) {
                alert("No se pudo ingresar el virus.");
                console.error(error);
            }
        });
    });

    //cargar ID en el SELECT de MULTIMEDIA
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/multimedia/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoMultimedia');

                for (var i = 0; i < respuesta.length; i++) {
                    var valor = respuesta[i];
                    select.append($('<option>', {
                        value: valor.codMult,
                        text: valor.codMult
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //llamar datos del VIRUS por el ID en los inputs
    $('#llamarVirus').on('click', function () {
        var codVirus = $('#codigoVirus').val(); // Cambiado el ID a 'ndocumentoAdmin' para obtener el valor del número de documento.

        $.ajax({
            url: "http://localhost:8080/virus/" + codVirus,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                if (respuesta != null) {
                    $('#codvirus').val(respuesta.codVirus);
                    $('#nombrevirus').val(respuesta.nomVirus);
                } else {
                    $('#codvirus').val('');
                    $('#nombrevirus').val('');
                    $('#error-message').html('No se encontró ningun DRON con el número especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //buscar por Numero documento ID en VIRUS
    $('#buscarVirus').on('click', function () {
        var codVirus = $('#codigoVirus').val();

        $.ajax({
            url: "http://localhost:8080/virus/" + codVirus,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                $('#tablaVirus').html('');
                if (respuesta != null) {
                    $('#tablaVirus').html('<thead><tr>' +
                        '<th>Codigo Virus</th>' +
                        '<th>Nombre Virus</th>' +
                        '</tr></thead><tbody>' +
                        '<tr>' +
                        '<td>' + respuesta.codVirus + '</td>' +
                        '<td>' + respuesta.nomVirus + '</td>' +
                        '</tr></tbody>');
                } else {
                    $('#tablaVirus').html('');
                    $('#error-message').html('No se encontró ningun Virus con el número especificado.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
    //Listar VIRUS
    $(document).ready(function () {
        // Función para cargar y mostrar los clientes en la tabla
        function cargarVirus() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/virus/listar",
                success: function (data) {
                    $("#tablaVirus tbody").empty(); // Limpia la tabla antes de agregar datos
                    $.each(data, function (index, virus) {
                        var row = $("<tr>");
                        row.append($("<td>").text(virus.codVirus));
                        row.append($("<td>").text(virus.nomVirus));
                        $("#tablaVirus tbody").append(row);
                    });
                },
                error: function () {
                    alert("Error al obtener virus");
                }
            });
        }

        // Cargar los clientes al cargar la página
        cargarVirus();

        // Cuando se haga clic en el botón "Listar"
        $("#listarVirus").click(function () {
            cargarVirus();
        });
    });

    // Actualizar VIRUS
    $('#actualizarVirus').on('click', function () {
        var codVirus = $('#codigoVirus').val();
        var DataVIRUS = {
            //codDron: $('#coddron').val(),
            codVirus: $('#codvirus').val(),
            nomVirus: $('#nombrevirus').val()
        };

        $.ajax({
            url: "http://localhost:8080/virus/actualizar/" + codVirus,
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(DataVIRUS),
            success: function (response) {
                alert("Virus actualizado exitosamente.");
                console.log(response);
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    alert("No se encontró el número  " + codVirus);
                }
                console.error(xhr.responseText);
            }
        });
    });

    // Eliminar por número de ID
    $('#eliminarVirus').on('click', function () {
        var codVirus = $('#codigoVirus').val();
        $.ajax({
            url: "http://localhost:8080/virus/eliminar/" + codVirus,
            type: "DELETE",
            dataType: "text",
            success: function (response) {
                console.log("Respuesta del servidor:", response);
                if (response.trim() === "Eliminado") {
                    alert("Virus eliminado exitosamente.");
                } else {
                    alert("Eliminado el virus " + codVirus);
                }
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    alert("No se encontró el número " + codVirus);
                } else {
                    alert("Ocurrió un error en la solicitud. Por favor, inténtalo nuevamente.");
                }
                console.error(xhr.responseText);
            }
        });
    });

    //limpiar tabla
    $("#limpiarTablaVirus").click(function () {
        // Elimina todas las filas de la tabla
        $("#tablaVirus tbody").empty();
    });

    //---------------  INFORMACION  -----------------------------
    //insertar
    $(document).ready(function () {
        $("#insertarTiene").click(function () {
            var numReg = $("#numeroregistrotiene").val();
            var fechReg = $("#fecharegistrotiene").val();
            var numDiag = $("#numerodiagnosticotiene").val();
            var codVirus = $("#codigovirustiene").val();

            var informacion = {
                numReg: numReg,
                fechReg: fechReg,
                diagnostico: {
                    numDiag: numDiag
                },
                virus: {
                    codVirus: codVirus
                }
            };

            $.ajax({
                type: "POST",
                url: "http://localhost:8080/tiene/insertar",
                //url: "/tiene/insertar",
                data: JSON.stringify(informacion),
                contentType: "application/json",
                success: function (data) {
                    // Aquí puedes manejar la respuesta exitosa, por ejemplo, mostrar un mensaje
                    alert("Información insertada con éxito");
                },
                error: function (xhr, status, error) {
                    // Aquí puedes manejar los errores, por ejemplo, mostrar un mensaje de error
                    alert("Error al insertar la información: " + error);
                }
            });
        });
    });
    // Cargar valores del ID en el formulario select
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/tiene/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigoTiene');

                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.numReg,
                        text: administrador.numReg
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
    //Listar MULTIMEDIA
    $(document).ready(function () {
        // Función para cargar y mostrar los clientes en la tabla
        function cargarInformacion() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/tiene/listar",
                success: function (data) {
                    $("#tablaTiene tbody").empty(); // Limpia la tabla antes de agregar datos
                    $.each(data, function (index, informacion) {
                        var row = $("<tr>");
                        row.append($("<td>").text(informacion.numReg));
                        row.append($("<td>").text(informacion.fechReg));
                        row.append($("<td>").text(informacion.diagnostico.numDiag));
                        row.append($("<td>").text(informacion.virus.codVirus));
                        $("#tablaTiene tbody").append(row);
                    });
                },
                error: function () {
                    alert("Error al obtener los datos de información");
                }
            });
        }

        // Cargar los clientes al cargar la página
        cargarInformacion();

        // Cuando se haga clic en el botón "Listar"
        $("#listarTiene").click(function () {
            cargarInformacion();
        });
    });
    // Cargar valores de ID de DIAGNOSTICO en el formulario
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/diagnostico/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#numerodiagnosticotiene');

                for (var i = 0; i < respuesta.length; i++) {
                    var cultivos = respuesta[i];
                    select.append($('<option>', {
                        value: cultivos.numDiag,
                        text: cultivos.numDiag
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
    // Cargar valores de ID de VIRUS en el formulario
    $(document).ready(function () {
        $.ajax({
            url: "http://localhost:8080/virus/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var select = $('#codigovirustiene');

                for (var i = 0; i < respuesta.length; i++) {
                    var cultivos = respuesta[i];
                    select.append($('<option>', {
                        value: cultivos.codVirus,
                        text: cultivos.codVirus
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
    //Limpiar campos de INFORMACION
    $('#limpiarTiene').on('click', function () {
        $('#numeroregistrotiene').val('');
        $('#fecharegistrotiene').val('');
        $('#numerodiagnosticotiene').val('');
        $('#codigovirustiene').val('');
    });
    //limpiar tabla
    $("#limpiarTablaTiene").click(function () {
        // Elimina todas las filas de la tabla
        $("#tablaTiene tbody").empty();
    });

    //llamar datos del  por el ID en los inputs
    $('#llamarTiene').on('click', function () {
        var numReg = $('#codigoTiene').val();

        $.ajax({
            url: "http://localhost:8080/tiene/" + numReg,
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                if (respuesta != null) {
                    $('#numeroregistrotiene').val(respuesta.numReg);
                    $('#fecharegistrotiene').val(respuesta.fechReg);
                    $('#numerodiagnosticotiene').val(respuesta.diagnostico.numDiag); // Suponiendo que 'administrador' tiene un campo 'id'
                    $('#codigovirustiene').val(respuesta.virus.codVirus);
                } else {
                    $('#numeroregistrotiene').val('');
                    $('#fecharegistrotiene').val('');
                    $('#numerodiagnosticotiene').val('');
                    $('#codigovirustiene').val('');
                    $('#error-message').html('No se encontró ningúna información especificada.');
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //Actualizar
    $("#actualizarTiene").click(function () {
        var numReg = $("#numeroregistrotiene").val();
        var fechReg = $("#fecharegistrotiene").val();
        var diagnostico = $("#numerodiagnosticotiene").val();
        var virus = $("#codigovirustiene").val();

        var data = {
            numReg: numReg,
            fechReg: fechReg,
            diagnostico: {
                numDiag: diagnostico
            },
            virus: {
                codVirus: virus
            }
        };

        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/tiene/actualizar/" + numReg,
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                alert("informacion actualizada con exitosamente.");
                console.log(response);
                // Actualizar la tabla o mostrar un mensaje de éxito
                console.log("Información actualizada con éxito");
            },
            error: function (error) {
                // Manejar el error, mostrar un mensaje de error, etc.
                console.error("Error al actualizar información:", error);
            }
        });
    });

    //eliminar
    $("#eliminarTiene").click(function () {
        var numReg = $("#codigoTiene").val();

        $.ajax({
            type: "DELETE",
            url: "http://localhost:8080/tiene/eliminar/" + numReg,
            success: function (response) {
                alert("información eliminada exitosamente. " + numReg);
                console.log(response);
                console.log("informacion eliminada con éxito " + numReg);
            },
            error: function (error) {
                // Manejar el error, mostrar un mensaje de error, etc.
                console.error("Error al eliminar informacion:", error);
            }
        });
    });


});  // fin
