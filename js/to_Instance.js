var objectId=window.localStorage["objectId"];
var typeObjName=window.localStorage["objectName"];

$.ajax({
    type: 'GET',
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

