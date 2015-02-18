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
	alert('respuesta: ' + JSON.stringify(response));
	 if(response.Values){
		for(var i=0; i<response.Values.length ; i++){
			value+= response.Values[i];
			value+= "<br>";
		}
	} else {
		alert('response value es false');
	}
	
	/*var z = JSON.parse(response);
	for(var i in z) {
		for(var j in x[i]) {
			console.log(j, '-->' ,z[i][j]);
		}
	}*/
		$('#propValue').html(value);
		alert('Id del propValue: ' + document.getElementById('propValue').innerHTML + 'Id del subtitle: ' + document.getElementById('subtitle').innerHTML);
        $('#subtitle').html(response.Name);
		//alert();
}); 
