
$(document).ready(function() {

//---------------  ADMINISTRADOR  -----------------------------
    //PRUEBA
    //llamar datos del Administrador por el ID en los inputs
    $('#llamarAdmin').on('click', function() {
        var numDoc = $('#codigo').val(); // Cambiado el ID a 'ndocumentoAdmin' para obtener el valor del número de documento.

        $.ajax({
            url: "http://localhost:8080/administradores/" + numDoc,
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
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
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //buscar por Numero documento ID
    $('#buscarAdmin').on('click', function() {
        var numDoc = $('#codigo').val(); 
    
        $.ajax({
            url: "http://localhost:8080/administradores/" + numDoc,
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
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
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
    
        // Insertar administrador
    $('#insertarAdmin').on('click', function() {
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
            success: function(response) {
                alert("Administrador ingresado exitosamente.");
                console.log(response);
            },
            error: function(xhr, status, error) {
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
    $('#actualizarAdmin').on('click', function() {
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
            success: function(response) {
                alert("Administrador actualizado exitosamente.");
                console.log(response);
            },
            error: function(xhr) {
                if (xhr.status === 404) {
                    alert("No se encontró el número de documento " + numDoc);
                }
                console.error(xhr.responseText);
            }
        });
    });

        //Listar administradores
    $('#listarAdmin').on('click', function() {
        $.ajax({
            url: "http://localhost:8080/administradores/listar", 
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
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
            error: function(xhr, status, error) {
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
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/administradores/listar", // Ajusta la URL adecuadamente
        type: "GET",
        dataType: "json",
        success: function(respuesta) {
            var select = $('#codigo');
            
            for (var i = 0; i < respuesta.length; i++) {
                var administrador = respuesta[i];
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


//---------------  CULTIVO  -----------------------------   
    //buscar codigo ID cltivo
    $('#buscarCultivo').on('click', function() {
        var codCult = $('#codigoCultivo').val();
        $.ajax({
            url: "http://localhost:8080/cultivos/" + codCult,
            type: "GET",
            datatype: "JSON",
            success: function(respuesta) {
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
            error: function(xhr, status, error) {
                console.log(xhr.responseText); 
            }
        });
    });

        // Insertar cultivo
    $('#insertarCultivo').on('click', function() {
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
            success: function(response) {
                alert("Cultivo ingresado exitosamente.");
                console.log(response);
            },
            error: function(xhr, status, error) {
                alert("No se pudo ingresar el cultivo.");
                console.error(error);
            }
        });
    });

        // Eliminar cultivo
    $('#eliminarCultivo').on('click', function() {
        var codCult = $('#codigoCultivo').val(); 
        $.ajax({
            url: "http://localhost:8080/cultivos/eliminar/" + codCult, 
            type: "DELETE",
            dataType: "text",
            success: function(respuesta) {
                console.log(respuesta);
                if (respuesta === "Eliminado") {
                    alert("Cultivo eliminado");
                } 
            },
            error: function(xhr) {
                if (xhr.status === 404) {
                    alert("No se pudo eliminar, no se encontró el codigo " + codCult); 
                }
                console.error(xhr.responseText);
            }
        });
    });
        
            // Actualizar cultivo
    $('#actualizarCultivo').on('click', function() {
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
            success: function(respuesta) {
                console.log(respuesta);
                alert("Cultivo actualizado correctamente");
            },
            error: function(xhr) {
                if (xhr.status === 404) {
                    alert("No se pudo actualizar, no se encontró el código " + codCult);
                }
                console.error(xhr.responseText);
            }
        });
    });

        //Listar cultivos
    $('#listarCultivo').on('click', function() {
        $.ajax({
            url: "http://localhost:8080/cultivos/listar", 
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                $('#tablaCultivo').html('');
                if (respuesta.length > 0) {
                    var tablaHTML = '<thead><tr>' +
                                    '<th>Codigo Cultivo</th>' +
                                    '<th>Dirección</th>' +
                                    '<th>Hectareas</th>' +
                                    '<th>Terreno</th>' +
                                    '</tr></thead><tbody>';
                    
                    for (var i = 0; i < respuesta.length; i++) {
                        var admin = respuesta[i];
                        tablaHTML += '<tr>' +
                                     '<td>' + admin.codCult + '</td>' +
                                     '<td>' + admin.direccion + '</td>' +
                                     '<td>' + admin.hectareas + '</td>' +
                                     '<td>' + admin.terreno + '</td>' +
                                     '</tr>';
                    }
    
                    tablaHTML += '</tbody>';
                    $('#tablaCultivo').html(tablaHTML);
                } else {
                    $('#tablaCultivo').html('');
                    $('#error-message').html('No se encontraron cultivos.');
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
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
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/cultivos/listar", // Ajusta la URL adecuadamente
        type: "GET",
        dataType: "json",
        success: function(respuesta) {
            var select = $('#codigoCultivo');
            
            for (var i = 0; i < respuesta.length; i++) {
                var cultivos = respuesta[i];
                select.append($('<option>', {
                    value: cultivos.codCult,
                    text: cultivos.codCult
                }));
            }
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
});

    //llamar datos de los CULTIVOS por el ID en los inputs
    $('#llamarCultivo').on('click', function() {
        var codCult = $('#codigoCultivo').val(); // Cambiado el ID

        $.ajax({
            url: "http://localhost:8080/cultivos/" + codCult,
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
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
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
      
//  -------------------  CLIENTE  -----------------------------

    //insertar CLIENTE
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
    $('#buscarCliente').on('click', function () {
        var idNit = $('#codigoCliente').val();
        $.ajax({
            url: "http://localhost:8080/clientes/" + idNit,
            type: "GET",
            datatype: "JSON",
            success: function (respuesta) {
                console.log(respuesta);
                $('#tablaCliente tbody').empty(); // Limpia la tabla antes de agregar datos
                if (respuesta != null) {
                    var row = $("<tr>");
                    row.append($("<td>").text(respuesta.idNit));
                    row.append($("<td>").text(respuesta.nombre));
                    row.append($("<td>").text(respuesta.correo));
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
                        row.append($("<td>").text(cliente.idNit));
                        row.append($("<td>").text(cliente.nombre));
                        row.append($("<td>").text(cliente.correo));
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
    $('#actualizarCliente').on('click', function() {
        var codigoCliente = $('#codigoCliente').val();
        var clienteData = {
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
                var select = $('#administradorcliente');
                
                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
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
    $('#llamarCliente').on('click', function() {
        var idNit = $('#codigoCliente').val();
    
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
                var select = $('#codigoCliente');
                
                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
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
        var codCult = $('#codigoCliente').val();
        $.ajax({
            url: "http://localhost:8080/clientes/eliminar/" + codCult, // Usar codCult en lugar de idNit
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
                    alert("No se pudo eliminar, no se encontró el código " + codCult);
                }
                console.error(xhr.responseText);
            }
        });
    });

//---------------  EMPLEADOS  -----------------------------   
    // Cargar valores de numDoc de Administrador en el formulario select de la tabla EMPLEADOS
    $(document).ready(function() {
        $.ajax({
            url: "http://localhost:8080/administradores/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                var select = $('#administradorempleados');
                
                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
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
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.codEmp,
                        text: administrador.codEmp
                    }));
                }
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //llamar datos del EMPLEADO por el ID en los inputs
    $('#llamarEmpleados').on('click', function() {
        var codEmp = $('#codigoEmpleados').val();
    
        $.ajax({
            url: "http://localhost:8080/empleados/" + codEmp,
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                if (respuesta != null) {
                    $('#codempleados').val(respuesta.codEmp);
                    $('#nombreempleados').val(respuesta.nombre);
                    $('#apellidoempleados').val(respuesta.apellido);
                    $('#tdocumentoempleados').val(respuesta.tipo_doc);
                    $('#ndocumentoempleados').val(respuesta.num_doc);
    
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
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //limpiar tabla EMPLEADOS
    $("#limpiarTablaEmpleados").click(function () {
        // Elimina todas las filas de la tabla
        $("#tablaEmpleados tbody").empty();
    });

    /*//insertar EMPLEADOS
    $(document).ready(function() {
        // Cuando se haga clic en el botón "Enviar"
        $("#insertarEmpleados").click(function() {
            // Recoge los valores de los campos de entrada
            var codigoEmpleado = $("#codempleados").val();
            var nombreEmpleado = $("#nombreempleados").val();
            var apellidoEmpleado = $("#apellidoempleados").val();
            var docEmpleado = $("#tdocumentoempleados").val();
            var numEmpleado = $("#ndocumentoempleados").val();
            var administradorEmpleado = $("#administradorempleados").val(); // Valor del select

            // Crea un objeto de cliente con los valores recogidos
            var empleado = {
                "codEmp": codigoEmpleado,
                "nombre": nombreEmpleado,
                "apellido": apellidoEmpleado,
                "tipo_doc": docEmpleado,
                "num_docu": numEmpleado,
                "administrador": {
                    "numDoc": administradorEmpleado // La llave foránea
                }
            };

            // Realiza la solicitud AJAX para insertar el cliente
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/empleados/insertar",// La URL de tu endpoint de inserción
                contentType: "application/json",
                data: JSON.stringify(empleado),
                success: function(response) {
                    // Cliente insertado con éxito
                    alert("Empleado insertado con éxito");
                    // Limpia los campos de entrada
                    $("#codempleados").val("");
                    $("#nombreempleados").val("");
                    $("#apellidoempleados").val("");
                    $("#tdocumentoempleados").val("");
                    $("#ndocumentoempleados").val("");
                    // Restablece el valor del select
                    $("#administradorempleados").val("");
                },
                error: function() {
                    // Maneja el error en caso de que falle la inserción
                    alert("Error al insertar el empleado");
                }
            });
        });
    });*/
   
    /*$(document).ready(function() {
        // Cuando se haga clic en el botón "Enviar"
        $("#insertarEmpleados").click(function() {
            // Recoge los valores de los campos de entrada
            var codigoEmpleado = $("#codempleados").val();
            var nombreEmpleado = $("#nombreempleados").val();
            var apellidoEmpleado = $("#apellidoempleados").val();
            var docEmpleado = $("#tdocumentoempleados").val();
            var numEmpleado = $("#ndocumentoempleados").val();
            var administradorEmpleado = $("#administradorempleados").val(); // Valor del select
    
            // Crea un objeto de empleado con los valores recogidos
            var empleado = {
                codEmp: codigoEmpleado,
                nombre: nombreEmpleado,
                apellido: apellidoEmpleado,
                tipo_doc: docEmpleado,
                num_docu: numEmpleado,
                administrador: {
                    numDoc: administradorEmpleado // La llave foránea
                }
            };
    
            // Realiza la solicitud AJAX para insertar el empleado
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/empleados/insertar", // La URL de tu endpoint de inserción
                contentType: "application/json",
                data: JSON.stringify(empleado),
                success: function(response) {
                    // Empleado insertado con éxito
                    alert("Empleado insertado con éxito");
                    // Limpia los campos de entrada
                    $("#codempleados").val("");
                    $("#nombreempleados").val("");
                    $("#apellidoempleados").val("");
                    $("#tdocumentoempleados").val("");
                    $("#ndocumentoempleados").val("");
                    // Restablece el valor del select
                    $("#administradorempleados").val("");
                },
                error: function() {
                    // Maneja el error en caso de que falle la inserción
                    alert("Error al insertar el empleado");
                }
            });
        });
    });*/
    
    /*$(document).ready(function() {
        // Selector para el botón 'insertarEmpleados'
        $("#insertarEmpleados").click(function() {
          // Obtener los valores de los campos de entrada
          var codEmp = $("#codempleados").val();
          var nombre = $("#nombreempleados").val();
          var apellido = $("#apellidoempleados").val();
          var tipo_doc = $("#tdocumentoempleados").val();
          var num_doc = $("#ndocumentoempleados").val();
          var administrador = $("#administradorempleados").val();
      
          // Crear un objeto con los datos del empleado
          var empleadoData = {
            codEmp: codEmp,
            nombre: nombre,
            apellido: apellido,
            tipo_doc: tipo_doc,
            num_docu: num_doc,
            administrador: {
              numDoc: administrador
            }
          };
      
          // Realizar la solicitud AJAX para agregar el empleado
          $.ajax({
            type: "POST",
            url: "http://localhost:8080/empleados/insertar",  // La URL de la API donde se procesará la solicitud
            contentType: "application/json",
            data: JSON.stringify(empleadoData), // Convertir el objeto a JSON
            success: function(response) {
              // Manejar la respuesta exitosa, por ejemplo, mostrar un mensaje de éxito o redirigir a otra página.
              alert("Empleado agregado con éxito.");
              // Puedes realizar otras acciones aquí, como limpiar los campos del formulario.
            },
            error: function(error) {
              // Manejar errores, por ejemplo, mostrar un mensaje de error.
              alert("Error al agregar empleado.");
            }
          });
        });
      });*/
      
      /*$(document).ready(function() {
          // Botón para enviar el formulario de inserción de empleado
          $("#insertarEmpleados").click(function() {
              var codempleados = $("#codempleados").val();
              var nombreempleados = $("#nombreempleados").val();
              var apellidoempleados = $("#apellidoempleados").val();
              var tdocumentoempleados = $("#tdocumentoempleados").val();
              var ndocumentoempleados = $("#ndocumentoempleados").val();
              var administradorempleados = $("#administradorempleados").val();
      
              // Crear un objeto de datos para enviar al servidor
              var empleadoData = {
                  codEmp: codempleados,
                  nombre: nombreempleados,
                  apellido: apellidoempleados,
                  tipo_doc: tdocumentoempleados,
                  num_docu: ndocumentoempleados,
                  administrador: {
                      numDoc: administradorempleados
                  }
              };
      
              // Realizar la solicitud AJAX POST
              $.ajax({
                  type: "POST",
                  url: "http://localhost:8080/empleados/insertar", // La URL de tu endpoint de inserción de empleados
                  contentType: "application/json",
                  data: JSON.stringify(empleadoData),
                  success: function(response) {
                      // Manejar la respuesta del servidor (por ejemplo, mostrar un mensaje de éxito)
                      alert("Empleado ingresado con éxito.");
                      // Limpiar los campos del formulario
                      limpiarCampos();
                  },
                  error: function(error) {
                      // Manejar errores (por ejemplo, mostrar un mensaje de error)
                      alert("Error al ingresar el empleado.");
                  }
              });
          });
      
          // Función para limpiar los campos del formulario
          function limpiarCampos() {
              $("#codempleados").val("");
              $("#nombreempleados").val("");
              $("#apellidoempleados").val("");
              $("#tdocumentoempleados").val("");
              $("#ndocumentoempleados").val("");
              $("#administradorempleados").val("");
          }
      });*/
    
     /* $(document).ready(function() {
        // Agrega un manejador de clic para el botón 'insertarEmpleados'
        $('#insertarEmpleados').click(function() {
            // Obtén los valores de los campos de entrada
            var codEmp = $('#codempleados').val();
            var nombre = $('#nombreempleados').val();
            var apellido = $('#apellidoempleados').val();
            var tipoDoc = $('#tdocumentoempleados').val();
            var numDoc = $('#ndocumentoempleados').val();
            var administradorNumDoc = $('#administradorempleados').val(); // Asegúrate de que el ID coincida con el campo de selección de administrador
    
            // Crea un objeto de datos para enviar al servidor
            var empleadoData = {
                codEmp: codEmp,
                nombre: nombre,
                apellido: apellido,
                tipo_doc: tipoDoc,
                num_doc: numDoc,
                //administrador1: administradorNumDoc
                administrador1: {
                    numDoc: administradorNumDoc
                }
            };
    
            // Realiza una solicitud AJAX para agregar el empleado
            $.ajax({
                url: "http://localhost:8080/empleados/insertar",  // Reemplaza esto con la URL real de tu endpoint de inserción de empleados
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(empleadoData),
                success: function(response) {
                    // Si la inserción es exitosa, puedes realizar alguna acción adicional si es necesario
                    console.log('Empleado insertado con éxito:', response);
    
                    // Limpia los campos de entrada después de la inserción
                    $('#codempleados').val('');
                    $('#nombreempleados').val('');
                    $('#apellidoempleados').val('');
                    $('#tdocumentoempleados').val('');
                    $('#ndocumentoempleados').val('');
                    $('#administradorempleados').val('');
    
                    // Actualiza la tabla de empleados
                    //listarEmpleados();
                },
                error: function(error) {
                    console.log('Error al insertar empleado:', error);
                }
            });
        });
    
        // Define la función para listar empleados (como se mencionó en la respuesta anterior)
        //function listarEmpleados() {
            // Código para listar empleados aquí...
       // }
    });*/

    //Ingresar EMPLEADOS
    /*$(document).ready(function() {
        // Agrega un manejador de clic para el botón 'insertarEmpleados'
        $('#insertarEmpleados').click(function() {
            // Obtiene los valores de los campos de entrada
            var codEmp = $('#codempleados').val();
            var nombre = $('#nombreempleados').val();
            var apellido = $('#apellidoempleados').val();
            var tipo_doc = $('#tdocumentoempleados').val();
            var num_doc = $('#ndocumentoempleados').val();
            var administrador_num_doc = $('#administradorempleados').val(); // Asegúrate de que este campo coincida con el valor que deseas enviar al servidor
    
            // Crea un objeto de datos con los valores
            var datosEmpleado = {
                codEmp: codEmp,
                nombre: nombre,
                apellido: apellido,
                tipo_doc: tipo_doc,
                num_doc: num_doc,
                administrador: { numDoc: administrador_num_doc } // Asegúrate de que coincida con la estructura esperada por tu backend
            };
    
            // Realiza la solicitud AJAX para insertar el empleado
            $.ajax({
                url: "http://localhost:8080/empleados/insertar",    // Reemplaza esto con la URL real de tu endpoint para insertar empleados
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(datosEmpleado),
                success: function(response) {
                    // Maneja la respuesta del servidor si es necesario
                    console.log('Empleado insertado correctamente:', response);
    
                    // Limpia los campos de entrada
                    $('#codempleados').val('');
                    $('#nombreempleados').val('');
                    $('#apellidoempleados').val('');
                    $('#tdocumentoempleados').val('');
                    $('#ndocumentoempleados').val('');
                    $('#administradorempleados').val('');
                },
                error: function(error) {
                    console.log('Error al insertar empleado:', error);
                }
            });
        });
    });*/
    
    //Listar EMPLEADOS
    /*$(document).ready(function () {
        // Función para cargar y mostrar los datos en la tabla
        function cargarEmpleados() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/empleados/listar",
                success: function (data) {
                    $("#tablaEmpleados tbody").empty(); // Limpia la tabla antes de agregar datos
                    $.each(data, function (index, empleados) {
                        var row = $("<tr>");
                        row.append($("<td>").text(empleados.codEmp));
                        row.append($("<td>").text(empleados.nombre));
                        row.append($("<td>").text(empleados.apellido));
                        row.append($("<td>").text(empleados.tipo_doc));
                        row.append($("<td>").text(empleados.num_docu));
                        row.append($("<td>").text(empleados.administrador.numDoc));
                        $("#tablaEmpleados tbody").append(row);
                    });
                },
                error: function () {
                    alert("Error al obtener los empleados");
                }
            });
        }

        // Cargar los datos al cargar la página
        cargarEmpleados();

        // Cuando se haga clic en el botón "Listar"
        $("#listarEmpleados").click(function () {
            cargarEmpleados();
        });
    });*/

    //Listar EMPLEADOS -YES
    $(document).ready(function() {
        // Define la función para listar empleados
        function listarEmpleados() {
            $.ajax({
                url: "http://localhost:8080/empleados/listar", // Reemplaza esto con la URL real de tu endpoint de listado de empleados
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    // Limpia la tabla
                    $('#tablaEmpleados tbody').empty();
                    
                    // Recorre los datos y agrega filas a la tabla
                    $.each(data, function(index, empleado) {
                        $('#tablaEmpleados tbody').append(
                            '<tr>' +
                            '<td>' + empleado.codEmp + '</td>' +
                            '<td>' + empleado.apellido + '</td>' +
                            '<td>' + empleado.nombre + '</td>' +
                            '<td>' + empleado.num_docu + '</td>' +
                            '<td>' + empleado.tipo_doc + '</td>' +
                            '<td>' + empleado.administrador.nombre + '</td>' +
                            //'<td>' + empleado.administrador.numDoc + '</td>' +
                            //row.append($("<td>").text(empleados.administrador.numDoc));
                            '</tr>'
                        );
                    });
                },
                error: function(error) {
                    console.log('Error al listar empleados:', error);
                }
            });
        }
        // Cargar los datos al cargar la página
        listarEmpleados();
        // Agrega un manejador de clic para el botón 'listarEmpleados'
        $('#listarEmpleados').click(function() {
            listarEmpleados();
        });
    });

    // Actualizar EMPLEADOS
    /*$('#actualizarEmpleados').on('click', function () {
        var codigoEmpleado = $('#codigoEmpleados').val();
        var empleadoData = {
            codEmp: codigoEmpleado,
            nombre: $('#nombreempleados').val(),
            apellido: $('#apellidoempleados').val(),
            tipo_doc: $('#tdocumentoempleados').val(),
            num_docu: $('#ndocumentoempleados').val(),
            administrador: {
                numDoc: $('#administradorempleados').val()
            }
        };

        $.ajax({
            url: "http://localhost:8080/empleados/actualizar/" + codigoEmpleado,
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(empleadoData),
            success: function (response) {
                alert("Empleado actualizado exitosamente.");
                console.log(response);
            },
            error: function (xhr) {
                if (xhr.status === 404) {
                    alert("No se encontró el empleado con código " + codigoEmpleado);
                }
                console.error(xhr.responseText);
            }
        });
    });*/

   /* $(document).ready(function() {
        $("#actualizarEmpleados").click(function() {
            // Obtén los valores de los campos de entrada
            var codEmp = $("#codempleados").val();
            var nombre = $("#nombreempleados").val();
            var apellido = $("#apellidoempleados").val();
            var tipo_doc = $("#tdocumentoempleados").val();
            var num_docu = $("#ndocumentoempleados").val();
            //var administrador = $("#administradorempleados").val();

            // Crea un objeto de datos para enviar al servidor
            var data = {
                codEmp: codEmp,
                nombre: nombre,
                apellido: apellido,
                tipo_doc: tipo_doc,
                num_docu: num_docu
                //administrador: administrador
            };

            // Realiza la solicitud AJAX para actualizar el empleado
            $.ajax({
                type: "PUT",
                url: "http://localhost:8080/empleados/actualizar/" + codEmp, // Ajusta la URL de acuerdo a tu API
                data: JSON.stringify(data),
                contentType: "application/json",
                success: function(response) {
                    // Maneja la respuesta del servidor aquí, por ejemplo, muestra un mensaje de éxito
                    alert("Empleado actualizado correctamente.");
                },
                error: function(error) {
                    // Maneja los errores aquí, por ejemplo, muestra un mensaje de error
                    alert("Error al actualizar el empleado.");
                }
            });
        });
    });*/

    $(document).ready(function() {
        // Captura el evento clic del botón "Actualizar Empleado"
        $("#actualizarEmpleados").click(function() {
            // Obtén los valores de los campos de entrada
            var codEmpleado = $("#codempleados").val();
            var nombre = $("#nombreempleados").val();
            var apellido = $("#apellidoempleados").val();
            var tipoDocumento = $("#tdocumentoempleados").val();
            //var numDocumento = $("#ndocumentoempleados").val();
            var administrador = $("#administradorempleados").val();
    
            // Crea un objeto con los datos del empleado
            var empleadoData = {
                codEmp: codEmpleado,
                nombre: nombre,
                apellido: apellido,
                tipo_doc: tipoDocumento,
                //num_docu: numDocumento,
                administrador: {
                    numDoc: administrador
                }
            };
    
            // Envía la solicitud AJAX para actualizar el empleado
            $.ajax({
                type: "PUT",
                //url: "/empleados/actualizar/" + codEmpleado, // Asegúrate de que la URL sea correcta
                url: "http://localhost:8080/empleados/actualizar/" + codEmp,
                contentType: "application/json",
                data: JSON.stringify(empleadoData),
                success: function(response) {
                    // Maneja la respuesta exitosa aquí (puedes mostrar un mensaje de éxito, recargar la lista, etc.)
                    console.log("Empleado actualizado con éxito:", response);
                },
                error: function(error) {
                    // Maneja el error aquí (puedes mostrar un mensaje de error, registrar errores, etc.)
                    console.error("Error al actualizar el empleado:", error);
                }
            });
        });
    });
    

//---------------  VISITA  -----------------------------   

// Cargar valores de cod_emp de empleados en el formulario select de la tabla VISITA
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/empleados/listar", // Ajusta la URL adecuadamente
        type: "GET",
        dataType: "json",
        success: function(respuesta) {
            var select = $('#codigoempleadovisita');
            
            for (var i = 0; i < respuesta.length; i++) {
                var empleados = respuesta[i];
                select.append($('<option>', {
                    value: empleados.codEmp,
                    text: empleados.codEmp
                }));
            }
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
});

// Cargar valores de cod_cult de cultivo en el formulario select de la tabla VISITA
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/cultivos/listar", // Ajusta la URL adecuadamente
        type: "GET",
        dataType: "json",
        success: function(respuesta) {
            var select = $('#codigocultivovisita');
            
            for (var i = 0; i < respuesta.length; i++) {
                var cultivo = respuesta[i];
                select.append($('<option>', {
                    value: cultivo.codCult,
                    text: cultivo.codCult
                }));
            }
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
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

    /*//INSERTAR VISITA
    $(document).ready(function() {
        // Agrega un evento click al botón "insertarVisita"
        $("#insertarVisita").click(function() {
            // Obtiene los valores de los campos de entrada
            var numVisita = $("#codvisita").val();
            var nomFinca = $("#nombrefincavisita").val();
            var direcVisita = $("#direccionvisita").val();
            var fecha = $("#fechavisita").val();
            var codEmpleado = $("#codigoempleadovisita").val();
            var codCultivo = $("#codigocultivovisita").val();
    
            // Crea un objeto de datos para la visita
            var visitaData = {
                "numVisita": numVisita,
                "nomFinca": nomFinca,
                "direcVisita": direcVisita,
                "fecha": fecha,
                empleados: {
                    codEmp: codEmpleado
                },
                cultivo: {
                    codCult: codCultivo
                }
            };
    
            // Convierte el objeto de datos en una cadena JSON
            var jsonData = JSON.stringify(visitaData);
    
            // Realiza la solicitud AJAX POST para insertar la visita
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/visita/insertar", // Reemplaza con la URL correcta
                data: jsonData,
                contentType: "application/json",
                success: function(response) {
                    // Maneja la respuesta del servidor (puede mostrar un mensaje de éxito, etc.)
                    console.log("Visita insertada con éxito:", response);
                },
                error: function(error) {
                    // Maneja cualquier error que ocurra durante la solicitud
                    console.error("Error al insertar visita:", error);
                }
            });
        });
    });*/

    /*$(document).ready(function() {
        $("#insertarVisita").click(function() {
            // Captura los valores de los campos del formulario
            var numVisita = $("#codvisita").val();
            var nomFinca = $("#nombrefincavisita").val();
            var direcVisit = $("#direccionvisita").val();
            var fecha = $("#fechavisita").val();
            var codEmpleado = $("#codigoempleadovisita").val();
            var codCultivo = $("#codigocultivovisita").val();

            // Crea un objeto de datos para enviar al servidor
            var data = {
                numVisita: numVisita,
                nomFinca: nomFinca,
                direcVisit: direcVisit,
                fecha: fecha,
                empleados: {
                    codEmp: codEmpleado
                },
                cultivo: {
                    codCult: codCultivo
                }
            };

            // Realiza la solicitud AJAX para insertar la visita
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/visita/insertar", // Ajusta la URL de la solicitud según tu ruta de backend
                data: JSON.stringify(data),
                contentType: "application/json",
                success: function(response) {
                    // Maneja la respuesta del servidor si es necesario
                    console.log("Visita insertada con éxito:", response);
                    // Limpia los campos del formulario
                    $("#formularioVisita")[0].reset();
                },
                error: function(error) {
                    // Maneja los errores si ocurren
                    console.error("Error al insertar visita:", error);
                }
            });
        });
    });*/

    // Insertar ADM
    $('#insertarVisita').on('click', function() {
        var adminData = {
            numVisita: $('#codvisita').val(), 
            nom_finca: $('#nombrefincavisita').val(),  
            direc_visit: $('#direccionvisita').val(),   
            fecha: $('#fechavisita').val(),        
            empleados: $('#codigoempleadovisita').val(),       
            cultivo: $('#codigocultivovisita').val()   
        };
        
        $.ajax({
            url: "http://localhost:8080/visita/insertar",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(adminData),
            success: function(response) {
                alert("Visita ingresado exitosamente.");
                console.log(response);
            },
            error: function(xhr, status, error) {
                alert("No se pudo ingresar la visita.");
                console.error(error);
            }
        });
    });

    /*//insertar CLIENTE
    $(document).ready(function() {
        // Cuando se haga clic en el botón "Enviar"
        $("#insertarVisita").click(function() {
            // Recoge los valores de los campos de entrada
            var numVisita = $("#codvisita").val();
            var nom_finca = $("#nombrefincavisita").val();
            var direc_visit = $("#direccionvisita").val();
            var fecha = $("#fechavisita").val();
            var empleados = $("#codigoempleadovisita").val(); // Valor del select
            var cultivo = $("#codigocultivovisita").val();    

            // Crea un objeto de cliente con los valores recogidos
            var visita = {
                "numVisita": numVisita,
                "nom_finca": nom_finca,
                "direc_visit": direc_visit,
                "fecha": fecha,
                "empleados": {
                    "codEmp": empleados // La llave foránea
                },
                "cultivo": {
                    "codCult": cultivo // La llave foránea
                }
            };

            // Realiza la solicitud AJAX para insertar el visita
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/visita/insertar",// La URL de tu endpoint de inserción
                contentType: "application/json",
                data: JSON.stringify(visita),
                success: function(response) {
                    // Visita insertado con éxito
                    alert("Cliente insertado con éxito");
                    // Limpia los campos de entrada
                    $("#codvisita").val("");
                    $("#nombrefincavisita").val("");
                    $("#direccionvisita").val("");
                    $("#fechavisita").val("");
                    // Restablece el valor del select
                    $("#codigoempleadovisita").val("");
                    $("#codigocultivovisita").val("");
                },
                error: function() {
                    // Maneja el error en caso de que falle la inserción
                    alert("Error al insertar el visita");
                }
            });
        });
    });*/


//---------------  FACTURACION  -----------------------------   

    // Cargar valores de ID de Cultivo en el formulario select de la tabla FACTURACION
    $(document).ready(function() {
        $.ajax({
            url: "http://localhost:8080/cultivos/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                var select = $('#cultivofacturacion');
                
                for (var i = 0; i < respuesta.length; i++) {
                    var cultivos = respuesta[i];
                    select.append($('<option>', {
                        value: cultivos.codCult,
                        text: cultivos.codCult
                    }));
                }
            },
            error: function(xhr, status, error) {
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
    $(document).ready(function() {
        $.ajax({
            url: "http://localhost:8080/facturacion/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                var select = $('#codigoFacturacion');
                
                for (var i = 0; i < respuesta.length; i++) {
                    var valor = respuesta[i];
                    select.append($('<option>', {
                        value: valor.numFac,
                        text: valor.numFac
                    }));
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //llamar datos del FACTURACION por el ID en los inputs
    $('#llamarFacturacion').on('click', function() {
        var numFac = $('#codigoFacturacion').val();
    
        $.ajax({
            url: "http://localhost:8080/facturacion/" + numFac,
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
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
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //insertar FACTURACION
    $(document).ready(function() {
        // Cuando se haga clic en el botón "Enviar"
        $("#insertarFacturacion").click(function() {
            // Recoge los valores de los campos de entrada
            var nfactura = $("#numerofacturacion").val();
            var cuentac = $("#cuentaclientefacturacion").val();
            var formapago = $("#formapagofacturacion").val();
            var valor = $("#valorfacturacion").val();
            var fechapago = $("#fechapagofacturacion").val();
            var cultivo = $("#cultivofacturacion").val(); // Valor del select

            // Crea un objeto de cliente con los valores recogidos
            var factura = {
                "numFac": nfactura,
                "cuentClien": cuentac,
                "formaPag": formapago,
                "valor": valor,
                "fechPago": fechapago,
                "cultivo": {
                    "codCult": cultivo // La llave foránea
                }
            };

            // Realiza la solicitud AJAX para insertar el cliente
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/facturacion/insertar",// La URL de tu endpoint de inserción
                contentType: "application/json",
                data: JSON.stringify(factura),
                success: function(response) {
                    // Cliente insertado con éxito
                    alert("Factura insertado con éxito");
                    // Limpia los campos de entrada
                    $("#numerofacturacion").val("");
                    $("#cuentaclientefacturacion").val("");
                    $("#formapagofacturacion").val("");
                    $("#valorfacturacion").val("");
                    $("#fechapagofacturacion").val("");
                    // Restablece el valor del select
                    $("#cultivofacturacion").val("");
                },
                error: function() {
                    // Maneja el error en caso de que falle la inserción
                    alert("Error al insertar la factura");
                }
            });
        });
    });

    //Listar FACTURACION
    /*$(document).ready(function () {
        // Función para cargar y mostrar los clientes en la tabla
        function cargarFactura() {
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/facturacion/listar",
                success: function (data) {
                    $("#tablaFacturacion tbody").empty(); // Limpia la tabla antes de agregar datos
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
                    alert("Error al obtener las facturas");
                }
            });
        }

        // Cargar los clientes al cargar la página
        cargarFactura();

        // Cuando se haga clic en el botón "Listar"
        $("#listarFacturacion").click(function () {
            cargarFactura();
        });
    });*/

//---------------  DRON  ----------------------------- 

    // Cargar valores del ID de DRON en el formulario select
    $(document).ready(function() {
        $.ajax({
            url: "http://localhost:8080/dron/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                var select = $('#codigoDron');
                
                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.codDron,
                        text: administrador.codDron
                    }));
                }
            },
            error: function(xhr, status, error) {
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
$('#insertarDron').on('click', function() {
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
        success: function(response) {
            alert("Dron ingresado exitosamente.");
            console.log(response);
        },
        error: function(xhr, status, error) {
            alert("No se pudo ingresar el dron.");
            console.error(error);
        }
    });
});

    //llamar datos del DRON por el ID en los inputs
    $('#llamarDron').on('click', function() {
        var codDron = $('#codigoDron').val(); // Cambiado el ID a 'ndocumentoAdmin' para obtener el valor del número de documento.

        $.ajax({
            url: "http://localhost:8080/dron/" + codDron,
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
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
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //buscar por Numero documento ID
    $('#buscarDron').on('click', function() {
        var numDoc = $('#codigoDron').val(); 
    
        $.ajax({
            url: "http://localhost:8080/dron/" + codDron,
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                $('#tablaDron').html('');
                if (respuesta != null) {
                    $('#tablaDron').html('<thead><tr>' +
                        '<th>N° dron</th>' +
                        '<th>Serial</th>' +
                        '<th>Marca</th>' +
                        '</tr></thead><tbody>' +
                        '<tr>' +
                        '<td>' + respuesta.codDron + '</td>' +
                        '<td>' + respuesta.numSerial + '</td>' +
                        '<td>' + respuesta.marca + '</td>' +
                        '</tr></tbody>');
                } else {
                    $('#tablaDron').html('');
                    $('#error-message').html('No se encontró ningun dron con el número especificado.');
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
    
    //Listar DRON
    $('#listarDron').on('click', function() {
        $.ajax({
            url: "http://localhost:8080/dron/listar", 
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                $('#tablaDron').html('');
                if (respuesta.length > 0) {
                    var tablaDron = '<thead><tr>' +
                                    '<th>N° dron</th>' +
                                    '<th>Serial</th>' +
                                    '<th>Marca</th>' +
                                    '</tr></thead><tbody>';
                    
                    for (var i = 0; i < respuesta.length; i++) {
                        var dataDRON = respuesta[i];
                        tablaDron += '<tr>' +
                                     '<td>' + dataDRON.codDron + '</td>' +
                                     '<td>' + dataDRON.numSerial + '</td>' +
                                     '<td>' + dataDRON.marca + '</td>' +
                                     '</tr>';
                    }
    
                    tablaDron += '</tbody>';
                    $('#tablaDron').html(tablaDron);
                } else {
                    $('#tablaDron').html('');
                    $('#error-message').html('No se encontraron drones.');
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    // Actualizar DRON
    $('#actualizarDron').on('click', function() {
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
            success: function(response) {
                alert("Dron actualizado exitosamente.");
                console.log(response);
            },
            error: function(xhr) {
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

//---------------  DIAGNOSTICO  ----------------------------- 
    // Cargar valores de IDnumDoc de Administrador en el formulario select de la tabla CLIENTE
    $(document).ready(function() {
        $.ajax({
            url: "http://localhost:8080/dron/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                var select = $('#codigodrondiagnostico');
                
                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.codDron,
                        text: administrador.codDron
                    }));
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
    // Cargar valores de IDnumDoc de Administrador en el formulario select de la tabla CLIENTE
    $(document).ready(function() {
        $.ajax({
            url: "http://localhost:8080/cultivos/listar", // Ajusta la URL adecuadamente
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                var select = $('#codigocultivodiagnostico');
                
                for (var i = 0; i < respuesta.length; i++) {
                    var administrador = respuesta[i];
                    select.append($('<option>', {
                        value: administrador.codCult,
                        text: administrador.codCult
                    }));
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });

    //Limpiar campos CLIENTES
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

    
//---------------  MULTIMEDIA  ----------------------------- 
//---------------  TIENE  ----------------------------- 
//---------------  VIRUS  -----------------------------   
    //buscar por Numero documento ID
    $('#buscarVirus').on('click', function() {
        var codvirus = $('#codigoVirus').val();
        $.ajax({
            url: "http://localhost:8080/num_doc/" + codvirus,
            type: "GET",
            datatype: "JSON",
            success: function(respuesta) {
                console.log(respuesta);
                $('#tablaVirus').html('');
                if (respuesta != null) {
                    $('#tablaCultivo').html('<thead><tr>' +
                        '<th>codvirus</th>' +
                        '<th>nombrevirus</th>' +
                        '<tr>' +
                        '<td>' + respuesta.codvirus + '</td>' +
                        '<td>' + respuesta.nombrevirus + '</td>' +
                        '</tr></tbody>');
                } else {
                    $('#tablaCultivo').html('');
                    $('#error-message').html('No se encontró ningun virus con el Numero de codigo especificado.');
                }
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText); 
            }
        });
    });

        // Insertar 
    $('#insertarVirus').on('click', function() {
        var adminData = {
            codvirus: $('#codvirus').val(), 
            nombrevirus: $('#nombrevirus').val(),
        };
        
        $.ajax({
            url: "http://localhost:8080/insertar", 
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(adminData),
            success: function(response) {
                alert("Ingresado");
                console.log(response);
            },
            error: function(xhr, status, error) {
                alert("No se pudo ingresar");
                console.error(error);
            }
        });
    });

        // Eliminar 
    $('#eliminarVirus').on('click', function() {
        var codvirus = $('#codigoVirus').val(); 
        $.ajax({
            url: "http://localhost:8080/eliminar/" + codvirus, 
            type: "DELETE",
            dataType: "text",
            success: function(respuesta) {
                console.log(respuesta);
                if (respuesta === "Eliminado") {
                    alert("Eliminado");
                } 
            },
            error: function(xhr) {
                if (xhr.status === 404) {
                    alert("No se encontró el codigo " + codvirus); 
                }
            }
        });
    });
        
        // Actualizar 
    $('#actualizarVirus').on('click', function() {
        var codvirus = $('#codigoVirus').val(); 
        var adminData = {
            codvirus: $('#codvirus').val(), 
            nombrevirus: $('#nombrevirus').val(),
        };
        
        $.ajax({
            url: "http://localhost:8080/actualizar/" + codvirus, 
            type: "PUT",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(adminData),
            success: function(response) {
                alert("Actualizado");
                console.log(response);
            },
            error: function(xhr) {
                if (xhr.status === 404) {
                    alert("No se encontró el número de documento " + codvirus);
                }
                console.error(xhr.responseText);
            }
        });
    });

        //Limpiar campos
    $('#limpiarCultivo').on('click', function () {
        $('#codvirus').val('');
        $('#nombrevirus').val('');
    });
  

});  // fin
