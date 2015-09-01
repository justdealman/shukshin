function nav() {
	var w = 0;
	$('nav ul li').each(function() {
		w = w+$(this).outerWidth();
	});
	var r = ($('nav ul').outerWidth()-w)/($('nav ul li').size()-1);
	$('nav ul li').css({
		'margin-right': r+'px'
	});
}
function intro() {
	var t = $('.introduction > div > div');
	t.css({
		'margin-top': -t.outerHeight()/2+'px'
	});
}
function party() {
	var w = 0;
	$('nav ul li').each(function() {
		w = w+$(this).outerWidth();
	});
	var r = ($('.participants > ul').outerWidth()-$('.participants > ul > li').width()*3)/2-3;
	$('.participants > ul > li').css({
		'margin-right': r+'px'
	});
}
function prenews() {
	var w = 0;
	$('.prenews ul li').each(function() {
		w = w+$(this).outerWidth();
	});
	var r = ($('.prenews ul').outerWidth()-$('.prenews ul li').width()*3)/3-3;
	$('.prenews ul li').css({
		'margin-right': r+'px'
	});
}
function gallery() {
	var r = ($('.gallery-b ul').outerWidth()-$('.gallery-b ul li').width()*3)/2-3;
	$('.gallery-b ul li').css({
		'margin-right': r+'px'
	});
}
function gallery2() {
	var r = ($('.gallery-s ul').outerWidth()-$('.gallery-s ul li').width()*7)/6-3;
	$('.gallery-s ul li').css({
		'margin-right': r+'px'
	});
}
function contacts() {
	var r = ($('.contacts-b .core > ul').outerWidth()-$('.contacts-b .core > ul > li').width()*2)-3;
	$('.contacts-b .core > ul > li').css({
		'margin-right': r+'px'
	});
}
function news() {
	var w = 0;
	$('.news-b > ul li').each(function() {
		w = w+$(this).outerWidth();
	});
	var r = ($('.news-b > ul').outerWidth()-$('.news-b > ul li').width()*3)/3-3;
	$('.news-b > ul li').css({
		'margin-right': r+'px'
	});
}
function partners() {
	var r = ($('.partners-b ul').outerWidth()-$('.partners-b ul li').width()*6)/5-3;
	$('.partners-b ul li').css({
		'margin-right': r+'px'
	});
}
$(document).ready(function() {
	$('.panel h5').bind('click', function(event) {
		var t = $('.panel > div > div');
		if ( t.is(':visible') ) {
			t.stop().slideUp(200);
			$(this).removeClass('active');
		}
		else {
			t.stop().slideDown(200);
			$(this).addClass('active');
		}
		event.preventDefault();
	});
	$('html').click(function() {
		$('.panel > div > div').stop().slideUp(200);
		$('.panel h5').removeClass('active');
	});
	$('.panel h5, .panel > div > div').click(function(event){
		event.stopPropagation();
	});
	if ( $('.carousel').length > 0 ) {
		$('.carousel ul').jcarousel({
			scroll: 1,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.carousel .jcarousel-container').bind('swipeleft', function() {
			$('.carousel .jcarousel-container .jcarousel-next').trigger('click');
		});
		$('.carousel .jcarousel-container').bind('swiperight', function() {
			$('.carousel .jcarousel-container .jcarousel-prev').trigger('click');
		});
	}
	if ( $('.introduction').next('.participants').length > 0 ) {
		$('.participants').css({
			'padding': '53px 0 27px',
			'margin': '0 auto'
		});
	}
	if ( $('.about-b').next('.participants').length > 0 ) {
		$('.participants').css({
			'padding': '0',
			'margin': '-10px auto -7px'
		});
	}
	if ( $('.single-b .slider').length > 0 ) {
		$('.single-b .slider ul').jcarousel({
			scroll: 1,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.single-b .slider .jcarousel-container').bind('swipeleft', function() {
			$('.single-b .slider .jcarousel-container .jcarousel-next').trigger('click');
		});
		$('.single-b .slider .jcarousel-container').bind('swiperight', function() {
			$('.single-b .slider .jcarousel-container .jcarousel-prev').trigger('click');
		});
	}
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
});
$(window).load(function() {
	nav();
	$('nav ul').css({
		'opacity': '1'
	});
	if ( $('.introduction').length > 0 ) {
		intro();
	}
	if ( $('.participants').length > 0 ) {
		party();
		$('.participants > ul').css({
			'opacity': '1'
		});
	}
	if ( $('.prenews').length > 0 ) {
		prenews();
		$('.prenews > ul').css({
			'opacity': '1'
		});
	}
	if ( $('.gallery-b').length > 0 ) {
		gallery();
		$('.gallery-b ul').css({
			'opacity': '1'
		});
	}
	if ( $('.gallery-s').length > 0 ) {
		gallery2();
		$('.gallery-s ul').css({
			'opacity': '1'
		});
	}
	if ( $('.contacts-b').length > 0 ) {
		contacts();
		$('.contacts-b .core > ul').css({
			'opacity': '1'
		});
	}
	if ( $('.news-b').length > 0 ) {
		news();
		$('.news-b > ul').css({
			'opacity': '1'
		});
	}
	if ( $('.partners-b').length > 0 ) {
		partners();
		$('.partners-b ul').css({
			'opacity': '1'
		});
	}
});
$(window).resize(function() {
	nav();
	if ( $('.introduction').length > 0 ) {
		intro();
	}
	if ( $('.participants').length > 0 ) {
		party();
	}
	if ( $('.prenews').length > 0 ) {
		prenews();
	}
	if ( $('.gallery-b').length > 0 ) {
		gallery();
	}
	if ( $('.gallery-s').length > 0 ) {
		gallery2();
	}
	if ( $('.contacts-b').length > 0 ) {
		contacts();
	}
	if ( $('.news-b').length > 0 ) {
		news();
	}
	if ( $('.partners-b').length > 0 ) {
		partners();
	}
});