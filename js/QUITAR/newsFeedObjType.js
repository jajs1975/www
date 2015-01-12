	var objInstIdNFObj=window.localStorage["objInstIdNFObj"];
	var objInstNameNFObj=window.localStorage["objInstNameNFObj"];
	var objInstImgNFObj=window.localStorage["objInstImgNFObj"];
		
	$.ajax({
		type: 'GET',
			  "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/storiesFor?objectId=" + objInstIdNFObj+ "&total=100",
			  "dataType": "json"
		}).done(function(response){
			loadAllRest(response);
	}); 

	function loadAllRest(responseJson){
		$('.page-title').html(objInstNameNFObj);
		var template = $('#newsFeedCommunityOT').html(); 
		var compileResult = Handlebars.compile(template);
		var result = compileResult(responseJson);
		$('#maincontent').html(result);
	} 
		 
		 
	Handlebars.registerHelper('eachNeewsFeedOT', function(property) {
		var data = "";
		data += '<div class="row">';
		data += '<div class="col-xs-12 text-center">';
		data += '<p>';
		data += '<img class="img-thumbnail" src="' + objInstImgNFObj + '">';
		data += '</p><p></p>';
		data += '</div>';
		data += '</div>';
		
		data += '<br>';
		data += '<br>';
		for(var i=0, j=property.length; i<j; i++) {
			data += '<div class="row">';
			var img = "";
			if(property[i].Actor.DisplayImage) img = property[i].Actor.DisplayImage.Thumbnail;
			/*Imagen de usuario*/
			data += '<div class="col-xs-3 text-right" style="padding-right: 3px;">';
			data += '<div class="row">';
			data += '<div class="col-xs-9 text-right col-xs-offset-3" style="padding-right: 1px;">';
			data += '<img style="height:60px; width:60px; background-color:#FFFFFF; border:0px;box-shadow : 0px 0px 10px rgba(0, 0, 0, 0.2);" class="img-responsive img-circle img-responsive-rounded" src="' + img + '" />';
			data += '</div>';
			data += '</div>';
			data += '</div>';
			
			/*Datos del objeto*/
			/*Cabecera, lado derecho*/
			data += '<div class="col-xs-8 text-left" style="padding-top:10px;">';
			
			data += '<span class="objectName">' + property[i].Actor.Name + '</span>';
			data += '<span style="color:#ACACAB"> ' + property[i].Action + ' </span>';
			
			if(property[i].Object.Name) {
				data += '<span class="objectName">';
				data += property[i].Object.Name;
				data += ' </span>';
			} else if(property[i].Object.Type == "Comment" && property[i].IndirectObject.Name) {
				data += '<span class="objectName">';
				data += property[i].IndirectObject.Name;
				data += ' </span>';
			}
			data += '</div>';
			data += '</div>';
			
			/*Cuerpo del objeto*/
			data += '<div class="row" style="margin-top:-25px;">';
			//data += '<div  class="col-xs-3 text-left" style="padding-right: 1px;">';
			//data += '</div>';
			
			data += '<div class="col-xs-8 text-left">';
			if((property[i].Type == "InstancePageCreatedActivity" || property[i].Type == "NewInstancePictureActivity") && property[i].Object.DisplayImage) {
				data += '<div class="row">';
				data += '<div class="col-xs-12 text-left">';
				data += '<a href="#"><img style=" background-color:#FFFFFF; border:0px;max-width:250px" src="' + property[i].Object.DisplayImage.Image + '" /></a>'; /*homePost_new.html*/
				data += '</div>';
				data += '</div>';
				
				/*if(property[i].Object.Text) {
					data += '<div class="row">';
					data += '<div class="col-xs-12 text-justify">';
					data += '<span style="color:#878787;">';
					data += property[i].Object.Text;
					data += '</span>';
					data += '</div>';
					data += '</div>';
				}*/
			} else if(property[i].Object.Type == "Comment" && property[i].Object.Content){
				data += '<div class="row">';
				data += '<div class="col-xs-12 text-justify">';
				data += '<span style="color:#878787">';
				data += property[i].Object.Content;
				data += '</span>';
				data += '</div>';
				data += '</div>';
			} 
			if(property[i].Date) {
				//data += '<div class="row">';
				data += '<div class="col-xs-12 text-right" style="padding-top:5px;">';
				data += '<span class="text-muted" style="position:relative; font-size:12px;"><img style="background-color:#FFFFFF; border:0px;max-width:20px;max-height:20px;" src="img/time_48dp.png" />' + property[i].Date + '</span>';
				data += '</div>';
				//data += '</div>';
				/*data += '<div class="col-xs-12 text-right" style="padding-top:5px;">';
				data += '<span class="text-muted" style="position:relative; font-size:12px;"><img style=" background-color:#FFFFFF; border:0px;max-width:20px;max-height:20px" src="img/time_48dp.png" />' + property[i].Date + '</span>';
				data += '</div>';*/
			}
			data += '</div>';
			//data += '</div>';
			
			data += '</div>';
			data += '<br>';
			data += '<hr width="100%">'
			data += '<br>';
		}
		return data;
});	
