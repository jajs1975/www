var propId=window.localStorage["propId"];
//var propName=window.localStorage["propName"];
if(propId==undefined) propId = 1;
    console.log("obj :"+propId);

//Servicio 8 -- Lista la propiedad de una instancia de tipo objeto
$.ajax({
    type: 'GET',
          "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=8&propId=" + propId,
          "dataType": "json"
    }).done(function(response){
	    console.log("propId :"+response.value);
		$('#propValue').html(response.Value);
        $('#subtitle').html(response.Name);
}); 
