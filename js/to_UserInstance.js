var objectId=window.localStorage["userId"];
var Authorization=window.localStorage["Authorization"];
//console.log('toInstance');

var typeObjName=window.localStorage["commName"];


$.ajax({
    type: 'GET',
         
          "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/contacts?profileId="+objectId+"&authorizationToken=sjfaodf7832909" + Authorization,
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
    $("#to_UserInstances").on( "filterablefilter", function( event, ui ) {
        if ($(this).children(':visible').not('#no-results').length === 0) {
            $('#no-results').removeClass("ui-screen-hidden").fadeIn(1000);
        } else {
            $('#no-results').addClass("ui-screen-hidden").fadeIn(500);
        }
    });
    $('#to_UserInstances').listview().listview('refresh');
} 