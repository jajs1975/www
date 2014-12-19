        var commId=window.localStorage["commId"];
		if(commId==undefined) commId = 1;
        console.log("com en form:"+commId);
		
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
/*		 var data1 = [
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
            "Image": "http://localhost:8080/work/Spribo_app/img/fuerte3.jpg",
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
				  "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=11&commId="+commId,
				  "dataType": "json"
			}).done(function(response){
				//$('.page-title').html(instanceTitle);
				loadAllRest(response);
				loadAllRest(response);
		}); 
		//Recarga la lista de jquery con las instancias creadas
		function loadAllRest(responseJson){
		    console.log(responseJson);
			var template = $('#newsFeedCommunityTem').html(); 
			var compileResult = Handlebars.compile(template);
			var result = compileResult(responseJson);
			$('#maincontent').html(result);
		} 
		 
		 
	Handlebars.registerHelper('eachNeewsFeed', function(property) {
		console.log('property: ' + property);
		var data = "";
		data += '<br>';
		for(var i=0, j=property.length; i<j; i++) {
				data += '<div class="row"><!--imagen del frente-->';
				
				data += '<div class="col-xs-3 text-right" style="padding-right: 1px;">';
				data += '<div class="row">';
				data += '<div class="col-xs-9 text-right col-xs-offset-3" style="padding-right: 1px;">';
				data += '<img style="max-height:110px; background-color:#FFFFFF; border:0px;" class="img-responsive img-circle img-responsive-rounded" src="' + property[i].Subject.Image + '" />';
				data += '</div>';
				data += '</div>';
				data += '</div>';
					
				data += '<div class="col-xs-8 text-left">';
				data += '<span class="objectName">' + property[i].Subject.Name + '</span>';
				data += '<span style="color:#ACACAB"> ' + property[i].Action + ' </span>';
				if(property[i].Object.Name) {
					data += '<span class="objectName">' + property[i].Object.Name + ' </span>';
				}
				data += '</div>';
				
				data += '<div class="row" style="margin-top:-20px;">';
				data += '<div  class="col-xs-3 text-left" style="padding-right: 1px;">';
				data += '</div>';
				data += '<div class="col-xs-8 text-left">';
				if(property[i].Object.Image) {
					data += '<div class="row">';
					data += '<div class="col-xs-12 text-left">';
					data += '<a href="#"><img style=" background-color:#FFFFFF; border:0px;" class="img-thumbnail" src="' + property[i].Object.Image + '" /></a>'; /*homePost_new.html*/
					data += '</div>';
					data += '</div>';
					
					if(property[i].Object.Text) {
						data += '<div class="row">';
						data += '<div class="col-xs-12 text-justify">';
						data += '<span style="color:#878787">';
						data += property[i].Object.Text;
						data += '</span>';
						data += '</div>';
						data += '</div>';
					}
					
					data += '<div class="row">';
					data += '<div class="col-xs-12 text-right">';
					data += '<span class="ui-icon-clock ui-btn-icon-left text-muted" style="position:relative; font-size:12px;">' + property[i].Object.Date + '</span>';
					data += '</div>';
					data += '</div>';
					
				} else if(property[i].Object.Text){
					data += '<div class="row">';
					data += '<div class="col-xs-12 text-justify">';
					data += '<span style="color:#878787">';
					data += property[i].Object.Text;
					data += '</span>';
					data += '</div>';
					data += '</div>';
					data += '<div class="row">';
					
					data += '<div class="col-xs-12 text-right">';
					data += '<span class="ui-icon-clock ui-btn-icon-left text-muted" style="position:relative; font-size:12px;">' + property[i].Object.Date + '</span>';
					data += '</div>';
					data += '</div>';
					data += '</div>';
				} else if(property[i].Object.Date) {
					data += '<div class="col-xs-12 text-right">';
					data += '<span class="ui-icon-clock ui-btn-icon-left text-muted" style="position:relative; font-size:12px;">' + property[i].Object.Date + '</span>';
					data += '</div>';
				}
				data += '</div>';
				data += '</div>';
				
				data += '</div>';
				data += '<br>';
				data += '<hr width="100%">'
				data += '<br>';
		
		}
		
		if(property.length == 20) {
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
		}
		return data;
});	
/*Forma estatica*/
		 /*var template = $('#newsFeedCommunityTem').html(); 
		 var compile = Handlebars.compile(template);
		 var result = compile(data1);
	    $('#maincontent').html(result);*/
		/***/