$(document).ready(function() {
	$(".navTrigger").click(function () {
		$(this).next('nav').slideToggle('fast','linear');
	});
});
$(window).resize(function() {
	var secondBreak = "900";
	var firstBreak = "500";
	var windowSize = "";
	var newWidth = $(window).width();
	
	if (newWidth < firstBreak) {
		windowSize = "Mobile";
	}
	if (newWidth >= firstBreak) {
		if (newWidth <= secondBreak) {
			windowSize = "Tablet";
		}
	}
	if (newWidth > secondBreak) {
		windowSize = "Desktop";
	}

	if (windowSize == "Mobile") {
		
	}
	
	if (windowSize == "Tablet") {
		
	}
	
	if (windowSize == "Desktop") {
		
	}
});


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".lets-animate");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

