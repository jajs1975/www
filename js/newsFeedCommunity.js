/*        var commId=window.localStorage["commId"];
		if(commId==undefined) commId = 1;
        console.log("com en form:"+commId);*/
		
		//Service 1 -->Community Data
        /*$.ajax({
        type: 'GET',
            "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=1&commId="+commId,
            "dataType": "json"
         }).done(function(response){
             $('.page-title').html(response.Name);
			 var commName=response.Name;
			 if(commId!=null) window.localStorage["commName"]=commName;
         });    */
		 
		 /*Forma estatica*/
	/*	 var data1 = [
    {
        "Subject": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 1"
        },
        "Action": "cambió la imagen de su perfil",
        "Object": {
            "Image": "http://localhost:8080/work/Spribo_app/img/frida.png",
            "Date": "Dic 15 a las 16:24 p.m."
        },
		"ObjectType": ""
    },
    {
        "Subject": {
            "Id": "expert2",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 2"
        },
        "Action": "cambió la imagen de",
        "Object": {
            "Id": "1",
            "Image": "http://localhost:8080/work/Spribo_app/img/fuerte3.jpg",
            "Date": "Ayer a las 5:36 p.m.",
            "Name": "Angel de la Independencia"
        },
		"ObjectType": "Tipo de Objeto"
    },
    {
        "Subject": {
            "Id": "expert3",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 3"
        },
        "Action": "se unió a",
        "Object": {
            "Id": "1",
            "Date": "Dic 15 a las 6:24 a.m.",
            "Name": "Smart City Pois"
        },
		"ObjectType": "Community"
    },
    {
        "Subject": {
            "Id": "expert4",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 4"
        },
        "Action": "es ahora contacto de",
        "Object": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/frida.png",
            "Date": "Dic 5 a las 11:39 a.m.",
            "Name": "Experto 1"
        },
		"ObjectType": "Profile"
    },
    {
        "Subject": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 1"
        },
        "Action": "comentó en",
        "Object": {
            "Text": "Texto del nuevo comentario hecho a un objeto, de este comentario no sabemos si hay un límite para su extensión o longitud, pero podría ser demasiado largo",
            "Id": "2",
            "Date": "Hace 4 horas",
            "Name": "Bellas Artes"
        },
		"ObjectType": "Tipo de Objeto"
    },
    {
        "Subject": {
            "Id": "expert2",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 2"
        },
        "Action": "le comentó a",
        "Object": {
            "Text": "Texto del nuevo comentario hecho a un usuario, no sabemos si hay un límite para su extensión o longitud, pero podría ser demasiado largo",
            "Id": "1",
            "Date": "Hace un minuto",
            "Name": "Ricardo Alcalá"
        },
		"ObjectType": "Profile"
    },
    {
        "Subject": {
            "Id": "expert3",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 3"
        },
        "Action": "comentó",
        "Object": {
            "Text": "Texto del comentario hecho por un usuario",
            "Date": "Miércoles a las 5:28 p.m."
        },
		"ObjectType": ""
    },
    {
        "Subject": {
            "Id": "expert4",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 4"
        },
        "Action": "publicó",
        "Object": {
            "Text": "Texto que aparece abajo de la imagen asociada al objeto",
            "Id": "event2",
            "Image": "http://localhost:8080/work/Spribo_app/img/evento2.jpg",
            "Date": "Dic 10 a las 11:22 a.m.",
            "Name": "Evento 2"
        },
		"ObjectType": "Tipo de Objeto"
    },
    {
        "Subject": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 1"
        },
        "Action": "actualizó",
        "Object": {
            "Id": "event2",
            "Date": "Dic 12 a las 08:45 p.m.",
            "Name": "Evento 2"
        },
		"ObjectType": "Tipo de Objeto"
    },
    {
        "Subject": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 1"
        },
        "Action": "cambió la imagen de su perfil",
        "Object": {
            "Image": "http://localhost:8080/work/Spribo_app/img/frida.png",
            "Date": "Dic 15 a las 16:24 p.m."
        },
		"ObjectType": ""
    },
    {
        "Subject": {
            "Id": "expert2",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 2"
        },
        "Action": "cambió la imagen de",
        "Object": {
            "Id": "1",
            "Image": "http://localhost:8080/work/Spribo_app/img/angel.png",
            "Date": "Ayer a las 5:36 p.m.",
            "Name": "Angel de la Independencia"
        },
		"ObjectType": "Tipo de Objeto"
    },
    {
        "Subject": {
            "Id": "expert3",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 3"
        },
        "Action": "se unió a",
        "Object": {
            "Id": "1",
            "Date": "Dic 15 a las 6:24 a.m.",
            "Name": "Smart City Pois"
        },
		"ObjectType": "Community"
    },
    {
        "Subject": {
            "Id": "expert4",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 4"
        },
        "Action": "es ahora contacto de",
        "Object": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/frida.png",
            "Date": "Dic 5 a las 11:39 a.m.",
            "Name": "Experto 1"
        },
		"ObjectType": "Profile"
    },
    {
        "Subject": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 1"
        },
        "Action": "comentó en",
        "Object": {
            "Text": "Texto del nuevo comentario hecho a un objeto, de este comentario no sabemos si hay un límite para su extensión o longitud, pero podría ser demasiado largo",
            "Id": "2",
            "Date": "Hace 4 horas",
            "Name": "Bellas Artes"
        },
		"ObjectType": "Tipo de Objeto"
    },
    {
        "Subject": {
            "Id": "expert2",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 2"
        },
        "Action": "le comentó a",
        "Object": {
            "Text": "Texto del nuevo comentario hecho a un usuario, no sabemos si hay un límite para su extensión o longitud, pero podría ser demasiado largo",
            "Id": "1",
            "Date": "Hace un minuto",
            "Name": "Ricardo Alcalá"
        },
		"ObjectType": "Profile"
    },
    {
        "Subject": {
            "Id": "expert3",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 3"
        },
        "Action": "comentó",
        "Object": {
            "Text": "Texto del comentario hecho por un usuario",
            "Date": "Miércoles a las 5:28 p.m."
        },
		"ObjectType": ""
    },
    {
        "Subject": {
            "Id": "expert4",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 4"
        },
        "Action": "publicó",
        "Object": {
            "Text": "Texto que aparece abajo de la imagen asociada al objeto",
            "Id": "event2",
            "Image": "http://localhost:8080/work/Spribo_app/img/evento2.jpg",
            "Date": "Dic 10 a las 11:22 a.m.",
            "Name": "Evento 2"
        },
		"ObjectType": "Tipo de Objeto"
    },
    {
        "Subject": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 1"
        },
        "Action": "actualizó",
        "Object": {
            "Id": "event2",
            "Date": "Dic 12 a las 08:45 p.m.",
            "Name": "Evento 2"
        },
		"ObjectType": "Tipo de Objeto"
    },
    {
        "Subject": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 1"
        },
        "Action": "cambió la imagen de su perfil",
        "Object": {
            "Image": "http://localhost:8080/work/Spribo_app/img/frida.png",
            "Date": "Dic 15 a las 16:24 p.m."
        }
    },
    {
        "Subject": {
            "Id": "expert2",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 2"
        },
        "Action": "cambió la imagen de",
        "Object": {
            "Id": "1",
            "Image": "http://localhost:8080/work/Spribo_app/img/angel.png",
            "Date": "Ayer a las 5:36 p.m.",
            "Name": "Angel de la Independencia"
        }
    },
    {
        "Subject": {
            "Id": "expert3",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 3"
        },
        "Action": "se unió a",
        "Object": {
            "Id": "1",
            "Date": "Dic 15 a las 6:24 a.m.",
            "Name": "Smart City Pois"
        }
    },
    {
        "Subject": {
            "Id": "expert4",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 4"
        },
        "Action": "es ahora contacto de",
        "Object": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/frida.png",
            "Date": "Dic 5 a las 11:39 a.m.",
            "Name": "Experto 1"
        }
    },
    {
        "Subject": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 1"
        },
        "Action": "comentó en",
        "Object": {
            "Text": "Texto del nuevo comentario hecho a un objeto, de este comentario no sabemos si hay un límite para su extensión o longitud, pero podría ser demasiado largo",
            "Id": "2",
            "Date": "Hace 4 horas",
            "Name": "Bellas Artes"
        }
    },
    {
        "Subject": {
            "Id": "expert2",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 2"
        },
        "Action": "le comentó a",
        "Object": {
            "Text": "Texto del nuevo comentario hecho a un usuario, no sabemos si hay un límite para su extensión o longitud, pero podría ser demasiado largo",
            "Id": "1",
            "Date": "Hace un minuto",
            "Name": "Ricardo Alcalá"
        }
    },
    {
        "Subject": {
            "Id": "expert3",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 3"
        },
        "Action": "comentó",
        "Object": {
            "Text": "Texto del comentario hecho por un usuario",
            "Date": "Miércoles a las 5:28 p.m."
        }
    },
    {
        "Subject": {
            "Id": "expert4",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 4"
        },
        "Action": "publicó",
        "Object": {
            "Text": "Texto que aparece abajo de la imagen asociada al objeto",
            "Id": "event2",
            "Image": "http://localhost:8080/work/Spribo_app/img/evento2.jpg",
            "Date": "Dic 10 a las 11:22 a.m.",
            "Name": "Evento 2"
        }
    },
    {
        "Subject": {
            "Id": "expert1",
            "Image": "http://localhost:8080/work/Spribo_app/img/usr1.jpg",
            "Name": "Experto 1"
        },
        "Action": "actualizó",
        "Object": {
            "Id": "event2",
            "Date": "Dic 12 a las 08:45 p.m.",
            "Name": "Evento 2"
        }
    }
]*/
/**/


		$.ajax({
			type: 'GET',
				  "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/stories?total=100",
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
			var displayThumbnail = "";
			var coverImage = "";
			var displayImage = "";
			if (property[i].Actor.CoverImage) {
				displayThumbnail = property[i].Actor.CoverImage.Thumbnail;
			}
			data += '<div class="row"><!--imagen del frente-->';
				
			/*Imagen de usuario*/
			data += '<div class="col-xs-3 text-right" style="padding-right: 3px;">';
			data += '<div class="row">';
			data += '<div class="col-xs-9 text-right col-xs-offset-3" style="padding-right: 1px;">';
			data += '<img style="height:60px; width:60px; background-color:#FFFFFF; border:0px;box-shadow : 0px 0px 10px rgba(0, 0, 0, 0.2);" class="img-responsive img-circle img-responsive-rounded" src="' + displayThumbnail + '" />';
			data += '</div>';
			data += '</div>';
			data += '</div>';
			
			/*Datos del objeto*/
			/*Cabecera, lado derecho*/
			data += '<div class="col-xs-8 text-left" style="padding-top:10px;">';
			data += '<span class="objectName">' + property[i].Actor.Name + '</span>';
			data += '<span style="color:#ACACAB"> ' + property[i].Action + ' </span>';
				
			if(property[i].Type != 'UpdateAvatarActivity' && property[i].Object.Name) {
				data += '<span class="objectName">';
				if(property[i].Object.Type == 'Profile') {
					//data += '<a href=\'';
					//data += '#';
					//data += '\' onclick="insertHtml(this.href); this.blur(); return false;">';
					data += property[i].Object.Name;
					//data += '</a>';
				} else if (property[i].Object.Type == 'Community') {
					data += property[i].Object.Name;
				} else {
					var img = "";
					if(property[i].Object.DisplayImage) img = property[i].Object.DisplayImage.Image;
					data += '<a class="objectName" href=\'';
					data += 'newsFeedObjType.html';
					data += '\' onclick="setObjInstIdNFObj(\''+ property[i].Object.Id +'\',\''+ property[i].Object.Name +'\',\''+ img +'\');insertHtml(this.href); this.blur(); return false;">';
					data += property[i].Object.Name;
					data += '</a>';
				}
				data += ' </span>';
			} else if(property[i].Object.Type == "Comment") {
				if(property[i].IndirectObject) {
					data += '<span class="objectName">';
					if(property[i].IndirectObject.Type == 'Profile') {
						//data += '<a href=\'';
						//data += '#';
						//data += '\' onclick="insertHtml(this.href); this.blur(); return false;">';
						data += property[i].IndirectObject.Name;
						//data += '</a>';
					} else if (property[i].IndirectObject.Type == 'Community') {
						data += property[i].IndirectObject.Name;
					} else {
						var img = "";
						if(property[i].IndirectObject.DisplayImage) img = property[i].IndirectObject.DisplayImage.Image;
						data += '<a class="objectName" href=\'';
						data += 'newsFeedObjType.html';
						console.log('Es tipo comment: ' + property[i].IndirectObject.Id + ', ' + property[i].IndirectObject.Name);
						data += '\' onclick="setObjInstIdNFObj(\''+ property[i].IndirectObject.Id +'\',\''+ property[i].IndirectObject.Name +'\',\''+ img +'\');insertHtml(this.href); this.blur(); return false;">';
						data += property[i].IndirectObject.Name;
						data += '</a>';
					}
					data += ' </span>';
				}
			}
				
			data += '</div>';
			data += '</div>';
			
			/*Cuerpo del objeto*/
			data += '<div class="row" style="margin-top:-25px;">';
			//data += '<div  class="col-xs-3 text-left" style="padding-right: 1px;">';
			//data += '</div>';
			
			data += '<div class="col-xs-8 text-left">';
			if(property[i].Object.Type == 'Profile' && property[i].Object.CoverImage) {
				
				data += '<div class="row">';
				if(property[i].Type != "UpdateAvatarActivity") {
					coverImage = property[i].Object.CoverImage.Thumbnail;
					data += '<div class="col-xs-3 text-left" style="padding-left: 1px;">';
					data += '<img style="width:60px; height:60px; background-color:transparent; border:0px;" class="img-responsive img-circle img-responsive-rounded" src="' + coverImage + '">';
					data += '</div>';
					data += '<div class="col-xs-9 text-right">';
					data += '</div>';
				} else {
					coverImage = property[i].Object.CoverImage.Image;
					data += '<div class="col-xs-12 text-left">';
					data += '<a href="#"><img style=" background-color:#FFFFFF; border:0px;max-width:250px" src="' + coverImage + '" /></a>'; /*homePost_new.html*/
					data += '</div>';
				}
				data += '</div>';
			} else if((property[i].Object.Type != 'Profile' && property[i].Object.Type != 'Community') && property[i].Type != 'InstancePageModifiedActivity' && property[i].Object.DisplayImage) {
				displayImage = property[i].Object.DisplayImage.Image;
				data += '<div class="row">';
				data += '<div class="col-xs-12 text-left">';
				data += '<a href="#"><img style=" background-color:#FFFFFF; border:0px;max-width:250px" src="' + displayImage + '" /></a>'; /*homePost_new.html*/
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
			//data += '</div>';
			
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
/*Forma estatica*/
		/* var template = $('#newsFeedCommunityTem').html(); 
		 var compile = Handlebars.compile(template);
		 var result = compile(data1);
	    $('#maincontent').html(result);*/
		/***/