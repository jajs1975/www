var attrId=window.localStorage["attrId"];
if(attrId==undefined) attrId = 1;
    console.log("obj :"+objInstanceId);

//Servicio 7 -- Lista los objetos de una instancia de tipo objeto
$.ajax({
    type: 'GET',
          "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=10&asociationId=" + attrId,
          "dataType": "json"
    }).done(function(response){
			$('.page-title').html(response.Name);
			$('#subtitle').hide();
			$( '.ui-header .ui-title' ).css( "padding","0.7em 0" );
			
			$('#action-icon-right').removeClass('hide-action-icon-right');
			if(response.Type == 'Profile') {
			   document.getElementById('action-icon-right').href = "to_AttrInfo.html";
			}
			//document.getElementById('action-icon-right').href="#";
	
    loadAllRest(response);
}); 
function loadAllRest( responseJson){
	
		var template = $('#obj-getInstanceAttr').html(); 

		var compile = Handlebars.compile(template);
		var result = compile(responseJson);
	
	    $('.imgInstanceDetail').html(result);
	    

}