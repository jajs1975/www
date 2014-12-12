// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
 (function () {
	/* ---------------------------------- Local Variables ---------------------------------- */
        console.log('router perfil');
        
        var commId=window.localStorage["commId"];
		if(commId==undefined) commId = 1;
        console.log("com en form:"+commId);
        
        //Service 1 -->Community Data
        $.ajax({
        type: 'GET',
            "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=1&commId="+commId,
            "dataType": "json"
         }).done(function(response){
             $('.page-title').html(response.Name);
			 var commName=response.Name;
			 if(commId!=null) window.localStorage["commName"]=commName;
         });            
    
		//Service 2 -->User Data
         $.ajax({
         type: 'GET',
            "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=2&commId="+commId,
            "dataType": "json"
         }).done(function(response){
             $('.ui-icon-user').html(response.userName);
         });
         
         //Service 3 -->Lista de tipos de objetos
         var objTypesTpl = Handlebars.compile($("#obj-list-tpl").html());	
         $.ajax({
         type: 'GET',
            "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=3&commId="+commId,
            "dataType": "json"
         }).done(function(response){
              $('.objTypes').html(objTypesTpl(response));
         });
    
    /* ---------------------------------- Local Functions ---------------------------------- */
		//var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
		//if (app) {  // PhoneGap application
		 if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
			document.addEventListener('deviceready', function () {	
			//alert("entra a onDeviceReady....Local");
			//FastClick.attach(document.body);
			
			document.addEventListener("offline", function(){ alert("Esta aplicacion requiere contar con conexion a Internet."); }, false);
			
			document.addEventListener("online", function(){ alert("Ahora se encuentra conectado a Internet"); }, false);
			
			document.addEventListener("backbutton", function (e) {
				alert("Pulsaron backbutton...");
				e.preventDefault();
			}, false );
			
			document.addEventListener("menubutton", function (e) {
				alert("Pulsaron menu button");
				e.preventDefault();
			}, false );		
		}, false);
		
	  }else {
		  //WebPage application-->do nothing
		  //alert("entra a WebPage application1:"+document.URL);
		  //jAlert("WebPage application--Esta aplicacion requiere contar con conexion a Internet.","Mensaje Spribo");
	  }		
    /* --------------------------------- Authentication Managment --------------------------- */
}());
