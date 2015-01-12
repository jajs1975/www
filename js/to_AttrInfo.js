var attrId=window.localStorage["attrId"];
//if(attrId==undefined) attrId = 1;
//    console.log("obj :"+attrId);
   
//var instanceTitle=window.localStorage["instanceTitle"];
//Servicio 5 -- Lista los objetos de una instancia de tipo objeto
setPath('to_attrDetail');
$.ajax({
    type: 'GET',
          "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/attributes?objectId=" + attrId,
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