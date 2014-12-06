// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
    /* --------------------------------- Event Registration -------------------------------- */
    
    document.addEventListener('deviceready', function () {	
        alert("entra a onDeviceReady....2");
        //document.addEventListener("backbutton", onBackKeyDown, false);
        //document.addEventListener("backbutton", this.onBackKeyDown, false);
        /*
        var ref = window.location.replace("http://swbsocial.infotec.com.mx/spribo/landing.html"); 
        ref.addEventListener("backbutton", function (e) {
            alert("Aqui meme papa...");
            e.preventDefault();
        }, false );
        */
        /*
        document.addEventListener("menubutton", function (e) {
            alert("Aqui meme menuuu...");
            e.preventDefault();
        }, false );
        */
        window.new_window = window.open("http://swbsocial.infotec.com.mx/spribo/landing.html", '_blank', 'location=no');

        window.new_window.addEventListener("exit", function () {
            alert("Aqui meroles...");
            window.new_window.close();
        });
    }, false);
    
    
    function onBackKeyDown() {
        alert("en onBackKeyDown-0");
    }
    
    function onMenuKeyDown() {
        alert("en onMenuKeyDown George");
    }
     // Handle the back button
    //
    
    /*
    function bButton () {
       alert('back pressed');
    }
    
    function onBackButton() {
          alert('backbutton k pex');
    }*/

   
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

function onBackKeyDown() {
        alert("en onBackKeyDown");
}