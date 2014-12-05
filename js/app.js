// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
    /* --------------------------------- Event Registration -------------------------------- */
    
    document.addEventListener('deviceready', function () {	
        window.location.replace("http://swbsocial.infotec.com.mx/spribo/landing.html");  
        document.addEventListener("backbutton", bButton, true);
    }, false);
    
    document.addEventListener("backbutton", onBackKeyDown, false);
    
     // Handle the back button
    //
    function onBackKeyDown() {
        alert("en onBackKeyDown");
    }
    
    function bButton () {
       alert('back pressed');
    }

   
   /*
    //Handler for phonegap deviceready event
    var handleDeviceReady = function() {
        alert("Hola1");
    };
*/
	

	
    //Add event listener for phonegap device ready event
   //document.addEventListener("deviceready", handleDeviceReady, false);
   
   

    /* ---------------------------------- Local Functions ---------------------------------- */
   
}());