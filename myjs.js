console.log('1');
	$("#maincontent").swipeleft(function() {
		console.log('swipeleft');
		$( "#myPanel" ).panel( "close" );
	});  
	$("#maincontent").swiperight(function() {
	  console.log('swiperight');
	  $( "#myPanel" ).panel( "open" );
	});  
console.log($("#maincontent"));
	   

	
	/*$(document).on('pagebeforeshow', '#pageone', function(){       
    $( "#myPanel" ).panel( "open");
});*/

window.onresize = function (event) {
	if (window.innerWidth >= 768) {
		window.setTimeout(openPanel, 1);
	}
	if (window.innerWidth < 768) {
		window.setTimeout(closePanel, 1);
	}
};

function closePanel() {
	$("#myPanel").panel("close");
}
function openPanel() {
	$("#myPanel").panel("open");
}

$( "#myPanel" ).on( "panelcreate", function( event, ui ) {
	if (window.innerWidth >= 768) {
		openPanel();
	}
	if (window.innerWidth < 768) {
		closePanel();
	}
});