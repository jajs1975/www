var objectId=window.localStorage["objectId"];
console.log('toInstance');
//	objectId="EM007-Publicacion";
var typeObjName=window.localStorage["commName"];

//Servicio 4 -- Lista de instancias de tipo de objeto
$.ajax({
    type: 'GET',
          /*"url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=4&objectId=" + objectId,*/
          "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/instancesOf?objectId=" + objectId,
          "dataType": "json"
    }).done(function(response){
        loadAllRest(response);
});  
//Recarga la lista de jquery con las instancias creadas
function loadAllRest( responseJson){
    var template = $('#obj-list-point').html(); 
    var compileResult = Handlebars.compile(template);
    var result = compileResult(responseJson);
    $("#maincontent").addClass("displayListview");
    $('#maincontent').html(result);
	$('.page-title').html(typeObjName);
    //here already exists #to_Instances
    $("#to_Instances").on( "filterablefilter", function( event, ui ) {
        if ($(this).children(':visible').not('#no-results').length === 0) {
            $('#no-results').removeClass("ui-screen-hidden").fadeIn(1000);
        } else {
            $('#no-results').addClass("ui-screen-hidden").fadeIn(500);
        }
    });
    $('#to_Instances').listview().listview('refresh');
} 

//Servicio --> Obtiene el título del tipo de objeto                           
/*$.ajax({
    type: 'GET',
    "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=6&objectId="+objectId,
    "dataType": "json"
}).done(function(response){
    $('.page-title').html(response.Name);
});*/   