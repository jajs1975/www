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
	
	
	    document.addEventListener('deviceready', function () {	
        alert("entra a onDeviceReady....Local");
        //document.addEventListener("backbutton", onBackKeyDown, false);
        //document.addEventListener("backbutton", this.onBackKeyDown, false);
        /*
        var ref = window.location.replace("http://swbsocial.infotec.com.mx/spribo/landing.html"); 
        ref.addEventListener("backbutton", function (e) {
            alert("Aqui meme papa...");
            e.preventDefault();
        }, false );
        */
        
        document.addEventListener("backbutton", function (e) {
            alert("Aqui meme backbutton...");
            e.preventDefault();
        }, false );
        
		document.addEventListener("menubutton", function (e) {
            alert("Aqui meme menuuu...");
            e.preventDefault();
        }, false );
		/*
        window.new_window = window.open("http://swbsocial.infotec.com.mx/spribo/landing.html", '_blank', 'location=no');

        window.new_window.addEventListener("backbutton", function () {
            alert("Aqui meroles...");
            window.new_window.close();
        });
        
        window.new_window.addEventListener("menubutton", function (e) {
            alert("Aqui meme menuuu...");
            e.preventDefault();
        }, false );
		*/
    }, false);
    
    
	
    /* --------------------------------- Authentication Managment --------------------------- */
}());
