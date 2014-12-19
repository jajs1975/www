
var objInstanceName=window.localStorage["objInstanceName"];
var objInstanceImage=window.localStorage["objInstanceImage"];
var objInstanceId=window.localStorage["objInstanceId"];

	window.localStorage["instanceTitle"]=objInstanceName;
	$('.page-title').html(objInstanceName);
    document.getElementById('instance-image').src = objInstanceImage;  
	document.getElementById('action-icon-right').href = "to_InstanceInfo.html";

