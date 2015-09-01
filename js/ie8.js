$(document).ready(function() {
	$('.participants > ul > li:nth-child(3n), .prenews ul li:nth-child(3n), .gallery-b ul li:nth-child(3n), .gallery-s ul li:nth-child(7n), .contacts-b .core > ul > li:nth-child(2n), .news-b > ul li:nth-child(3n), .partners-b li:nth-child(6n)').css({
		'margin-right': '-20px !important'
	});
	$('.participants > ul > li:nth-child(2n) > div').css({
		'width': '168px',
		'margin-left': '66px',
		'-webkit-border-radius': '50%',
		'-moz-border-radius': '50%',
		'border-radius': '50%'
	});
	$('.participants > ul > li:nth-child(2n) > div img').css({
		'left': '-66px'
	});
	$('nav ul li:last-child').css({
		'margin-right': '-10px !important'
	});
	$('.contacts-b .core > ul > li > div > ul > li:last-child').css({
		'padding-bottom': '0'
	});
});