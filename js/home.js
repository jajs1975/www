// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
 (function () {
	/* ---------------------------------- Local Variables ---------------------------------- */
                
        var commId=window.localStorage["commId"];
        var urlComm = window.localStorage["urlComm"];
		var usrName = window.localStorage["userId"];
        var usrAuthorized = window.localStorage["Authorization"] ? true : false;
		restartVariables();
		$('#username').html('<img src="img/user_48dp.png" class="img-profile iconSize"> <span class="text-menu side-menu-item frGrndClrWht">'+usrName+'</span> '); 
        if (commId == undefined) commId = 1;
		if (urlComm == undefined || urlComm != "smartcitypois") {
            urlComm = "smartcitypois";
            window.localStorage["urlComm"] = urlComm;
            console.log("urlComm fijado por codigo: " + urlComm);
        }
        
        $.ajax({
        type: 'GET',
            "url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/getCommunity", 
            "dataType": "json"
        }).done(function(response) {
            $('.page-title').html(response.Name);
			var commName = response.Name;
            commId = response.Id;
			if (commId != null) {
                window.localStorage["commName"] = commName;
            }
        });
    
        var objTypesTpl = Handlebars.compile($("#obj-list-tpl").html());	
        $.ajax({
            type: 'GET',
            url: "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/instancesOf?objectId=InstancePage", 
            dataType: "json"
        }).done(function(response) {
              $('.objTypes').html(objTypesTpl(response));
              if (!usrAuthorized) {
                var father = document.getElementById("loggedUser").parentElement;
                father.removeChild(document.getElementById("loggedUser"));
              }
         });
    
    /* ---------------------------------- Local Functions ---------------------------------- */
		//var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
		//if (app) {  // PhoneGap application
		 alert("UserAgentGeorge:"+navigator.userAgent);
		 if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
			 alert("entra a onDeviceReady....Local-0");
			document.addEventListener('deviceready', function () {	
			alert("entra a onDeviceReady....Local-1");
			FastClick.attach(document.body);
			
			document.addEventListener("offline", function(){ alert("Esta aplicacion requiere contar con conexion a Internet."); }, false);
					   
		   //document.addEventListener("online", function(){ alert("Ahora se encuentra conectado a Internet"); }, false);
		   
		   document.addEventListener("backbutton", function (e) {
						   //alert("Pulsaron backbutton...");
						   backIcon();
						   e.preventDefault();
		   }, false );
		   
		   document.addEventListener("menubutton", function (e) {
						   //alert("Pulsaron menu button");
						   if( $("#myPanel").hasClass("ui-panel-open") == true ){
							  //alert("OPENED");
							  closePanel();
						   }else{
							  //alert("CLOSED");
							  openPanel();
						   }
						   e.preventDefault();
		   }, false );                             
	   }, false);

		
	  }else {
		  //WebPage application-->do nothing
		  alert("entra a WebPage application1:"+document.URL);
		  //jAlert("WebPage application--Esta aplicacion requiere contar con conexion a Internet.","Mensaje Spribo");
	  }		
    /* --------------------------------- Authentication Managment --------------------------- */
}());

var innerCalls = [];
var coverImage = "";
var displayImage = "";
function getUserInfo(){
	var userId = window.localStorage["userId"];
	var ajax1 = getAjax1();
	innerCalls.push(ajax1);
	var ajax2 = getAjax2();
	innerCalls.push(ajax2);

	$.when(innerCalls).then(rest(userId));
}
function rest(userId) {
	setPath('home');
	setAttrId(userId, userId , displayImage, coverImage, 'Profile');
	return true;
}
function getAjax1() {
	var userId = window.localStorage["userId"];
	var ajax1 = $.ajax({
		type: 'GET',
        "url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/attributeValue?objectId="+userId+"&attributeId=Avatar",
        "dataType": "json",
		async:false
	}).done(function(object){
		if(object.Values) {
			if(object.Values != '' && object.Values[0].Thumbnail){
				var DisplayImage=object.Values[0].Thumbnail;
				displayImage = DisplayImage;
			} else {
				var DisplayImage=null;
				displayImage = DisplayImage;
			}
		} else { 
			var DisplayImage=null;
			displayImage = DisplayImage;
		}
	}); 
	return ajax1;
}
function getAjax2() {
	var userId = window.localStorage["userId"];
	var ajax2 = $.ajax({
		type: 'GET',
		"url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/attributeValue?objectId="+userId+"&attributeId=Cover",
		"dataType": "json",
		async:false
	}).done(function(object){
		if(object.Values){
			if(object.Values != '' && object.Values[0].Image){
				var CoverImage=object.Values[0].Image;
				coverImage = CoverImage;
			} else {
				var CoverImage=null;
				coverImage = CoverImage;
			 }
		} else { 
			var CoverImage=null;
			coverImage = CoverImage;
		}
	});
	return ajax2;
}

function restartVariables() {
	window.localStorage["attrCoverImage"]="";
	window.localStorage["attrDisplayImage"]="";
	window.localStorage["attrId"]="";
	window.localStorage["attrName"]="";
	window.localStorage["attrType"]="";
	window.localStorage["objectId"]="";
	window.localStorage["objectName"]="";
	//window.localStorage["isPageNF"]="";
	window.localStorage["path"]="";
	window.localStorage["objInstanceId"]="";
	window.localStorage["objInstanceName"]="";

}