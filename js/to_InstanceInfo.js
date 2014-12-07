var objInstanceId=window.localStorage["objInstanceId"];
if(objInstanceId==undefined) objInstanceId = 1;
    console.log("obj :"+objInstanceId);

//Servicio 5 -- Lista los objetos de una instancia de tipo objeto
$.ajax({
    type: 'GET',
          "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=5&objInstanceId=" + objInstanceId,
          "dataType": "json"
    }).done(function(response){
        loadAllRest(response);
}); 
//Recarga la lista de jquery con las instancias creadas
function loadAllRest( responseJson){
    var template = $('#obj-getInstanceInfo').html(); 
    var compileResult = Handlebars.compile(template);
    var result = compileResult(responseJson);
    $('#maincontent').html(result);
} 