function loadFooter(){
	url = "config/characters.json";
    	$.getJSON(url).done(function(response) {
		
		if(dbug > 0){console.log(response);}

		$.each(response, function( label, value ) {
			var content_div = document.getElementById(label + "_div");
			content_HTML = '<div id="' + label + 'Content_div">';
				content_HTML += '<section><h3>' + label + '</h3><ul>';
			
				$.each(value, function( index, value ) {
					if(label.toLowerCase() == 'characters'){
						content_HTML += '<li>' + index + ' - ' + value.name + '</li>';
					}
					else{
						content_HTML += '<li>' + index + ' - ' + value + '</li>';
					}
					
				});
			content_HTML += '</ul></section></div>';
			content_div.innerHTML = content_HTML;			
		});
		loadLabeler(response);
	    
       });
	
}

function loadLabeler(labelerObj){
	content_HTML = '';
	var content_div = document.getElementById("labeler_div");
	$.each(labelerObj, function( label, value ) {
		var content_div = document.getElementById("labeler_div");
		content_HTML += '<div id="' + label + 'LabelerContent_div" style="float: left; height: auto; width: auto; padding: 1px; margin-left: 2px;">';
			content_HTML += '<section><h3>' + label + '</h3><select size="1" id="' + label + '" onchange="change' + label + '();" title="' + label + '">';
		
			$.each(value, function( index, value ) {
				if(label.toLowerCase() == 'characters'){
					content_HTML += '<option value=' + index + '">' + value.name + '</option>';
				}
				else{
					content_HTML += '<option value=' + index + '">' + value + '</option>';
				}
				
			});
		content_HTML += '</select></section></div>';
		content_div.innerHTML = content_HTML;			
	});	

}