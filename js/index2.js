// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
 (function () {
	/* ---------------------------------- Local Variables ---------------------------------- */
        console.log('router perfil');
        
        var commId=window.localStorage["commId"];
        var urlComm = window.localStorage["urlComm"];
		var usrName = window.localStorage["userId"]; 
		restartVariables();
		//$('#username').html('<span style="color:#FFF;"  class="text-menu side-menu-item">'+usrName+'</span>');
		$('#username').html('<img src="img/user_48dp.png" class="img-profile" style="width:20px;height:20px"> <span style="color:#FFF;"  class="text-menu side-menu-item">'+usrName+'</span> '); 
        if (commId == undefined) commId = 1;
		if (urlComm == undefined || urlComm != "smartcitypois") {
            urlComm = "smartcitypois";
            window.localStorage["urlComm"] = urlComm;
            console.log("urlComm fijado por codigo: " + urlComm);
        }
        
        //Service 1 -->Community Data
        $.ajax({
        type: 'GET',
            "url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/getCommunity", //http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=1&commId=+commId
            "dataType": "json"
        }).done(function(response) {
            $('.page-title').html(response.Name);
			var commName = response.Name;
            commId = response.Id;
			if (commId != null) {
                window.localStorage["commName"] = commName;
            }
        });
    
		//Service 2 -->User Data
         /*$.ajax({
         type: 'GET',
            "url": "http://swbsocial.infotec.com.mx/spribo/services.jsp?srv=2&commId="+commId,
            "dataType": "json"
         }).done(function(response){
             $('.ui-icon-user').html(response.userName);
         });*/
         
         //Service 3 -->Lista de tipos de objetos
         var objTypesTpl = Handlebars.compile($("#obj-list-tpl").html());	
         $.ajax({
         type: 'GET',
            "url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/instancesOf?objectId=InstancePage", //swbsocial.infotec.com.mx/spribo/services.jsp?srv=3&commId="+commId
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
		  //alert("entra a WebPage application1:"+document.URL);
		  //jAlert("WebPage application--Esta aplicacion requiere contar con conexion a Internet.","Mensaje Spribo");
	  }		
    /* --------------------------------- Authentication Managment --------------------------- */
}());
/*function getUserInfo(){
	
	var userId = window.localStorage["userId"];
	  $.ajax({
			type: 'GET',
          "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/attributeValue?objectId="+userId+"&attributeId=Avatar",
          "dataType": "json"
		  
		  
		}).done(function(object){
			
				
		 if(object.Values){
			 if(object.Values[0].Thumbnail){
			var DisplayImage=object.Values[0].Thumbnail;
			
            window.localStorage["attrDisplayImage"]=DisplayImage;			
			 }
		 } else { var DisplayImage=null;
              window.localStorage["attrDisplayImage"]=DisplayImage;		 }
		}); 
		
	 $.ajax({
			type: 'GET',
          "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/attributeValue?objectId="+userId+"&attributeId=Cover",
          "dataType": "json"
		  
		  
		}).done(function(object){
		 if(object.Values){
			 if(object.Values[0].Image){
			 var CoverImage=object.Values[0].Image;
             window.localStorage["attrCoverImage"]=CoverImage;
			 }
		 } else { var CoverImage=null;
			window.localStorage["attrCoverImage"]=CoverImage;		 }
		 
		 
		});
		window.localStorage["attrId"]=userId;
		window.localStorage["attrName"]=userId;
	   window.localStorage["attrType"]="Profile";
		window.localStorage["isPageNF"]="index2";
	
}*/

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
	//return true;
}
function rest(userId) {
	setPath('index2');
	setAttrId(userId, userId , displayImage, coverImage, 'Profile');
	return true;
}
function getAjax1() {
	var userId = window.localStorage["userId"];
	var ajax1 = $.ajax({
		type: 'GET',
        "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/attributeValue?objectId="+userId+"&attributeId=Avatar",
        "dataType": "json",
		async:false
	}).done(function(object){
		if(object.Values) {
			if(object.Values != '' && object.Values[0].Thumbnail){
				var DisplayImage=object.Values[0].Thumbnail;
				//window.localStorage["attrDisplayImage"]=DisplayImage;		
				displayImage = DisplayImage;
			} else {
				var DisplayImage=null;
				//window.localStorage["attrDisplayImage"]=CoverImage;	
				displayImage = DisplayImage;
			}
		} else { 
			var DisplayImage=null;
			displayImage = DisplayImage;
			//window.localStorage["attrDisplayImage"]=DisplayImage;		 
		}
	}); 
		return ajax1;
}
function getAjax2() {
	var userId = window.localStorage["userId"];
	var ajax2 = $.ajax({
		type: 'GET',
	  "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/attributeValue?objectId="+userId+"&attributeId=Cover",
	  "dataType": "json",
	  async:false
	}).done(function(object){
		if(object.Values){
			if(object.Values != '' && object.Values[0].Image){
				var CoverImage=object.Values[0].Image;
				//window.localStorage["attrCoverImage"]=CoverImage;
				coverImage = CoverImage;
			} else {
				var CoverImage=null;
				coverImage = CoverImage;
				//window.localStorage["attrCoverImage"]=CoverImage;	
			 }
		} else { 
			var CoverImage=null;
			coverImage = CoverImage;
			//window.localStorage["attrCoverImage"]=CoverImage;		
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
	window.localStorage["isPageNF"]="";
	window.localStorage["path"]="";
	
	/*window.localStorage["attrCoverImage1"]="";
	window.localStorage["attrDisplayImage1"]="";
	window.localStorage["attrId1"]="";
	window.localStorage["attrName1"]="";
	window.localStorage["attrType1"]="";*/
}