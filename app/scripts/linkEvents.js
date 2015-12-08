$( document ).ready(function() {
    $("#loginLink").click(function(event){
    	event.preventDefault();
		var width = "615";
		var height = "504";
		var leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    		var topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    		var dimensions = "height =" + height + "," + "width=" + width + ", left=" + leftPosition + ", top=" + topPosition + ", screenX=" + leftPosition 
    		+ ", screenY=" + topPosition; 
		
    	var link = $(this).attr("href");
    	window.open(link, "_blank", dimensions);
    });
});