var objectId=getAttrData('attrId', false);//window.localStorage["objInstanceId"];
var playerConstraintId=getInstData('objInstanceId', false); //window.localStorage["objInstanceId"];
var windowSubtitle=getInstData('objInstanceName', false);//window.localStorage["objInstanceName"];
var objectName=getAttrData('attrName', false);
var urlComm = window.localStorage["urlComm"];

if (urlComm == undefined) {
    urlComm = "smartcitypois"; //para llamadas a servicios
    window.localStorage["urlComm"] = urlComm;
}
$.ajax({
    type: 'GET',
          "url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/associatedWith?objectId="+objectId+"&playerConstraintId=" + playerConstraintId,
          "dataType": "json"
    }).done(function(response){
        loadAllRest(response);
});  

//Recarga la lista de jquery con las instancias creadas
function loadAllRest( responseJson){
    var template = $('#obj-list-instance').html(); 
    var compileResult = Handlebars.compile(template);
    var result = compileResult(responseJson);
    $("#maincontent").addClass("displayListview");
    $('#maincontent').html(result);
	$('.page-title').html(objectName);
	$('#subtitle').html(windowSubtitle);
	$('#subtitle').show();
    $( '.ui-header .ui-title' ).css( "padding","2px 0" );
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


Handlebars.registerHelper('getHandleType', function() {
	var type = getInstData('objInstanceType', false);
	return "'" + type + "'";
});