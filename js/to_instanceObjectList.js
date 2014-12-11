var propId=window.localStorage["propId"];


//Servicio 9 -- Lista de instancias de tipo de objeto
$.ajax({
    type: 'GET',
          "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=9&propId=" + propId,
          "dataType": "json"
    }).done(function(response){
		console.log(response);
        loadAllRest(response);
});  
//Recarga la lista de jquery con las instancias creadas
function loadAllRest( responseJson){
    var template = $('#obj-list-instance').html(); 
    var compileResult = Handlebars.compile(template);
    var result = compileResult(responseJson);
    $("#maincontent").addClass("displayListview");
    $('#maincontent').html(result);
	$('#subtitle').html(responseJson.Name);
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
