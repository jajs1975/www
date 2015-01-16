//Perfil del que se obtienen los contactos
var objInstanceId=getAttrData('attrId', false);//window.localStorage["objInstanceId"];
//Token del usuario en sesion
var Authorization=window.localStorage["Authorization"];
//Tipo de contactos a mostrar al cargar la info
var listType = window.localStorage["listType"];
//Almacena el codigo html generado
var result=""; 

$('.page-title').html("Contactos");
//Peticion para obtener todos los contactos
var getContacts= $.ajax({
    type: 'GET',
          "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/contacts?profileId="+objInstanceId+"&authorizationToken=" + Authorization,//sjfaodf7832909
          "dataType": "json"
    }).done(function(response) {
        loadAllRest(response);
});  
//Recarga la lista de jquery con los datos obtenidos
function loadAllRest( responseJson) {
    var template = $('#obj-list-point1').html(); 
    var compileResult = Handlebars.compile(template);
    result += compileResult(responseJson);
}
//Peticion para obtener los contactos en comun
var getCommon = $.ajax({
    type: 'GET',
          "url": "http://smartcitypois.spribo.qoslabs.com//spribo/api/commonContacts?profileId="+objInstanceId+"&authorizationToken="+Authorization,
          "dataType": "json"
    }).done(function(response){
        loadAllRest2(response);
});
//Recarga la segunda lista de jquery con los datos obtenidos
function loadAllRest2( responseJson) {
    var template = $('#obj-list-point2').html(); 
    var compileResult = Handlebars.compile(template);
    result += compileResult(responseJson);
}
//cuando se hayan ejecutado las funciones indicadas se hace:
$.when(getContacts, getCommon).then( function() {
	$("#maincontent").addClass("displayListview");
	$('#maincontent').html(result);
    //para la primer lista
	$("#MyContactsDiv").on( "filterablefilter", function( event, ui ) {
        if ($(this).children(':visible').not('#no-results').length === 0) {
            $('#no-results').removeClass("ui-screen-hidden").fadeIn(1000);
        } else {
            $('#no-results').addClass("ui-screen-hidden").fadeIn(500);
        }
    });
    $('#MyContactsDiv').listview().listview('refresh');
    //para la segunda lista
	$("#CommonContactsDiv").on( "filterablefilter", function( event, ui ) {
			if ($(this).children(':visible').not('#no-results2').length === 0) {
				$('#no-results2').removeClass("ui-screen-hidden").fadeIn(1000);
			} else {
				$('#no-results2').addClass("ui-screen-hidden").fadeIn(500);
			}
		});
	$('#CommonContactsDiv').listview().listview('refresh');
    
	if (listType == 'Common') {
        $('#allContactsContainer').hide();
        $('#AllContacts').addClass("ctrlSegDActive");
		$('#CommonContacts').addClass("ctrlSegActive");
	}

    if (listType == 'All') {
        $('#commonContactsContainer').hide();
		$('#CommonContacts').addClass("ctrlSegDActive");
        $('#AllContacts').addClass("ctrlSegActive");
    }
    
    var nodo = $('#subtitle');
	if ($(nodo).is(":visible")){
		$(nodo).hide();
		$( '.ui-header .ui-title' ).css( "padding","0.7em 0" );
	}	
	 $('#AllContacts').click(function(event) {
        event.stopPropagation();
        if (!$('#AllContacts').hasClass("ctrlSegActive")) {
            $('#AllContacts').removeClass("ctrlSegDActive");
            $('#AllContacts').addClass("ctrlSegActive");
            $('#CommonContacts').removeClass("ctrlSegActive");
            $('#CommonContacts').addClass("ctrlSegDActive");
            $('#commonContactsContainer').hide();
            $('#allContactsContainer').show();
/*
        $('#AllContacts').addClass("ctrlSegDActive");
            $('#AllContacts').removeClass("ctrlSegActive");
            $('#CommonContacts').addClass("ctrlSegActive");
            $('#CommonContacts').removeClass("ctrlSegDActive");
            $('#commonContactsContainer').show();
            $('#allContactsContainer').hide();
        } else {*/
         }
    });
	  $('#CommonContacts').click(function(event) {
        event.stopPropagation();
         if (!$('#CommonContacts').hasClass("ctrlSegActive")) {
         /*
            $('#AllContacts').removeClass("ctrlSegDActive");
            $('#AllContacts').addClass("ctrlSegActive");
            $('#CommonContacts').removeClass("ctrlSegActive");
            $('#CommonContacts').addClass("ctrlSegDActive");
            $('#commonContactsContainer').hide();
            $('#allContactsContainer').show();
         } else {*/
            $('#AllContacts').addClass("ctrlSegDActive");
            $('#AllContacts').removeClass("ctrlSegActive");
            $('#CommonContacts').addClass("ctrlSegActive");
            $('#CommonContacts').removeClass("ctrlSegDActive");
            $('#commonContactsContainer').show();
            $('#allContactsContainer').hide();
         }
    });
});