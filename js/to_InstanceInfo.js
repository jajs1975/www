//Se Arma un arreglo con objetos que incluyen peticiones asíncronas y otro con las respuestas de los servicios
//En loadAllRest, evaluar cuando todas las peticiones del arreglo han terminado
//y sustituir el código generado en cada petición por la cadena que identifica el lugar en que va ese código en result
var objInstanceId = getAttrData('attrId', false);
var instanceTitle = getAttrData('attrName', false);
var urlComm = window.localStorage["urlComm"];
var Authorization = window.localStorage["Authorization"];
var userId = window.localStorage["userId"];
var resultFirstJson;
var contacts; 
var data = "";
var identifiers = "";
var objectType = getAttrData("attrType", false);
//Almacena los carrouselCode generados por las peticiones asincronas
var htmlCarrousels = [];

var codeStore = null;
//Almacena las peticiones asincronas para los carruseles
var innerCalls = [];
//Almacena los identificadores de los carruseles
var numCarrousels;
//Almacena el codigo HTML generado
var result;
//Almacena el codigo HTML generado para los contactos en comun
var commonsResult;
//Cuenta los contactos en comun entre dos usuarios
//Cuenta los contactos en comun entre dos usuarios
var commonsTotal;
//Cuenta los contactos en total de un usuario
var totalContacts;

if (urlComm == undefined) {
    urlComm = "smartcitypois"; //para llamadas a servicios
    window.localStorage["urlComm"] = urlComm;
}
//Genera instancias de objetos que almacenan el codigo HTML generado para cada carrusel
var carrouselCode = function(params) {
    var id;
    var objType;
    if (params.length == 2) {
        id = params[0];
        objType = params[1];
    }
    return {
        playerConstraintId : id,
        //codeGenerated : "",
        type : objType
    }
};
if (objectType && objectType.toLowerCase() == "profile") {
    instanceTitle = "Sobre mí";
    $('#subtitle').hide();
    $( '.ui-header .ui-title' ).css( "padding","0.7em 0" );
	//manda a llamar contactos en comun
	var deferedCommonsCall = getCommonContacts();
    innerCalls.push(deferedCommonsCall);
    //obtiene los contactos en total del usuario
    getTotalContacts();
} else {
    $('#subtitle').html("Información");
    $('#subtitle').show();
    $( '.ui-header .ui-title' ).css( "padding","2px 0" );
}
//Servicio -- Se obtiene la lista de propiedades de un objeto
$.ajax({
    type: 'GET',
          "url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/attributes?objectId=" + objInstanceId,
          "dataType": "json"
    }).done(function(response){
    	$('.page-title').html(instanceTitle);
		resultFirstJson = response;
        loadAllRest(resultFirstJson);
});
//Ejecuta la visualizacion de los carruseles que contenga la pagina
function putHtml() {
	 $(".owl-carousel").owlCarousel({
		autoPlay: false,
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		itemsTablet:	[768,3],
		itemsMobile:	[479,3],
		navigation : false,
		pagination : false/*,
		mouseDrag:false*/
	});
}
//Recarga la lista de jquery con las instancias creadas
function loadAllRest(responseJson) {

    var template = $('#obj-getInstanceInfo').html(); 
    var compileResult = Handlebars.compile(template);
    result = compileResult(responseJson);
    numCarrousels = identifiers.split(",");
    finishHtml();
    
    for (var j = 0; j < numCarrousels.length; j++) {
        var parameters = numCarrousels[j].split("|");
        codeStore = carrouselCode(parameters);
        htmlCarrousels.push(codeStore); //pasa un identificador a la funcion para generar un objeto
        var index = htmlCarrousels.length;
        
        var deferedCall = secondaryServiceCalls(objInstanceId, parameters[0], index - 1);
        innerCalls.push(deferedCall);
    }
    $.when( innerCalls ).then( putHtml);
    if (!objectType || objectType.toLowerCase() != "profile") {
        var father = document.getElementById("commonsProp").parentElement;
        father.removeChild(document.getElementById("commonsProp"));
        father.removeChild(document.getElementById("contactsProp"));
    } else if (objInstanceId == userId) {
        //si es un perfil, pero es el del usuario en sesion
        var father = document.getElementById("commonsProp").parentElement;
        father.removeChild(document.getElementById("commonsProp"));
    }
}

//Realiza peticiones para obtener los datos de los elementos en los carruseles de los atributos tipo objeto
var secondaryServiceCalls = function (objectId, propertyId, index) {
    var objectIndex = index;
    var innerCarrousel;
    var carrouselCodeFnc = $.ajax({
        type: 'GET',
        url: "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/associatedWith",
        data : {
                objectId : objectId,
                playerConstraintId : propertyId
            },
        dataType: "json",
		async:false
    }).done(function(response2) {
        innerCarrousel = htmlCarrousel(response2, index);
        if (innerCarrousel) {
            $('#' + htmlCarrousels[objectIndex].playerConstraintId).html(innerCarrousel);
        }
		
    });
    return carrouselCodeFnc;
};


//Asigna el codigo generado al elemento del DOM correspondiente
function finishHtml() {  //Si ya se atendieron todas las peticiones asincronas en innerCalls
    $('#maincontent').html(result);
    $("div a[href='to_instanceObjectList.html']").click(function(event) {
        event.stopPropagation();
    });
    $("div a[href='to_ContactLists.html']").click(function(event) {
        event.stopPropagation();
    });
    if (objectType && objectType.toLowerCase() == "profile") {
        $("#carruselCommon").html(commonsResult);
        if (commonsTotal) {
            var commonsText = commonsTotal + " contacto" + (commonsTotal != 1 ? "s" : "") + " en común";
            $("#commonTitle").html(commonsText);
        }
        if (totalContacts) {
            var totalText = totalContacts + " contacto" + (totalContacts != 1 ? "s" : "");
            $("#totalContacts").html(totalText);
        }
    }
}

//Genera el código HTML con el conjunto de elementos en cada carrusel
function htmlCarrousel(dataElements, codeIndex) {
    var data1 = "";
    for (var k = 0; k < dataElements.length; k++) {
        var coverSmall = "";
        var coverImage = "";
        var displaySmall = "";
        var displayImage = "";
		if(htmlCarrousels[codeIndex].type == 'Profile') {
			if (dataElements[k].CoverImage) {
				coverSmall = dataElements[k].CoverImage.Small;
				coverImage = dataElements[k].CoverImage.Image;
			}		
		} else {
			if (dataElements[k].DisplayImage) {
				coverSmall = dataElements[k].DisplayImage.Small;
				coverImage = dataElements[k].DisplayImage.Image;
			}
		}
        
        if (dataElements[k].DisplayImage) {
            displaySmall = dataElements[k].DisplayImage.Small;
            displayImage = dataElements[k].DisplayImage.Thumbnail;
        }
        data1 = data1 + '\n<div class="text-center owl-item">';
        data1 = data1 + '<a href="to_attrDetail.html" class="item link" onclick="setPath(\'to_InstanceInfo\');setAttrId(\'';
        data1 = data1 + dataElements[k].Id + '\', \'' + dataElements[k].Name + '\', \'' + displayImage + '\', \'' + coverImage + '\', \'' + htmlCarrousels[codeIndex].type;
        data1 = data1 + '\'); insertHtml(this.href);this.blur(); return false;">';
        data1 = data1 + '<img src="' + displayImage + '" class="img-circle thmbnlSize" ">';
        data1 = data1 + '<h5 class="text-center fontClrGrey">' + dataElements[k].Name + '</h5>';
        data1 = data1 + '</a>';
        data1 = data1 + '</div>\n';
    }
   
    return data1;
}


//Genera el HTML para el listado de propiedades, sin el código de carruseles
Handlebars.registerHelper('eachM', function(property) {
    data = "";
    for (var i = 0, j = property.length; i < j; i++) {
        if (property[i].Name== 'DisplayImage' || property[i].Name== 'CoverImage' || property[i].Name== 'Name') {
            continue;
        }
        if (property[i].Type == 'string' || property[i].Type == 'date' || property[i].Type == 'boolean' 
					|| property[i].Type == 'integer' || property[i].Type == 'float' || property[i].Type == 'url' || 
					property[i].Type == 'email') {
			var strPath = location.href.lastIndexOf("/");
			var urlRed = location.href.substring(0,strPath);
            data += '<div class="row" onclick="setPath(\'to_InstanceInfo\');setPropId(\'' + property[i].Id + '\', \'\',\'' + property[i].Type + '\'); insertHtml(\'' + urlRed + '/vp_display.html\');this.blur(); return false;">';
            data = data + '<div class="col-xs-9" >';
            data = data + '<span class="font-detail">' + property[i].Name +'</span>';
            data = data + '</div>';
            data = data + '<div class="col-xs-3">';
            data = data + '<div class="col-xs-offset-8">';
            data = data + '<a href="vp_display.html" onclick="setPropId(\'' + property[i].Id + '\',\'\',\'' + property[i].Type + '\'); insertHtml(this.href);this.blur(); return false;">';
            data = data + '<span class="glyphicon glyphicon-chevron-right chevronClr"></span>';
            data = data + '</a>';
            data = data + '</div>';
            data = data + '</div>';
            data = data + '<br>';
            data = data + '<hr class="allWidth">';
        } else {  //Para propiedades tipo Objeto
        
            if (identifiers.length > 0) {
                identifiers = identifiers + "," + property[i].Id + "|" + property[i].Type;
            } else {
                identifiers = property[i].Id + "|" + property[i].Type;  //se usa en el código de los carruseles
            }
            data += '<div class="row">';
            data = data + '<div class="col-xs-9">';
            data = data + '<span class="font-detail">' + property[i].Name + '</span>';
            data = data + '</div>';
            data = data + '<div class="col-xs-3">';
            data = data + '</div>';
            data = data + '<br>';
            data = data + '<br>';
            data = data + '<div class="row">';
            data = data + '<div class="col-xs-12 carousel-arrow">';
            data = data + '<div class="col-xs-10">';
            data = data + '<div class="carouselSpribo owl-carousel" id="' + property[i].Id + '">';
            data = data + '</div>';
            data = data + '</div>';
            data = data + '<div class="col-xs-2">';
            data = data + '<div class="col-xs-offset-6">';
            data = data + '<a href="to_instanceObjectList.html" onclick="setPath(\'to_InstanceInfo\');setPropId(\'' + property[i].Id + '\', \'' + property[i].Name + '\',\'' + property[i].Type + '\'); insertHtml(this.href);this.blur(); return false;">';
            data = data + '<img class="arrowSize" src="img/arrow.png"></img>';
            data = data + '</a>';
            data = data + '</div>';
            data = data + '</div>';
            data = data + '</div>';
            data = data + '<hr class="allWidth">';
            data = data + '</div>';
        }	
        data = data + '</div>';
    }
    return data;
});	

//Obtiene los datos de los contactos en comun entre dos usuarios
function getCommonContacts() {
	
	var commonResponse = $.ajax({
            type: 'GET',
            url: "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/commonContacts?spriboId=" + objInstanceId + "&authorizationToken=" + Authorization,
            dataType: "json",
            async: false
        }).done(function(response) {
            var codeStore1 = carrouselCode([objInstanceId, "Profile"]);
            htmlCarrousels.push(codeStore1);
            var thisIndex = htmlCarrousels.length - 1;
            contacts = response;
            commonsTotal = contacts.length;
            commonsResult = htmlCarrousel(contacts, thisIndex); 
            $("#carruselCommon").html(commonsResult);
	});
	return commonResponse;
}
//Obtiene el total de contactos de un usuario
function getTotalContacts() {
    $.ajax({
            type: 'GET',
            url: "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/contacts?spriboId=" + objInstanceId + "&authorizationToken=" + Authorization,
            dataType: "json",
            async: false
        }).done(function(response) {
            totalContacts = response.length;
	});
}

function setInsertHtmlPath(html) {
	var strPath = location.href.lastIndexOf("/");
	var urlRed = location.href.substring(0,strPath);
	insertHtml(urlRed + '/' + html);
}