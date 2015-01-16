var propId=window.localStorage["propId"];
var objInstanceId=window.localStorage["objInstanceId"];

$.ajax({
    type: 'GET',
          "url": "http://smartcitypois.spribo.qoslabs.com/spribo/api/attributeValue?objectId="+objInstanceId+"&attributeId="+ propId,
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
