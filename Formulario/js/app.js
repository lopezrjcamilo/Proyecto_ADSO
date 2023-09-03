
$(document).ready(function() {

//---------------  ADMINISTRADOR  -----------------------------
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
        $('#eliminarAdmin').on('click', function() {
            var numDoc = $('#codigo').val(); 
            $.ajax({
                url: "http://localhost:8080/administradores/eliminar/" + numDoc, 
                type: "DELETE",
                dataType: "text",
                success: function(response) {
                    console.log("Respuesta del servidor:", response);
                    if (response.trim() === "Eliminado") {
                    alert("Administrador eliminado exitosamente.");
                    } else {
                        alert("Ocurrió un error al intentar eliminar el administrador." + numDoc);
                    }
                },
                error: function(xhr) {
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

        //Limpiar campos
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
    //buscar codigo
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
  

  
//  -------------------  CLIENTE  -----------------------------
// Insertar cliente
$('#insertarCliente').on('click', function() {
    var nitCliente = $('#nitcliente').val();
    var nombreCliente = $('#nombrecliente').val();
    var correoCliente = $('#correocliente').val();
    var telefonoCliente = $('#telefonocliente').val();
    var administradorCliente = $('#administradorcliente').val(); // NumDoc del administrador

    var clienteData = {
        idNit: nitCliente,
        nombre: nombreCliente,
        correo: correoCliente,
        telefono: telefonoCliente,
        administrador: {
            numDoc: administradorCliente
        }
    };

    $.ajax({
        url: "http://localhost:8080/clientes", // Ajusta la URL adecuadamente
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(clienteData),
        success: function(respuesta) {
            console.log(respuesta);
            alert("Cliente insertado correctamente");
        },
        error: function(xhr) {
            console.error(xhr.responseText);
            alert("No se pudo insertar el cliente");
        }
    });
});

// Listar clientes
$('#listarCliente').on('click', function() {
    $.ajax({
        url: "http://localhost:8080/clientes/listar", 
        type: "GET",
        dataType: "json",
        success: function(respuesta) {
            $('#tablaCliente').html('');
            if (respuesta.length > 0) {
                var tablaHTML = '<thead><tr>' +
                                '<th>Nit</th>' +
                                '<th>Nombre Cliente</th>' +
                                '<th>Correo</th>' +
                                '<th>Telefono</th>' +
                                '<th>Administrador</th>' +
                                '</tr></thead><tbody>';
                
                for (var i = 0; i < respuesta.length; i++) {
                    var cliente = respuesta[i];
                    tablaHTML += '<tr>' +
                                 '<td>' + cliente.idNit + '</td>' +
                                 '<td>' + cliente.nombre + '</td>' +
                                 '<td>' + cliente.correo + '</td>' +
                                 '<td>' + cliente.telefono + '</td>' +
                                 '<td>' + cliente.administrador.numDoc + '</td>' +
                                 '</tr>';
                }

                tablaHTML += '</tbody>';
                $('#tablaCliente').html(tablaHTML);
            } else {
                $('#tablaCliente').html('');
                $('#error-message').html('No se encontraron clientes.');
            }
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
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




});  // fin
