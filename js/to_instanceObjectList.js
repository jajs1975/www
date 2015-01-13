var objectId=window.localStorage["objInstanceId"];
var playerConstraintId=window.localStorage["propId"];
var windowSubtitle = getAttrData('attrName', false);//window.localStorage["attrName"];
var attrType=getAttrData('attrType', false);//window.localStorage["attrType"]; 

//Servicio 9 -- Lista de instancias de tipo de objeto asignadas a una propiedad
$.ajax({
    type: 'GET',
          "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/associatedWith?objectId="+objectId+"&playerConstraintId=" + playerConstraintId,
          "dataType": "json"
    }).done(function(response){
		//console.log(response);
        loadAllRest(response);
});  
//Recarga la lista de jquery con las instancias creadas
function loadAllRest( responseJson){
    var template = $('#obj-list-instance').html(); 
    var compileResult = Handlebars.compile(template);
    var result = compileResult(responseJson);
    $("#maincontent").addClass("displayListview");
    $('#maincontent').html(result);
	$('#subtitle').html(windowSubtitle);
    //here already exists #to_instanceObjectList
    
    $("#to_instanceObjectList").on( "filterablefilter", function( event, ui ) {
        if ($(this).children(':visible').not('#no-results').length === 0) {
            $('#no-results').removeClass("ui-screen-hidden").fadeIn(1000);
        } else {
            $('#no-results').addClass("ui-screen-hidden").fadeIn(500);
        }
    });
    $('#to_instanceObjectList').listview().listview('refresh');
    
} 
