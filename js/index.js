/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function handleClick()
      {
        
		 var form = $("#authForm"); 
		 var userId=$("#userId", form).val();
		 var password =$("#psswd", form).val();
		
		 if (userId && password){
		   var data=  $.ajax({
			type: 'GET',
          "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/login?name="+userId+"&password="+password,
          "dataType": "text"
		  
		  
		}).done(function(object){
		 
		
		if  (object == "401"){
		
			$('#error').text("Cuenta de usuario o contraseña incorrecta");		 
		}
		 else {
	
			 window.location.replace("index2.html");} 
             window.localStorage["Authorization"] = object; 
			 window.localStorage["userId"]=userId; 
		}).fail(function(param1, param2, param3){
		 	
		 
		 window.location.replace("index.html"); 
		$('#error').text("Cuenta de usuario o contraseña incorrecta");
		});  	 
		 }
		else{
			if(userId){
			$('#error').text(" Contraseña requerida"); }
			else {$('#error').text("Cuenta de usuario requerida")}
		}
		 
        //event.preventDefault(); // disable normal form submit behavior
        return false; // prevent further bubbling of event
      }

// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
