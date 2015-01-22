var propId=getInstData('objInstanceId', false);//window.localStorage["propId"];
var objInstanceId=getAttrData('attrId', false);//window.localStorage["objInstanceId"];
var urlComm = window.localStorage["urlComm"];

if (urlComm == undefined) {
    urlComm = "smartcitypois"; //para llamadas a servicios
    window.localStorage["urlComm"] = urlComm;
}

$.ajax({
    type: 'GET',
          "url": "http://" + urlComm + ".spribo.qoslabs.com/spribo/api/attributeValue?objectId="+objInstanceId+"&attributeId="+ propId,
          "dataType": "json"
    }).done(function(response){
	var  value = "";
	 if(response.Values){
		for(var i=0; i<response.Values.length ; i++){
			value+= response.Values[i];
			value+= "<br>";
		}
	}
		$('#propValue').html(value);
        $('#subtitle').html(response.Name);
}); 
