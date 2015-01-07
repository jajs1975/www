var attrId=window.localStorage["attrId"];
var attrName=window.localStorage["attrName"];
var attrDisplayImage=window.localStorage["attrDisplayImage"];
var attrCoverImage=window.localStorage["attrCoverImage"];
var attrType=window.localStorage["attrType"]; 
//alert('displayImg' + attrDisplayImage)
//alert ('Tyoe' + attrType)
if (attrId == undefined) attrId = 1;

//Servicio 7 -- Lista los objetos de una instancia de tipo objeto

$('.page-title').html(attrName);
$('#subtitle').hide();
$( '.ui-header .ui-title' ).css( "padding","0.7em 0" );

if (attrCoverImage) {
    $('#bkgImg').html('<img id ="background" class="img-thumbnail" src="'+ attrCoverImage +'" />');	
} else {		
    $('#bkgImg').html('<span>Sin Imagen de Fondo</span>');	
}
if (attrType == 'Profile') {
	  $('#action-icon-right').removeClass('hide-action-icon-right'); 
    document.getElementById('action-icon-right').href = "to_AttrInfo.html";
    $('#prflImg').removeClass('hide-action-icon-right');
    if (attrDisplayImage) {
    	 $('#prflImg').html('<img id ="profile" style="border: 2px solid silver; height: 130px; width: 130px; " class="img-responsive img-circle img-responsive-rounded" src="'+ attrDisplayImage +'" />');	
      
    } else {
        $('#prflImg').html('<span> Sin Imagen de Perfil </span>');	
    }
}
