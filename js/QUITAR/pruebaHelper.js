         var dataPoints = [{
			   "Name": "Descripcion",
			   "Type" : "string",
			   "Id": "1",
		   },
		   {
			   "Name": "Eventos",
			   "Type" : "Tipo de punto de interes",
			   "Values": [
			    { 
				"Id":"1",
				"Name": "Baño publico",
				"Image": "";
				}
			   ]
		   }
		]


var template = $('#obj-getInstanceInfo').html(); 
    var compileResult = Handlebars.compile(template);
    var result = compileResult(dataPoints);
    $('.prbHelper').html(result);

Handlebars.registerHelper('ifPrb', function(property) {
alert('hola!!');
  					var data = '<div class="row">';
					if(property.Type == 'string' || property.Type == 'date' || property.Type == 'boolean' 
					|| property.Type == 'integer' || property.Type == 'float' || property.Type == 'url' || 
					property.Type == 'email') {
						data = data + '<div class="col-xs-9">'
							data = data + '<span class="font-detail">' + property.Name +'</span>'
						data = data + '</div>'
						data = data + '<div class="col-xs-3">'
							data = data + '<div class="col-xs-offset-8">'
								data = data + '<a href="#">'
									data = data + '<span style="color:#F48341;" class="glyphicon glyphicon-chevron-right "></span>'
								data = data + '</a>'
							data = data + '</div>'
						data = data + '</div>'
						data = data + '<br>'
						data = data + '<hr width="100%">'
					} else if(property.Type == 'profile') {
					} else {
						/*{{#each Values}}
						data = data + '<div id="expertCarousel" class="owl-carousel">'
						data = data + '<div class="text-center">'
						  data = data + '<a class="item link">'
							data = data + '<img src="' + {{Image}} + '" class="img-circle" style="width:60px; height:60px; ">'
								data = data + '<h5 style="color:#C2C2C2" class="text-center">'+{{Name}}+'</h5>'
						  data = data + '</a>'
						data = data + '</div>'
						data = data + '</div>'
						{{/each}}
					}	
					data = data + '</div>'
					{{/each}}*/
					}
return data;
});	