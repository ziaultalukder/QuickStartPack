$(document).ready(function(){
	$('#nav').slicknav();
	$("#responsiv-videos").fitVids();
});

$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('nav').addClass('black');
	}else{
		$('nav').removeClass('black');
	}
})


window.sr = ScrollReveal();
// sr.reveal('.navi', {
// 	duration:2000,
// 	origin:'bottom'
// });

sr.reveal('.imgSection', {
	duration:2000,
	origin:'bottom',
	distance:'100px'
});

sr.reveal('.images', {
	duration:2000,
	origin:'top',
	distance:'300px'
});

sr.reveal('.aboutContent', {
	duration:2000,
	origin:'right',
	distance:'300px',
	viewFactor:.2
});
sr.reveal('.portfulioContent', {
	duration:2000,
	origin:'top',
	distance:'300px'
});

sr.reveal('.services1', {
	duration:2000,
	origin:'left',
	distance:'300px'
});

sr.reveal('.services2', {
	duration:2000,
	origin:'top',
	distance:'300px'
});

sr.reveal('.services3', {
	duration:2000,
	origin:'right',
	distance:'300px'
});
sr.reveal('.resume1', {
	duration:2000,
	origin:'right',
	distance:'300px'
});

sr.reveal('.resume2', {
	duration:2000,
	origin:'left',
	distance:'300px'
});

sr.reveal('.resume3', {
	duration:2000,
	origin:'top',
	distance:'300px'
});

sr.reveal('.imgBox1', {
	duration:2000,
	origin:'left',
	distance:'300px'
});

sr.reveal('.imgBox2', {
	duration:2000,
	origin:'top',
	distance:'300px'
});

sr.reveal('.imgBox3', {
	duration:2000,
	origin:'right',
	distance:'300px'
});

sr.reveal('.blog1', {
	duration:2000,
	origin:'left',
	distance:'300px'
});

sr.reveal('.blog2', {
	duration:2000,
	origin:'top',
	distance:'300px'
});

sr.reveal('.blog3', {
	duration:2000,
	origin:'right',
	distance:'300px'
});


sr.reveal('.submitFormSection', {
	duration:2000,
	origin:'left',
	distance:'300px'
});

sr.reveal('.contactSec', {
	duration:2000,
	origin:'right',
	distance:'300px'
});
sr.reveal('.theme', {
	duration:2000,
	origin:'top',
	distance:'300px'
});



//SmoothScroll

$(document).ready(function(){
// Add smooth scrolling to all links
$("a").on('mouseover', function(event) {

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1000, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
} // End if 
});
});