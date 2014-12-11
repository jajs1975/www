var propId=window.localStorage["propId"];
if(propId==undefined) propId = 1;
    console.log("obj :"+objInstanceId);

//Servicio 7 -- Lista los objetos de una instancia de tipo objeto
$.ajax({
    type: 'GET',
          "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=10&asociationId=" + propId,
          "dataType": "json"
    }).done(function(response){
			$('.page-title').html(response.Name);
			$('#subtitle').hide();
			$( '.ui-header .ui-title' ).css( "padding","0.7em 0" );
			
			$('#action-icon-right').removeClass('hide-action-icon-right');
			//document.getElementById('action-icon-right').href="#";
	
    loadAllRest(response);
}); 
function loadAllRest( responseJson){
	
		var template = $('#obj-getInstanceAttr').html(); 

		var compile = Handlebars.compile(template);
		var result = compile(responseJson);
	
	    $('.imgInstanceDetail').html(result);
	    

}