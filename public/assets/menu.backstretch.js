// Preload the images
var images = ["home.jpg", "directions.jpg", "schedule.jpg", "contact.jpg"];

// A little script for preloading all of the images
 	// It"s not necessary, but generally a good idea
 	$(images).each(function(){
    $("<img/>")[0].src = this;
});

// Set default background (defaultimg defined in each page)
$.backstretch(defaultimg);

// Set menu rollovers
if (screen.width > 768){ 		// Only do it for screen width > 768 (i.e., not iPads and phones)
	$("#logo").mouseover(function(e) { $.backstretch(images[0], {speed: 400}); });
	$("#logo").mouseout(function(e) { $.backstretch(defaultimg, {speed: 400}); });

	$("#directions").mouseover(function(e) { $.backstretch(images[1], {speed: 400}); });
	$("#directions").mouseout(function(e) { $.backstretch(defaultimg, {speed: 400}); });

	$("#schedule").mouseover(function(e) { $.backstretch(images[2], {speed: 400}); });
	$("#schedule").mouseout(function(e) { $.backstretch(defaultimg, {speed: 400}); });

	$("#contactm").mouseover(function(e) { $.backstretch(images[3], {speed: 400}); });
	$("#contactm").mouseout(function(e) { $.backstretch(defaultimg, {speed: 400}); });
}