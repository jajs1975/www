/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
	/* ---------------------------------- Local Variables ---------------------------------- */
   $("#authForm").on("submit",handleLogin);
   //console.log("handleLoginNew000");
	
    function handleLogin() {
        console.log("handleLoginNew1");
        var form = $("#authForm");    
        //disable the button so we can't resubmit while we wait
        $("#submitButton",form).attr("disabled","disabled");
        var commId=$("#commId", form).val();
        if(commId!=null) window.localStorage["commId"]=commId;
    }

}());