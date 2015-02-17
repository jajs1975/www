alert('Cargando newsFeedCommunity.js');
var urlComm = window.localStorage["urlComm"];

if (urlComm == undefined) {
    urlComm = "smartcitypois"; //para llamadas a servicios
    window.localStorage["urlComm"] = urlComm;
}

$.ajax({
	type: 'GET',
		  "url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/stories?total=100",
		  "dataType": "json"
	}).done(function(response){
		loadAllRest(response);
}); 

function loadAllRest(responseJson){
	var template = $('#newsFeedCommunityTem').html(); 
	var compileResult = Handlebars.compile(template);
	var result = compileResult(responseJson);
	$('#maincontent').html(result);
} 
		 
Handlebars.registerHelper('eachNeewsFeed', function(property) {
	var data = "";
	data += '<br>';
	data += '<br>';
	for(var i=0, j=property.length; i<j; i++) {
		var displayThumbnailActor = "";
		var coverImageActor = "";
		var coverImageObject = "";
		var displayImageObject = "";
		if (property[i].Actor.DisplayImage) {
			displayThumbnailActor = property[i].Actor.DisplayImage.Thumbnail;
		}
		if (property[i].Actor.CoverImage) {
			coverImageActor = property[i].Actor.CoverImage.Image;
		}
		data += '<div class="row"><!--imagen del frente-->';
			
		/*Imagen de usuario*/
		data += '<div class="col-xs-3 text-right" style="padding-right: 3px;">';
		data += '<div class="row">';
		data += '<div class="col-xs-9 text-right col-xs-offset-3" style="padding-right: 1px;">';

		data += '<a href=\'';
		data += 'to_attrDetail.html';
		data += '\' onclick="setPath(\'home\');setAttrId(\''+ property[i].Actor.Id +'\',\''+ property[i].Actor.Name +'\',\''+ displayThumbnailActor +'\',\''+coverImageActor +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';
		data += '<img style="height:60px; width:60px; background-color:#FFFFFF; border:0px;box-shadow : 0px 0px 10px rgba(0, 0, 0, 0.2);" class="img-responsive img-circle img-responsive-rounded" src="' + displayThumbnailActor + '" />';
		data += '</a>';
		
		data += '</div>';
		data += '</div>';
		data += '</div>';
		
		/*Datos del objeto*/
		/*Cabecera, lado derecho*/
		
		data += '<div class="col-xs-8 text-left" style="padding-top:10px;">';
		
		data += '<a class=\'objectName\' href=\'';
		data += 'to_attrDetail.html';
		data += '\' onclick="setPath(\'home\');setAttrId(\''+ property[i].Actor.Id +'\',\''+ property[i].Actor.Name +'\',\''+ displayThumbnailActor +'\',\''+coverImageActor +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';			
		data += '<span class="objectName">' + property[i].Actor.Name + '</span>';
		data += '</a>';			
		
		data += '<span style="color:#ACACAB"> ' + property[i].Action + ' </span>';
			
		if(property[i].Type != 'UpdateAvatarActivity' && property[i].Object.Name) {
			data += '<span class="objectName">';
			if(property[i].Object.Type == 'Profile') {
				coverImageObject = "";
				displayImageObject = "";
				if(property[i].Object.CoverImage) coverImageObject = property[i].Object.CoverImage.Image;
				if(property[i].Object.DisplayImage) displayImageObject = property[i].Object.DisplayImage.Thumbnail;
				data += '<a class="objectName" href=\'';
				data += 'to_attrDetail.html';
				data += '\' onclick="setPath(\'home\');setAttrId(\''+ property[i].Object.Id +'\',\''+ property[i].Object.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject  +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';
				data += property[i].Object.Name;
				data += '</a>';
			} else if (property[i].Object.Type == 'Community') {
				data += property[i].Object.Name;
			} else {
				coverImageObject = "";
				displayImageObject = "";
				if(property[i].Object.DisplayImage) coverImageObject = property[i].Object.DisplayImage.Image;
				if(property[i].Object.DisplayImage) displayImageObject = property[i].Object.DisplayImage.Thumbnail;
				data += '<a class="objectName" href=\'';
				data += 'to_attrDetail.html';
				data += '\' onclick="setPath(\'home\');setAttrId(\''+ property[i].Object.Id +'\',\''+ property[i].Object.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'\');insertHtml(this.href); this.blur(); return false;">';
				data += property[i].Object.Name;
				data += '</a>';
			}
			data += ' </span>';
		} else if(property[i].Object.Type == "Comment") {
			if(property[i].IndirectObject) {
				data += '<span class="objectName">';
				if(property[i].IndirectObject.Type == 'Profile') {
					coverImageObject = "";
					displayImageObject = "";
					if(property[i].IndirectObject.CoverImage) coverImageObject = property[i].IndirectObject.CoverImage.Image;
					if(property[i].IndirectObject.DisplayImage) displayImageObject = property[i].IndirectObject.DisplayImage.Thumbnail;
					data += '<a class="objectName" href=\'';
					data += 'to_attrDetail.html';
					data += '\' onclick="setPath(\'home\');setAttrId(\''+ property[i].IndirectObject.Id +'\',\''+ property[i].IndirectObject.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';
					data += property[i].IndirectObject.Name;
					data += '</a>';
				} else if (property[i].IndirectObject.Type == 'Community') {
					data += property[i].IndirectObject.Name;
				} else {
					coverImageObject = "";
					displayImageObject = "";
					if(property[i].IndirectObject.DisplayImage) coverImageObject = property[i].IndirectObject.DisplayImage.Image;
					if(property[i].IndirectObject.DisplayImage) displayImageObject = property[i].IndirectObject.DisplayImage.Thumbnail;
					data += '<a class="objectName" href=\'';
					data += 'to_attrDetail.html';
					data += '\' onclick="setPath(\'home\');setAttrId(\''+ property[i].IndirectObject.Id +'\',\''+ property[i].IndirectObject.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'\');insertHtml(this.href); this.blur(); return false;">';
					data += property[i].IndirectObject.Name;
					data += '</a>';
				}
				data += ' </span>';
			}
		}
			
		data += '</div>';
		data += '</div>';
		
		/*Cuerpo del objeto*/
		var styleObj = 'style=""';
		var styleObj1 = 'style="margin-top:-25px;"';
		if(property[i].Object.Type == 'Profile' && property[i].Object.DisplayImage && property[i].Type != "UpdateAvatarActivity") {
			data += '<div class="row" style="display:inline">';
			data += '<div class="col-xs-3">';
			data += '<div class="col-xs-9 text-right col-xs-offset-3" >'; 
			data += '</div>';
			data += '</div>';
			data += '<div class="col-xs-8" style="margin-left:-40px;">';
			data += '<img style="background-color:transparent; border:0px;width:40px" src="img/icon_connection.png">';
			data += '</div>';
			data += '</div>';
			styleObj = 'style="margin-top:-25px; display:inline"';
			var styleObj1 = 'style="margin-top:-25px; display:inline"';
		}
		
		data += '<div class="row" ' + styleObj1 + '>';
		data += '<div class="col-xs-3">';
		data += '</div>';
		data += '<div class="col-xs-8 text-left" ' + styleObj + '>';
		if(property[i].Object.Type == 'Profile' && property[i].Object.DisplayImage) {
			
			data += '<div class="row">';
			if(property[i].Type != "UpdateAvatarActivity") {
				coverImageObject = "";
				displayImageObject = property[i].Object.DisplayImage.Thumbnail;
				if(property[i].Object.CoverImage) coverImageObject = property[i].Object.CoverImage.Image;
				data += '<div class="col-xs-3 text-left" style="padding-left: 1px;">';
				
				data += '<a href=\'';
				data += 'to_attrDetail.html';
				data += '\' onclick="setPath(\'home\');setAttrId(\''+ property[i].Object.Id +'\',\''+ property[i].Object.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';
				data += '<img style="width:60px; height:60px; background-color:transparent; border:0px;" class="img-responsive img-circle img-responsive-rounded" src="' + displayImageObject + '">';
				data += '</a>';
				
				data += '</div>';
				data += '<div class="col-xs-9 text-right">';
				data += '</div>';
			} else {
				coverImageObject = "";
				displayImageObject = property[i].Object.DisplayImage.Image;
				if(property[i].Object.CoverImage) coverImageObject = property[i].Object.CoverImage.Image;
				data += '<div class="col-xs-12 text-left">';
				
				data += '<a href=\'';
				data += 'to_attrDetail.html';
				data += '\' onclick="setPath(\'home\');setAttrId(\''+ property[i].Object.Id +'\',\''+ property[i].Object.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';					
				data += '<img style=" background-color:#FFFFFF; border:0px;max-width:250px" src="' + displayImageObject + '" />'; 
				data += '</a>';
				
				data += '</div>';
			}
			data += '</div>';
		} else if((property[i].Object.Type != 'Profile' && property[i].Object.Type != 'Community') && property[i].Type != 'InstancePageModifiedActivity' && property[i].Object.DisplayImage) {
			coverImageObject = "";
			if(property[i].Object.DisplayImage) coverImageObject = property[i].Object.DisplayImage.Image;
			displayImageObject = property[i].Object.DisplayImage.Image;
			data += '<div class="row">';
			data += '<div class="col-xs-12 text-left">';
			
			data += '<a class="objectName" href=\'';
			data += 'to_attrDetail.html';
			data += '\' onclick="setPath(\'home\');setAttrId(\''+ property[i].Object.Id +'\',\''+ property[i].Object.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'\');insertHtml(this.href); this.blur(); return false;">';
			data += '<img style=" background-color:#FFFFFF; border:0px;max-width:250px" src="' + displayImageObject + '" />';
					data += '</a>';				
			data += '</div>';
			data += '</div>';
			
			/*if(property[i].Object.Content) {
				data += '<div class="row">';
				data += '<div class="col-xs-12 text-justify">';
				data += '<span style="color:#878787;">';
				data += property[i].Object.Content;
				data += '</span>';
				data += '</div>';
				data += '</div>';
			}*/
			
			/*data += '<div class="row">';
			data += '<div class="col-xs-12 text-right">';
			data += '<span class="ui-icon-clock ui-btn-icon-left text-muted" style="position:relative; font-size:12px;">' + property[i].Object.Date + '</span>';
			data += '</div>';
			data += '</div>';*/
			
		} else if(property[i].Object.Type == "Comment" && property[i].Object.Content){
			data += '<div class="row">';
			data += '<div class="col-xs-12 text-justify">';
			data += '<span style="color:#878787">';
			data += property[i].Object.Content;
			data += '</span>';
			data += '</div>';
			data += '</div>';
			
			/*data += '<div class="row">';
			data += '<div class="col-xs-12 text-right">';
			data += '<span class="ui-icon-clock ui-btn-icon-left text-muted" style="position:relative; font-size:12px;">' + property[i].Object.Date + '</span>';
			data += '</div>';
			data += '</div>';*/
			
			//data += '</div>';
		} /*else if(property[i].Object.Date) {
			data += '<div class="col-xs-12 text-right">';
			data += '<span class="ui-icon-clock ui-btn-icon-left text-muted" style="position:relative; font-size:12px;">' + property[i].Object.Date + '</span>';
			data += '</div>';
		}*/
		if(property[i].Date) {
			data += '<div class="col-xs-12 text-right" style="padding-top:5px;">';
			data += '<span class="text-muted" style="position:relative; font-size:12px;"><img style=" background-color:#FFFFFF; border:0px;max-width:20px;max-height:20px" src="img/time_48dp.png" />' + property[i].Date + '</span>';
			data += '</div>';
		}
		data += '</div>';
		
		data += '</div>';
		data += '<br>';
		data += '<hr width="100%">'
		data += '<br>';
	
	}
	
	/*if(property.length == 20) {
		data += '<div class="row" id="morePost" style="display:none"></div>';
		data += '<div class="row">';
		data += '<div class="col-xs-12">';
		data += '<p class="text-center">';
		data += '<a href="#" id="seeMore" onclick="javascript:showElement();"><span style="color:#878787">Ver más ...</span></a>';
		data += '</p>';
		data += '<p class="text-center">';
		data += '<img id="gifLoad" style="width:20px;height:20px;display:none" src="img/cargando_logo.gif" />';
		data += '</p>';
		data += '</div>';
		data += '</div>';
	}*/
	return data;
});	
