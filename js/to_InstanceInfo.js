var objInstanceId=window.localStorage["objInstanceId"];
if(objInstanceId==undefined) objInstanceId = 1;
    console.log("obj :"+objInstanceId);
var instanceTitle=window.localStorage["instanceTitle"];
//Servicio 5 -- Lista los objetos de una instancia de tipo objeto
$.ajax({
    type: 'GET',
          /*"url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=5&objInstanceId=" + objInstanceId,*/
          "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/attributes?objectId=" + objInstanceId,
		  //EM007-Publicacion-1395782688034
          "dataType": "json"
    }).done(function(response){
    	$('.page-title').html(instanceTitle);
        loadAllRest(response);
}); 
//Recarga la lista de jquery con las instancias creadas
function loadAllRest( responseJson){
    var template = $('#obj-getInstanceInfo').html(); 
    var compileResult = Handlebars.compile(template);
    var result = compileResult(responseJson);
    $('#maincontent').html(result);
	
	      $(".owl-carousel").owlCarousel({
        autoPlay: false,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
		itemsTablet:	[768,3],
		itemsMobile:	[479,3],
		navigation : false,
		pagination : false/*,
		mouseDrag:false*/
      });
} 

Handlebars.registerHelper('eachM', function(property) {
console.log('property: ' + property);
var data = "";

  for(var i=0, j=property.length; i<j; i++) {
  					data += '<div class="row" onclick="setPropId(\'' + objInstanceId + '\',\'' + property[i].Id + '\'); insertHtml(\'vp_display.html\');this.blur(); return false;">';
					if(property[i].Type == 'string' || property[i].Type == 'date' || property[i].Type == 'boolean' 
					|| property[i].Type == 'integer' || property[i].Type == 'float' || property[i].Type == 'url' || 
					property[i].Type == 'Email') {
						data = data + '<div class="col-xs-9" >';
							data = data + '<span class="font-detail">' + property[i].Name +'</span>';
						data = data + '</div>';
						data = data + '<div class="col-xs-3">';
							data = data + '<div class="col-xs-offset-8">';
								data = data + '<a href="vp_display.html" onclick="setPropId(\'' + objInstanceId + '\',\'' + property[i].Id + '\'); insertHtml(this.href);this.blur(); return false;">';
									data = data + '<span style="color:#F48341;" class="glyphicon glyphicon-chevron-right "></span>';
								data = data + '</a>';
							data = data + '</div>';
						data = data + '</div>';
						//data = data + '</div>';
						data = data + '<br>';
						data = data + '<hr width="100%">';
					} else {
						//data = data + '<div class="row">';
						//data = data + '<div class="col-xs-1">';					
						//data = data + '<div style="margin-left:10px;" class="events"></div>';
						//data = data + '</div>';
						data = data + '<div class="col-xs-9">';
						data = data + '<span class="font-detail">' + property[i].Name + '</span>';
						data = data + '</div>';
						data = data + '<div class="col-xs-3">';
						data = data + '</div>';
						data = data + '<br>';
						data = data + '</div>';
						data = data + '<br>';
						data = data + '<div class="row">';
						data = data + '<div class="col-xs-12 carousel-arrow">';
						data = data + '<div class="col-xs-10">';
						data = data + '<div class="carouselSpribo owl-carousel">';
						
						$.ajax({
							type: 'GET',
								  /*"url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=5&objInstanceId=" + objInstanceId,*/
								  "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/associatedWith?objectId=" + objInstanceId + "&playerConstraintId=" + property[i].Id,
								  //EM007-Publicacion-1395782688034
								  "dataType": "json"
							}).done(function(responseIntern){
								for(var k=0, l=responseIntern.length; k<l; k++) {
									data = data + '<div class="text-center">';
									data = data + '<a href="to_attrDetail.html" class="item link" onclick="setAttrId(\'' + responseIntern[k].Id + '\', \'' + responseIntern[k].Name + '\', \'' + responseIntern[k].DisplayImage.Thumbnail + '\', \'' + responseIntern[k].CoverImage.Image + '\'); insertHtml(this.href);this.blur(); return false;">';
									data = data + '<img src="' + responseIntern[k].DisplayImage.Thumbnail + '" class="img-circle" style="width:60px; height:60px; ">';
									data = data + '<h5 style="color:#C2C2C2" class="text-center">'+ responseIntern[k].Name+'</h5>';
									 data = data + '</a>';
									data = data + '</div>';
								}								
						}); 
						
						
						
						data = data + '</div>';
						data = data + '</div>';
						data = data + '<div class="col-xs-2">';
						data = data + '<div class="col-xs-offset-6">';
						data = data + '<a href="to_instanceObjectList.html" onclick="setPropId(\'' + objInstanceId + '\',\'' + property[i].Id + '\', ); insertHtml(this.href);this.blur(); return false;">';
						data = data + '<img style="height:26px; top:22px; width:35px" src="img/arrow.png"></img>';
						data = data + '</a>';
						data = data + '</div>';
						data = data + '</div>';
						
						data = data + '</div>';
						data = data + '<hr width="100%">';
						//data = data + '</div>';
					}	
					data = data + '</div>';
					}
		return data;
});	