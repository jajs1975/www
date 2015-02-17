var attrId=getAttrData('attrId', false);//window.localStorage["attrId"];
var urlComm = window.localStorage["urlComm"];

if (urlComm == undefined) {
    urlComm = "smartcitypois"; //para llamadas a servicios
    window.localStorage["urlComm"] = urlComm;
}
$.ajax({
    type: 'GET',
          "url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/attributes?objectId=" + attrId,
          "dataType": "json"
}).done(function(response){
    	
	$('.page-title').html("Sobre Mi");
	loadAllRest(response);
}); 
//Recarga la lista de jquery con las instancias creadas
function loadAllRest( responseJson){
    var template = $('#obj-getAttrInfo').html(); 
    var compileResult = Handlebars.compile(template);
    var result = compileResult(responseJson);
    $('#maincontent').html(result);
} 