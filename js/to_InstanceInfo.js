//Se Arma un arreglo con objetos que incluyen peticiones asíncronas y otro con las respuestas de los servicios
//En loadAllRest, evaluar cuando todas las peticiones del arreglo han terminado
//y sustituir el código generado en cada petición por la cadena que identifica el lugar en que va ese código en result
var objInstanceId = window.localStorage["attrId"];
var instanceTitle = window.localStorage["attrName"];
var resultFirstJson;
var data = "";
var identifiers = "";

/*if (objInstanceId == undefined) {
    objInstanceId = 1;
}*/
//Almacena los carrouselCode generados por las peticiones asincronas
var htmlCarrousels = [];
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
        codeGenerated : "",
        type : objType
    }
};
var codeStore = null;
//Almacena las peticiones asincronas para los carruseles
var innerCalls = [];
//Almacena los identificadores de los carruseles
var numCarrousels;
//Almacena el codigo HTML generado
var result;
//Servicio -- Se obtiene la lista de propiedades de un objeto
setPath('to_attrDetail');
$.ajax({
    type: 'GET',
          "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/attributes?objectId=" + objInstanceId,
          "dataType": "json"
    }).done(function(response){
    	$('.page-title').html(instanceTitle);
		resultFirstJson = response;
        loadAllRest(resultFirstJson);
});

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
}

var secondaryServiceCalls = function (objectId, propertyId, index) {
    var objectIndex = index;
    var innerCarrousel;
    var carrouselCodeFnc = $.ajax({
        type: 'GET',
        url: "http://smartcitypois.spribo.qoslabs.com/spribo/api/associatedWith",
        data : {
                objectId : objectId,
                playerConstraintId : propertyId
            },
        dataType: "json",
		async:false
    }).done(function(response2) {
        innerCarrousel = htmlCarrousel(response2, index);
        htmlCarrousels[objectIndex].codeGenerated = innerCarrousel;
        if (innerCarrousel) {
            $('#' + htmlCarrousels[objectIndex].playerConstraintId).html(innerCarrousel);
        }
		
    });
    return carrouselCodeFnc;
};


function finishHtml() {  //Si ya se atendieron todas las peticiones asincronas en innerCalls
    $('#maincontent').html(result);
    $("div a[href='to_instanceObjectList.html']").click(function(event) {
        event.stopPropagation();
    });
}

//Genera el código HTML con el conjunto de elementos en cada carrusel
function htmlCarrousel(dataElements, codeIndex) {
    var data1 = "";
    for (var k = 0; k < dataElements.length; k++) {
        var coverSmall = "";
        var coverImage = "";
        var displaySmall = "";
        var displayImage = "";
        if (dataElements[k].CoverImage) {
            coverSmall = dataElements[k].CoverImage.Small;
            coverImage = dataElements[k].CoverImage.Image;
        }
        if (dataElements[k].DisplayImage) {
            displaySmall = dataElements[k].DisplayImage.Small;
            displayImage = dataElements[k].DisplayImage.Thumbnail;
        }
        data1 = data1 + '\n<div class="text-center owl-item">';
        data1 = data1 + '<a href="to_attrDetail.html" class="item link" onclick="setPath(\'to_InstanceInfo\');setPageNF(\'to_InstanceInfo\');setAttrId(\'';
        data1 = data1 + dataElements[k].Id + '\', \'' + dataElements[k].Name + '\', \'' + displayImage + '\', \'' + coverImage + '\', \'' + htmlCarrousels[codeIndex].type;
        data1 = data1 + '\'); insertHtml(this.href);this.blur(); return false;">';
        data1 = data1 + '<img src="' + displayImage + '" class="img-circle" style="width:60px; height:60px; ">';
        data1 = data1 + '<h5 style="color:#C2C2C2" class="text-center">' + dataElements[k].Name + '</h5>';
        data1 = data1 + '</a>';
        data1 = data1 + '</div>\n';
    }
   
    return data1;
}


//Genera el HTML para el listado de propiedades, sin el código de carruseles
Handlebars.registerHelper('eachM', function(property) {
    data = "";

    for (var i = 0, j = property.length; i < j; i++) {
    
        
        if (property[i].Type == 'string' || property[i].Type == 'date' || property[i].Type == 'boolean' 
					|| property[i].Type == 'integer' || property[i].Type == 'float' || property[i].Type == 'url' || 
					property[i].Type == 'email') {
            data += '<div class="row" onclick="setPath(\'to_InstanceInfo\');setPropId(\'' + objInstanceId + '\',\'' + property[i].Id + '\'); insertHtml(\'vp_display.html\');this.blur(); return false;">';
            data = data + '<div class="col-xs-9" >';
            data = data + '<span class="font-detail">' + property[i].Name +'</span>';
            data = data + '</div>';
            data = data + '<div class="col-xs-3">';
            data = data + '<div class="col-xs-offset-8">';
            data = data + '<a href="vp_display.html" onclick="setPath(\'to_InstanceInfo\');setPropId(\'' + objInstanceId + '\',\'' + property[i].Id + '\'); insertHtml(this.href);this.blur(); return false;">';
            data = data + '<span style="color:#F48341;" class="glyphicon glyphicon-chevron-right "></span>';
            data = data + '</a>';
            data = data + '</div>';
            data = data + '</div>';
            //data = data + '</div>';
            data = data + '<br>';
            data = data + '<hr width="100%">';
        } else {  //Para propiedades tipo Objeto
        
            if (identifiers.length > 0) {
                identifiers = identifiers + "," + property[i].Id + "|" + property[i].Type;
            } else {
                identifiers = property[i].Id + "|" + property[i].Type;  //se usa en el código de los carruseles
            }
            //data = data + '<div class="row">';
            //data = data + '<div class="col-xs-1">';					
            //data = data + '<div style="margin-left:10px;" class="events"></div>';
            //data = data + '</div>';
            data += '<div class="row">';
            data = data + '<div class="col-xs-9">';
            data = data + '<span class="font-detail">' + property[i].Name + '</span>';
            data = data + '</div>';
            data = data + '<div class="col-xs-3">';
            data = data + '</div>';
            data = data + '<br>';
            //data = data + '</div>';
            data = data + '<br>';
            data = data + '<div class="row">';
            data = data + '<div class="col-xs-12 carousel-arrow">';
            data = data + '<div class="col-xs-10">';
            data = data + '<div class="carouselSpribo owl-carousel" id="' + property[i].Id + '">';
            data = data + '</div>';
            data = data + '</div>';
            data = data + '<div class="col-xs-2">';
            data = data + '<div class="col-xs-offset-6">';
            data = data + '<a href="to_instanceObjectList.html" onclick="setPath(\'to_InstanceInfo\');setPropId(\'' + objInstanceId + '\', \'' + property[i].Id + '\', \'' + property[i].Name + '\', \'' + property[i].Type + '\'); insertHtml(this.href);this.blur(); return false;">';
            data = data + '<img style="height:26px; top:22px; width:35px" src="img/arrow.png"></img>';
            data = data + '</a>';
            data = data + '</div>';
            data = data + '</div>';
            data = data + '</div>';
            data = data + '<hr width="100%">';
            data = data + '</div>';
        }	
        data = data + '</div>';
    }
    return data;
});	

