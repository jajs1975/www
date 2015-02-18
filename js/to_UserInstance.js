var objectId=window.localStorage["userId"];
var Authorization=window.localStorage["Authorization"];
var typeObjName=window.localStorage["commName"];
var urlComm = window.localStorage["urlComm"];

if (urlComm == undefined) {
    urlComm = "smartcitypois"; //para llamadas a servicios
    window.localStorage["urlComm"] = urlComm;
}
$.ajax({
    type: 'GET',
    url: "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/contacts?spriboId="+objectId+"&authorizationToken=" + Authorization,
    dataType: "json"
}).done(function(response) {
    loadAllRest(response);
});
//Recarga la lista de jquery con las instancias creadas
function loadAllRest( responseJson) {
    var template = $('#obj-list-point').html();
    var compileResult = Handlebars.compile(template);
    var result = compileResult(responseJson);
    $("#maincontent").addClass("displayListview");
    $('#maincontent').html(result);
	$('.page-title').html(typeObjName);
	var nodo = $('#subtitle');
	if ($(nodo).is(":visible")) {
		$(nodo).hide();
		$( '.ui-header .ui-title' ).css( "padding","0.7em 0" );
	}
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
