/**
 * Description: crud de administrador
 */

const domino = "http://localhost:8080";
const administrador = 'administradores';


function limpiarAdmin(){
    $('#ndocumentoAdmin').val('');
    $('#tdocumentoAdmin').val('');
    $('#apellidoAdmin').val('');
    $('#correoAdmin').val('');
    $('#nombreAdmin').val('');
    $('#telefonoAdmin').val('');
}

$(document).ready(function(){
   //---------------  ADMINISTRADOR  -----------------------------
    //PRUEBA
    //llamar datos del Administrador por el ID en los inputs
    $('#buscarAdmin').on('click', function() {
        let numDoc = $('#codigo').val(); // Cambiado el ID a 'ndocumentoAdmin' para obtener el valor del número de documento.

        $.ajax({
            url: `${domino}/${administrador}/${numDoc}`,
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
    function buscarAlInsertar() {
        let numDoc = $('#ndocumentoAdmin').val();

        $.ajax({
            url: `${domino}/${administrador}/${numDoc}`,
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
    };
    $('#limpiarAdmin').on('click', function(){
        $('#ndocumentoAdmin').val('');
        $('#tdocumentoAdmin').val('');
        $('#apellidoAdmin').val('');
        $('#correoAdmin').val('');
        $('#nombreAdmin').val('');
        $('#telefonoAdmin').val('');
    })
        // Insertar administrador
    $('#insertarAdmin').on('click', function() {
        let adminData = {
            numDoc: $('#ndocumentoAdmin').val(),
            tipo_doc: $('#tdocumentoAdmin').val(),
            apellido: $('#apellidoAdmin').val(),
            email: $('#correoAdmin').val(),
            nombre: $('#nombreAdmin').val(),
            telefono: $('#telefonoAdmin').val()
        };

        $.ajax({
            url:"http://localhost:8080/administradores/insertar",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(adminData),
            success: function(response) {
                alert("Administrador ingresado exitosamente.");
                console.log(response);
                buscarAlInsertar()
                limpiarAdmin()
            },
            error: function(xhr, status, error) {
                alert("No se pudo ingresar el administrador.");
                console.error(error);
            }
        });
    });

    // Eliminar por número de documento
    $('#eliminarAdmin').on('click', function () {
        let numDoc = $('#codigo').val();
        $.ajax({
            url: `${domino}/${administrador}/eliminar/${numDoc}`,
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
        let numDoc = $('#codigo').val();
        let adminData = {
            numDoc: $('#ndocumentoAdmin').val(),
            tipo_doc: $('#tdocumentoAdmin').val(),
            apellido: $('#apellidoAdmin').val(),
            email: $('#correoAdmin').val(),
            nombre: $('#nombreAdmin').val(),
            telefono: $('#telefonoAdmin').val()
        };

        $.ajax({
            url: `${domino}/${administrador}/actualizar/${numDoc}`,
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
            url: `${domino}/${administrador}/listar`,
            type: "GET",
            dataType: "json",
            success: function(respuesta) {
                $('#tablaAdmin').html('');
                if (respuesta.length > 0) {
                    let tablaHTML = '<thead><tr>' +
                                    '<th>N° documento</th>' +
                                    '<th>Apellido</th>' +
                                    '<th>Nombre</th>' +
                                    '<th>Tipo documento</th>' +
                                    '<th>Correo</th>' +
                                    '<th>Telefono</th>' +
                                    '</tr></thead><tbody>';

                    for (let i = 0; i < respuesta.length; i++) {
                        let admin = respuesta[i];
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
        //PRUEBA
    // Cargar valores de numDoc de Administrador en el formulario select
$(document).ready(function() {
    $.ajax({
        url: `${domino}/${administrador}/listar`, // Ajusta la URL adecuadamente
        type: "GET",
        dataType: "json",
        success: function(respuesta) {
            let select = $('#codigo');

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
});