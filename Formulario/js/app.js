
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
                url: "http://localhost:8080/clientes/agregar",// La URL de tu endpoint de inserción
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
                "num_doc": numEmpleado,
                "administrador1": {
                    "numDoc": administradorEmpleado // La llave foránea
                }
            };

            // Realiza la solicitud AJAX para insertar el cliente
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/empleados/agregar",// La URL de tu endpoint de inserción
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
    });
    */
   /*
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
    
            // Crea un objeto de empleado con los valores recogidos
            var empleado = {
                codEmp: codigoEmpleado,
                nombre: nombreEmpleado,
                apellido: apellidoEmpleado,
                tipo_doc: docEmpleado,
                num_doc: numEmpleado,
                administrador1: {
                    numDoc: administradorEmpleado // La llave foránea
                }
            };
    
            // Realiza la solicitud AJAX para insertar el empleado
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/empleados/agregar", // La URL de tu endpoint de inserción
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
    });
    */
    $(document).ready(function() {
        // Selector para el botón 'insertarEmpleados'
        $("#insertarEmpleados").click(function() {
          // Obtener los valores de los campos de entrada
          var codEmp = $("#codempleados").val();
          var nombre = $("#nombreempleados").val();
          var apellido = $("#apellidoempleados").val();
          var tipo_doc = $("#tdocumentoempleados").val();
          var num_doc = $("#ndocumentoempleados").val();
          var administrador1 = $("#administradorempleados").val();
      
          // Crear un objeto con los datos del empleado
          var empleadoData = {
            codEmp: codEmp,
            nombre: nombre,
            apellido: apellido,
            tipo_doc: tipo_doc,
            num_doc: num_doc,
            administrador1: {
              numDoc: administrador1
            }
          };
      
          // Realizar la solicitud AJAX para agregar el empleado
          $.ajax({
            type: "POST",
            url: "http://localhost:8080/empleados/agregar",  // La URL de la API donde se procesará la solicitud
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
      });
      
    

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
