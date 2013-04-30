$(document).ready(function() {
	setupMobileNav();
	setupIconSize();
	setupLinkScroll();
	setupBackToTopLink();
});
$(window).resize(function() {
	setupMobileNav();
	setupIconSize();
});
$(window).scroll(function() {
	setupBackToTopLink();
});
function setupLinkScroll() {
	$("nav a, .portfolio-link, .back-to-top").click(function() {
		var goToSection = $(this).attr("href");
		$("html, body").animate({ 
			scrollTop: $(goToSection).offset().top 
		}, 1000);
		return false;
	});
}
function setupIconSize() {
	$(".icon").each(function() {
		var outerwidth = $(this).outerWidth();
		var width = $(this).width();
		var borderRadius = outerwidth / 2 + "px";
		$(this).height(width).css("border-radius",borderRadius);
	})
}
function setupBackToTopLink() {
	if (!($('header').visible())) {
		$(".back-to-top").fadeIn();
	}
	else {
		$(".back-to-top").fadeOut();
	}
}
function setupMobileNav() {
	if ($(window).width() > 899) {
		$("nav").removeClass("mobile-nav").show();
	}
	if ($(window).width() < 900) {
		$("nav").addClass("mobile-nav").slideUp();
		$(".nav-trigger").click(function() {		
			if (!($("nav").is(":visible"))) {
				$("nav ul").show().parent("nav").slideDown();
			} else {
				$("nav").hide().stop();
			}
		});
	}
}

(function($){
	$.fn.visible = function(partial){
		var $t	= $(this),
		$w	= $(window),
		viewTop	= $w.scrollTop(),
		viewBottom	= viewTop + $w.height(),
		_top	= $t.offset().top,
		_bottom	= _top + $t.height(),
		compareTop	= partial === true ? _bottom : _top,
		compareBottom	= partial === true ? _top : _bottom;
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	}; 
})(jQuery);