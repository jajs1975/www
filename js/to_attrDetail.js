var attrId=getAttrData("attrId", false);
var attrName=getAttrData("attrName", false);
var attrDisplayImage=getAttrData("attrDisplayImage", false);
var attrCoverImage=getAttrData("attrCoverImage", false);
var attrType=getAttrData("attrType", false); 
var Authorization = window.localStorage["Authorization"];
var urlComm = window.localStorage["urlComm"];
var userId = window.localStorage["userId"];

if (urlComm == undefined) {
    urlComm = "smartcitypois"; //para llamadas a servicios
    window.localStorage["urlComm"] = urlComm;
}

var loadPage; 
$('.page-title').html(attrName);
$('#subtitle').hide();
$( '.ui-header .ui-title' ).css( "padding","0.7em 0" );

if (attrCoverImage) {
    $('#bkgImg').html('<img id ="background" class="img-thumbnail" src="'+ attrCoverImage +'" />');	
} 
if (attrType!= undefined && attrType == 'Profile') {
	var styleProfile = '';
	$('#action-icon-right').removeClass('hide-action-icon-right'); 
    document.getElementById('action-icon-right').href = "to_InstanceInfo.html";
    $('#prflImg').removeClass('hide-action-icon-right');
    if (attrDisplayImage) {
    	 $('#prflImg').html('<img id ="profile" class="img-responsive img-circle img-responsive-rounded img-newsFeed-x5" src="'+ attrDisplayImage +'" />');	
		 styleProfile = 'margin-newsFeed-x2';
    } 
	loadPage = $.ajax({
		type: 'GET',
			  "url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/storiesFor?objectId=" + attrId + "&total=100",
			  "dataType": "json"
		}).done(function(response1){
			loadAllRest(response1);
	}); 

	function loadAllRest(responseJson){
		$('.page-title').html(attrName);
		var template = $('#newsFeedCommunityOT').html(); 
		var compileResult = Handlebars.compile(template);
		var result = compileResult(responseJson);
		$('#newsFeedObjType').html(result);
		$("#newsFeedObjType").load();
	} 
		 
	Handlebars.registerHelper('eachNeewsFeedOT', function(property) {
		var data = "";
		data += '<div class="row ' + styleProfile + '">';
		data += '<div class="col-xs-6 text-center" id="contacStatusImg"> </div>';
		data += '<div class="col-xs-6 text-center">';
		//if(userId != attrId) {
			data += '<a href="#" data-toggle="modal" onclick="getFoggy();$(\'#userNameModal\').html(\'' + attrName + '\');" data-target="#dialogComent" class="ui-link color-newsFeed-x3">';
		/*} else {
			data += '<a href="#"></a>';
		}*/
		data += '<img class="img-circle" src="img/icon2.png" width="40px">';
		data += '</a>';
		data += '</div>';
		data += '</div>';
		
		data += '<div class="row">';
		data += '<div class="col-sm-12 text-center ">';
		data += '<div class="div-newsFeed-profile"><br>Actividad Reciente<br></div>';
		data += '</div>';
		data += '</div>';
		
		data += '<br>';
		data += '<br>';
		data += '<div id="neewsFeedObjUser">';
		for(var i=0, j=property.length; i<j; i++) {
			data += '<div class="row">';
			var displayThumbnailActor = "";
			var coverImageActor = "";
			if(property[i].Actor.DisplayImage) displayThumbnailActor = property[i].Actor.DisplayImage.Thumbnail;
			if (property[i].Actor.CoverImage) {
				coverImageActor = property[i].Actor.CoverImage.Image;
			}
			
			/*Imagen de usuario*/
			data += '<div class="col-xs-3 text-right padding-newsFeed-x1">';
			data += '<div class="row">';
			data += '<div class="col-xs-9 text-right col-xs-offset-3 padding-newsFeed-x2">';
			
			data += '<a href=\'';
			data += 'to_attrDetail.html';
			data += '\' onclick="setPath(\'to_attrDetail\');setAttrId(\''+ property[i].Actor.Id +'\',\''+ property[i].Actor.Name +'\',\''+ displayThumbnailActor +'\',\''+coverImageActor +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';
			data += '<img class="img-responsive img-circle img-responsive-rounded img-newsFeed" src="' + displayThumbnailActor + '" />';
			data += '</a>';			

			data += '</div>';
			data += '</div>';
			data += '</div>';
			
			/*Datos del objeto*/
			/*Cabecera, lado derecho*/
			data += '<div class="col-xs-8 text-left padding-newsFeed-x3">';
			
			data += '<a class=\"objectName\" href=\'';
			data += 'to_attrDetail.html';
			data += '\' onclick="setPath(\'to_attrDetail\');setAttrId(\''+ property[i].Actor.Id +'\',\''+ property[i].Actor.Name +'\',\''+ displayThumbnailActor +'\',\''+coverImageActor +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';
			data += '<span class="objectName">' + property[i].Actor.Name + '</span>';
			data += '</a>';
			
			data += '<span class="color-newsFeed-x1"> ' + property[i].Action + ' </span>';
			
			if(property[i].Type != 'UpdateAvatarActivity' && property[i].Object.Name) {
				data += '<span class="objectName">';
				if(property[i].Object.Type == 'Profile') {
					coverImageObject = "";
					displayImageObject = "";
					if(property[i].Object.CoverImage) coverImageObject = property[i].Object.CoverImage.Image;
					if(property[i].Object.DisplayImage) displayImageObject = property[i].Object.DisplayImage.Thumbnail;
					data += '<a class="objectName" href=\'';
					data += 'to_attrDetail.html';
					data += '\' onclick="setPath(\'to_attrDetail\');setAttrId(\''+ property[i].Object.Id +'\',\''+ property[i].Object.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject  +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';
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
					data += '\' onclick="setPath(\'to_attrDetail\');setAttrId(\''+ property[i].Object.Id +'\',\''+ property[i].Object.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'\');insertHtml(this.href); this.blur(); return false;">';
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
						data += '\' onclick="setPath(\'to_attrDetail\');setAttrId(\''+ property[i].IndirectObject.Id +'\',\''+ property[i].IndirectObject.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';
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
						data += '\' onclick="setPath(\'to_attrDetail\');setAttrId(\''+ property[i].IndirectObject.Id +'\',\''+ property[i].IndirectObject.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'\');insertHtml(this.href); this.blur(); return false;">';
						data += property[i].IndirectObject.Name;
						data += '</a>';
					}
					data += ' </span>';
				}
			}
				
			data += '</div>';
			data += '</div>';
			
			/*Cuerpo del objeto*/
			var styleObj = '';/*style=""*/
			var styleObj1 = 'margin-newsFeed-x3'; /*style="margin-top:-25px;"*/
			if(property[i].Object.Type == 'Profile' && property[i].Object.DisplayImage && property[i].Type != "UpdateAvatarActivity") {
				//col = 7;
				data += '<div class="row display-newsFeed-con1">';
				data += '<div class="col-xs-3">';
				data += '<div class="col-xs-9 text-right col-xs-offset-3" >'; //style="padding-right: 1px;"
				data += '</div>';
				data += '</div>';
				data += '<div class="col-xs-8 margin-newsFeed-con1">';
				data += '<img class="img-newsFeed-con1" src="img/icon_connection.png">';
				data += '</div>';
				data += '</div>';
				styleObj = 'margin-newsFeed-x1';/*style="margin-top:-25px; display:inline"*/
				var styleObj1 = 'margin-newsFeed-x1';/*style="margin-top:-25px; display:inline"*/
			}
			
			
			data += '<div class="row ' + styleObj1 + '" >';
			data += '<div class="col-xs-3">';
			data += '</div>';
			data += '<div class="col-xs-8 text-left ' + styleObj + '">';
			if(property[i].Object.Type == 'Profile' && property[i].Object.DisplayImage) {
				
				data += '<div class="row">';
				if(property[i].Type != "UpdateAvatarActivity") {
					coverImageObject = "";
					displayImageObject = property[i].Object.DisplayImage.Thumbnail;
					if(property[i].Object.CoverImage) coverImageObject = property[i].Object.CoverImage.Image;
					data += '<div class="col-xs-3 text-left padding-newsFeed-x4">';
					data += '<a href=\'';
					data += 'to_attrDetail.html';
					data += '\' onclick="setPath(\'to_attrDetail\');setAttrId(\''+ property[i].Object.Id +'\',\''+ property[i].Object.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';
					data += '<img class="img-responsive img-circle img-responsive-rounded img-newsFeed-x2" src="' + displayImageObject + '">';
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
					data += '\' onclick="setPath(\'to_attrDetail\');setAttrId(\''+ property[i].Object.Id +'\',\''+ property[i].Object.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';					
					data += '<img class="img-newsFeed-x3" src="' + displayImageObject + '" />'; 
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
				data += '\' onclick="setPath(\'to_attrDetail\');setAttrId(\''+ property[i].Object.Id +'\',\''+ property[i].Object.Name +'\',\''+ displayImageObject +'\',\''+ coverImageObject +'\',\'\');insertHtml(this.href); this.blur(); return false;">';
				data += '<img class="img-newsFeed-x3" src="' + displayImageObject + '" />'; 
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
				data += '<span class="color-newsFeed-x2">';
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
				data += '<div class="col-xs-12 text-right padding-newsFeed-x5">';
				data += '<span class="text-muted span-newsFeed-x1"><img class="img-newsFeed-x4" src="img/time_48dp.png" />' + property[i].Date + '</span>';
				data += '</div>';
			}
			data += '</div>';
			
			
			
			data += '</div>';
			data += '<br>';
			data += '<hr width="100%">'
			data += '<br>';
		}
		data += '</div>';
		return data;
	});	
} else {
	
	$.ajax({
		type: 'GET',
			  "url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/storiesFor?objectId=" + attrId + "&total=100",
			  "dataType": "json"
		}).done(function(response){
			loadAllRest(response);
	}); 

	function loadAllRest(responseJson){
		$('.page-title').html(attrName);
		var template = $('#newsFeedCommunityOT').html(); 
		var compileResult = Handlebars.compile(template);
		var result = compileResult(responseJson);
		$('#newsFeedObjType').html(result);
		$("#newsFeedObjType").load();
	} 
		 
		 
	Handlebars.registerHelper('eachNeewsFeedOT', function(property) {
		var data = "";
		data += '<br>';
		data += '<br>';
		data += '<div id="neewsFeedObjT">';
		for(var i=0, j=property.length; i<j; i++) {
			data += '<div class="row">';
			var displayThumbnailActor = "";
			var coverImageActor = "";
			if(property[i].Actor.DisplayImage) displayThumbnailActor = property[i].Actor.DisplayImage.Thumbnail;
			if (property[i].Actor.CoverImage) {
				coverImageActor = property[i].Actor.CoverImage.Image;
			}
			
			/*Imagen de usuario*/
			data += '<div class="col-xs-3 text-right padding-newsFeed-x1">';
			data += '<div class="row">';
			data += '<div class="col-xs-9 text-right col-xs-offset-3 padding-newsFeed-x2">';
			
			data += '<a href=\'';
			data += 'to_attrDetail.html';
			data += '\' onclick="setPath(\'to_attrDetail\');setAttrId(\''+ property[i].Actor.Id +'\',\''+ property[i].Actor.Name +'\',\''+ displayThumbnailActor +'\',\''+coverImageActor +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';
			data += '<img class="img-responsive img-circle img-responsive-rounded img-newsFeed" src="' + displayThumbnailActor + '" />';
			data += '</a>';
			data += '</div>';
			data += '</div>';
			data += '</div>';
			
			/*Datos del objeto*/
			/*Cabecera, lado derecho*/
			data += '<div class="col-xs-8 text-left padding-newsFeed-x3">';
			data += '<a class=\"objectName\" href=\'';
			data += 'to_attrDetail.html';
			data += '\' onclick="setPath(\'to_attrDetail\');setAttrId(\''+ property[i].Actor.Id +'\',\''+ property[i].Actor.Name +'\',\''+ displayThumbnailActor +'\',\''+coverImageActor +'\',\'Profile\');insertHtml(this.href); this.blur(); return false;">';
			data += '<span class="objectName">' + property[i].Actor.Name + '</span>';
			data += '</a>';
			
			data += '<span class="color-newsFeed-x1"> ' + property[i].Action + ' </span>';
			
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
			data += '<div class="row margin-newsFeed-x3">';
			data += '<div class="col-xs-3"></div>';
			data += '<div class="col-xs-8 text-left">';
			if((property[i].Type == "InstancePageCreatedActivity" || property[i].Type == "NewInstancePictureActivity") && property[i].Object.DisplayImage) {
				data += '<div class="row">';
				data += '<div class="col-xs-12 text-left">';
				data += '<img class="img-newsFeed-x3" src="' + property[i].Object.DisplayImage.Image + '" />'; 
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
				data += '<span class="color-newsFeed-x2">';
				data += property[i].Object.Content;
				data += '</span>';
				data += '</div>';
				data += '</div>';
			} 
			if(property[i].Date) {
				//data += '<div class="row">';
				data += '<div class="col-xs-12 text-right padding-newsFeed-x5">';
				data += '<span class="text-muted span-newsFeed-x1"><img class="img-newsFeed-x4" src="img/time_48dp.png" />' + property[i].Date + '</span>';
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
		data += '</div>';
		return data;
});	

}
$.when(loadPage).then(setImg); 

function setImg() {
	if (attrType != undefined && attrType == 'Profile' && userId != attrId) {
		$.ajax({
			type: 'GET',
            url: "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/connectionStatus?spriboId=" + attrId + "&authorizationToken=" + Authorization,
            dataType: "json"
        }).done(function(response) {
            var htmlCode;
            if (response.Status == 'IsConnectedTo') {
                htmlCode = '<a href="#" data-toggle="modal" data-target="#actionSheet" onclick="getFoggy()" class="ui-link color-newsFeed-x3">';
                htmlCode += '<img class="img-circle" src="img/subtractContact.png" width="40px"></a>';
                $('#contacStatusImg').html(htmlCode);
            } else if (response.Status == 'HasPendingApproval') {
                $('#contacStatusImg').html('<a href="#" class="ui-link"><img class="img-circle" src="img/back.png" width="40px"></a>');
            } else if (response.Status == 'IsPendingApproval') {
                $('#contacStatusImg').html('<a href="#" class="ui-link"><img class="img-circle" src="img/icon1.png" width="40px"></a>');
            } else {
            htmlCode = '<a href="#" data-toggle="modal" data-target="#modalLive" onclick="connectTo()" class="ui-link color-newsFeed-x3">';
            htmlCode += '<img class="img-circle" src="img/addcontact.png" width="40px"></a>';
                $('#contacStatusImg').html(htmlCode);
            }
            addModal();
        }); 
	}
	
		
}
function connectTo() {
    getFoggy();
	$.ajax({
			type: 'POST',
            url: "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/connect?spriboId=" + attrId + "&authorizationToken=" + Authorization,
            dataType: "text"
    }).done(function(response) {
        if (response) {
            if (response == 'true') {
                var msg = 'Solicitud de conexi&oacute;n enviada a ' + attrName
                $('.modal-body > span').html(msg);
                setImg();
            } else {
                var msg = 'Se produjo un error con la solicitud o ya existe la conexi&oacute;n con ' + attrName
                $('.modal-body > span').html(msg);
            }
        } else {
            var msg = 'Se produjo un error con la solicitud o ya existe la conexi&oacute;n con ' + attrName
            $('.modal-body > span').html(msg);
        }
    }).fail(function() {
        var msg = 'Se produjo un error con la solicitud'
        $('.modal-body > span').html(msg);
    });
}

function disconnectFrom() {
    $.ajax({
        type: 'POST',
        url: "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/disconnect?spriboId=" + attrId + "&authorizationToken=" + Authorization,
        dataType: "text"
    }).done(function(response) {
        if (response) {
            if (response == 'true') {
                console.log("Se realizo la operación"); 
                setImg();
            } else {
                console.log("Error al desconectar");
            }
        }
    });
}