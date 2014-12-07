var objInstanceId=window.localStorage["objInstanceId"];
if(objInstanceId==undefined) objInstanceId = 1;
    console.log("obj :"+objInstanceId);

//Servicio 7 -- Lista los objetos de una instancia de tipo objeto
$.ajax({
    type: 'GET',
          "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=7&objInstanceId=" + objInstanceId,
          "dataType": "json"
    }).done(function(response){
		$('.page-title').html(response.Name);
        loadAllRest(response);
}); 
function loadAllRest( responseJson){
		var template = $('#obj-getInstance').html(); 
		var compile = Handlebars.compile(template);
		var result = compile(responseJson);
	    $('.imgInstanceDetail').html(result);
}